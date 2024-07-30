import css from "./Banner.module.css";
import { useSelector } from "react-redux";
import { dataSelector } from "../../store/reducers/data.reducer.js";
import { NextArrow, PrevArrow } from "../Arrows/Arrows";
import Slider from "react-slick";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  const { banners } = useSelector(dataSelector);

  return (
    <div className={css.banner}>
      <Slider {...settings}>
        {banners &&
          banners.map((item, index) => (
            <div className={css.item} key={index}>
              <div className={css.p2}>
                <div className={css.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    // placeholder="blur"
                  />
                  <div className={css.playBtn}>
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{ height: "25px", width: "25px" }}
                    />
                  </div>
                </div>
                <div className={css.itemBody}>{item.title}</div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 0,
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
        slidesToShow: 5,
        slidesToScroll: 0,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};
