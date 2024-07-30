import { useDispatch, useSelector } from "react-redux"
import css from "./Error.module.css"
import { dataAction, dataSelector } from "../../store/reducers/data.reducer"

export default function Error(){

    const {error} = useSelector(dataSelector);
    const dispatch = useDispatch();

    return error && <div className={css.error}>
        <div className={css.wrapper}>
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h4>Oops, Something went wrong</h4>
            <div className={css.close} onClick={()=>dispatch(dataAction.removeError())}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>
}