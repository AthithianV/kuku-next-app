import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.wrapper}>
        <ColorRing
          visible={true}
          height="30"
          width="30"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["white", "white", "white", "white", "white"]}
        />
        <h2>Loading...</h2>
      </div>
    </div>
  );
}
