import css from "./BlackScreen.module.css";

export default function BlackScreen({setSideBar}){
    return <div className={css.BlackScreen} onClick={()=>setSideBar(false)}>

    </div>
}