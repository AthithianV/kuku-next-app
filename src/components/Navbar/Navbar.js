import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brand from "../Brand/Brand";
import css from "./Navbar.module.css";
import {
  faBars,
  faArrowTrendUp,
  faStar,
  faHandFist,
  faHeart,
  faGhost,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { dataAction } from "@/store/reducers/data.reducer";

export default function Navbar({ setSideBar }) {
  const dispatch = useDispatch();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // Adjust this offset according to your navbar height
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    } else {
      dispatch(dataAction.setError("Scroll to Explore More!!!"));
    }
  };

  return (
    <nav className={css.navbar}>
      <div className={css.left}>
        <div className={`${css.navbarIcon}`} onClick={() => setSideBar(true)}>
          <FontAwesomeIcon icon={faBars} className={css.icon} />
        </div>
        <Brand />
      </div>

      <div className={css.right}>
        <div className={css.links}>
          <div
            className={`${css.languages} ${css.navElement}`}
            onClick={() => scrollToSection("top10")}
          >
            <FontAwesomeIcon icon={faArrowTrendUp} className={css.icon} />
            Top 10 India
          </div>
          <div
            className={`${css.premium} ${css.navElement}`}
            onClick={() => scrollToSection("vipshows")}
          >
            <FontAwesomeIcon icon={faStar} className={css.icon} />
            VIP shows
          </div>
          <div
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Motivation")}
          >
            <FontAwesomeIcon icon={faHandFist} className={css.icon} />
            Motivation
          </div>
          <div
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Love")}
          >
            <FontAwesomeIcon icon={faHeart} className={css.icon} />
            Love
          </div>
          <div
            className={`${css.auth} ${css.navElement}`}
            onClick={() => scrollToSection("Horror")}
          >
            <FontAwesomeIcon icon={faGhost} className={css.icon} />
            Horror
          </div>
        </div>
        <div className={`${css.download} ${css.navElement}`}>
          <a
            href="https://play.google.com/store/apps/details?gl=US&hl=en_IN&id=com.vlv.aravali"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDownload} className={css.icon} />
          </a>
        </div>
      </div>
    </nav>
  );
}
