import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Sidebar.module.css";
import {
  faArrowTrendUp,
  faGhost,
  faHandFist,
  faHeart,
  faStar,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Sidebar({ setSideBar, sideBar }) {
  const [error, setError] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setSideBar(false);
      const offset = 75; // Adjust this offset according to your navbar height
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    } else {
      setError("Scroll to Explore more!!!");
    }
  };

  return (
    <div className={`${css.Sidebar} ${sideBar ? css.open : ""}`}>
      <div className={`${css.wrapper} ${sideBar ? css.open : ""}`}>
        <div className={css.header}>
          <div className={css.brand}>
            KUKU<span className={css.fm}>FM</span>
          </div>
          <div
            className={css.close}
            onClick={() => {
              setError(null);
              setSideBar(false);
            }}
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{ height: "20px", width: "20px" }}
            />
          </div>
        </div>

        <ul className={css.links}>
          <li
            className={`${css.languages} ${css.navElement}`}
            onClick={() => scrollToSection("top10")}
          >
            <FontAwesomeIcon className={css.icon} icon={faArrowTrendUp} />
            Top 10 India
          </li>
          <li
            className={`${css.premium} ${css.navElement}`}
            onClick={() => scrollToSection("vipshows")}
          >
            <FontAwesomeIcon className={css.icon} icon={faStar} />
            VIP shows
          </li>
          <li
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Motivation")}
          >
            <FontAwesomeIcon className={css.icon} icon={faHandFist} />
            Motivation
          </li>
          <li
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Love")}
          >
            <FontAwesomeIcon className={css.icon} icon={faHeart} />
            Love
          </li>
          <li
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Horror")}
          >
            <FontAwesomeIcon className={css.icon} icon={faGhost} />
            Horror
          </li>
        </ul>
        {error && (
          <div className={css.errorBox}>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              style={{
                height: "25px",
                width: "25px",
                color: "red",
                marginRight: "5px",
              }}
            />
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
