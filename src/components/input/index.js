import React, { useId } from "react";
import PropTypes from "prop-types";
import * as css from "./css.module.scss";

const Input = React.forwardRef((props, ref) => {
  return (
    <label htmlFor={props.name}>
      <span>{props.label}</span>
      <input id={props.name} name={props.name} type={props.type} ref={ref} />
    </label>
  );
});

Input.prototype = {
  name: useId(),
  label: PropTypes.string,
  type: PropTypes.string,
};
Input.defaultProps = {
  name: useId(),
  label: PropTypes.string,
  type: PropTypes.string,
};
export default Input;
