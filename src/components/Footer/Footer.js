import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import css from "./Footer.module.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return <div className={css.footer}>
        <div className={css.left}>
            <h2>Author: </h2>
            <table className={css.table}>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>Athithian</td>
                    </tr>
                    <tr>
                        <td>Mail: </td>
                        <td>athithianpkt2001@gmail.com</td>
                    </tr>
                    {/* <tr>
                        <td>Phone</td>
                        <td>+91 9597891364</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
        <div className={css.right}>
            <h2>Repository:</h2>
            <a href="">
                <FontAwesomeIcon icon={faGithub} style={{height: "25px", width: "25px"}}/>
            </a>
        </div>
    </div>
}