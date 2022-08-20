import React from "react";
import * as css from "./css.module.scss";

const Card = (props) => {
  return (
    <article className={css.card} style={{ maxWidth: `${props.width}px` }}>
      {props.children}
    </article>
  );
};

export default Card;
