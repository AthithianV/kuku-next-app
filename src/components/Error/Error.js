import { useDispatch, useSelector } from "react-redux";
import css from "./Error.module.css";
import { dataAction, dataSelector } from "../../store/reducers/data.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  const { error } = useSelector(dataSelector);
  const dispatch = useDispatch();

  return (
    error && (
      <div className={css.error}>
        <div className={css.wrapper}>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <h4>Oops, Something went wrong</h4>
          <div
            className={css.close}
            onClick={() => dispatch(dataAction.removeError())}
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{ height: "15px", width: "15px", margin: "0 5px" }}
            />
          </div>
        </div>
      </div>
    )
  );
}
