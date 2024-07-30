import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import css from "./Footer.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return <div className={css.footer}>
        <div className={css.left}>
            <h2>Author: </h2>
            <h4>Name: Athithian</h4>
            <h4>Mail: athithianpkt2001@gmail.com</h4>
        </div>
        <div className={css.right}>
            <h2>Repository:</h2>
            <a href="">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </div>
    </div>
}