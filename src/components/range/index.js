import React, { useEffect, useState } from "react";
import * as css from "./css.module.scss";
import PropTypes from "prop-types";

const Range = (props) => {
  const rangeValues = [22, 24, 26, 28, 30];
  //   const [rangeValues, setRangeValues] = useState(null);
  const onChange = (e) => {
    applyFill(e.target);
    props.onChange(e.target.value);
    console.log(Math.round(e.target.value));
  };
  function applyFill(range) {
    const style = window.getComputedStyle(document.body);
    const rangeTrail = {
      fill: style.getPropertyValue("--primary-color"),
      background: "#f7f7f9",
    };
    let target = range;
    if (range.target) target = range.target;

    const percentage =
      (100 * (target.value - target.min)) / (target.max - target.min);
    const bg = `linear-gradient(90deg, ${rangeTrail.fill} ${percentage}%, ${
      rangeTrail.background
    } ${percentage + 0.1}%)`;
    target.style.background = bg;
  }
  useEffect(() => {
    const range = document.querySelector(`.${css.range}`);

    applyFill(range.querySelector("input"));
  });

  return (
    <label htmlFor="range" className={css.range}>
      <div className={css.values}>
        {rangeValues?.map((value) => (
          <span key={value}>{value}&deg;</span>
        ))}
      </div>
      <input
        id="range"
        type="range"
        min={props.min}
        max={props.max}
        step={0.1}
        defaultValue={props.value}
        onInput={onChange}
      />
    </label>
  );
};

Range.prototype = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
Range.defaultProps = {
  min: 22,
  max: 30,
  value: 22,
  onChange: () => {},
};
export default Range;
