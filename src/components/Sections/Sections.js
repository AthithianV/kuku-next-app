import css from "./Sections.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Arrows/Arrows.js";
import Image from "next/image";

export default function Sections({ data }) {

  const settings = {
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          padding: "5px",
          position: "relative",
          bottom: 0,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: data.length,
          slidesToScroll: data.length,
          vertical: true,
          infinite: false,
        },
      },
    ],
  };
  


  return (
    <div className={css.Section}>
      <Slider {...settings}>
        {data &&
          data.map((item, index) => {
            return (
              <div className={css.item} key={index}>
                <div className={css.body}>
                  <div className={css.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    // placeholder="blur"
                  />
                  </div>
                  <div className={css.content}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

