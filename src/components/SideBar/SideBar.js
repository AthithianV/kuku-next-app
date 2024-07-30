import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import css from "./Sidebar.module.css"
import { faArrowTrendUp, faGhost, faHandFist, faHeart, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({setSideBar, sideBar}){

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            setSideBar(false)
          const offset = 75; // Adjust this offset according to your navbar height
          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: "smooth",
          });

        }
      };

    return <div className={`${css.Sidebar} ${sideBar?css.open:""}`}>
        <div className={`${css.wrapper} ${sideBar?css.open:""}`}>
            <div className={css.header}>
                <div className={css.brand}>KUKU<span className={css.fm}>FM</span></div>
                <div className={css.close} onClick={()=>setSideBar(false)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <ul className={css.links}>
                <li
                    className={`${css.languages} ${css.navElement}`}
                    onClick={() => scrollToSection("top10")}
                >
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon={faArrowTrendUp}/>Top 10 India
                </li>
                <li
                    className={`${css.premium} ${css.navElement}`}
                    onClick={() => scrollToSection("vipshows")}
                >
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon={faStar}/>VIP shows
                </li>
                <li
                    className={`${css.auth} ${css.navElement}`}
                    onClick={() => scrollToSection("Motivation")}
                >
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon={faHandFist}/>Motivation
                </li>
                <li
                    className={`${css.auth} ${css.navElement}`}
                    onClick={() => scrollToSection("Love")}
                >
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon={faHeart}/>Love
                </li>
                <li
                    className={`${css.auth} ${css.navElement}`}
                    onClick={() => scrollToSection("Horror")}
                >
                    <FontAwesomeIcon style={{marginRight: "10px"}} icon={faGhost}/>Horror
                </li>
            </ul>
        </div>
    </div>
}