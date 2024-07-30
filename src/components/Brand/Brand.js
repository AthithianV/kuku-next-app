import css from "./Brand.module.css";

export default function Brand(){
    return <div className={css.brand}>
        <span className={css.kuku}>KUKU</span>
        <span className={css.fm}>FM</span>
    </div>
}