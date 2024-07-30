import { useDispatch, useSelector } from "react-redux";
import css from "./Error.module.css";
import { dataAction, dataSelector } from "../../store/reducers/data.reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  const { error, errMsg } = useSelector(dataSelector);
  const dispatch = useDispatch();

  return (
    error && (
      <div className={css.error}>
        <div className={css.wrapper}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            style={{ height: "15px", width: "15px", margin: "0 5px" }}
          />
          <h4>{errMsg ? errMsg : "Oops, Something went wrong"}</h4>
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
