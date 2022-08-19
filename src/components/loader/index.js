import React from "react";
import * as css from "./css.module.scss";
const Loader = (props) => {
  return (
    <div className={`${props.active ? css.active : ""} ${css.loader}`}>
      <svg height="100" width="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45"></circle>
        <circle cx="50" cy="50" r="45"></circle>
      </svg>
      <p>{props.msg}</p>
    </div>
  );
};
export default Loader;
