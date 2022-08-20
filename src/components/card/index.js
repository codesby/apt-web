import React from "react";
import * as css from "./css.module.scss";

const Card = (props) => {
  return (
    <article className={css.card} style={{ width: `${props.width}px` }}>
      <div className={css.content}>{props.children}</div>
    </article>
  );
};

export default Card;
