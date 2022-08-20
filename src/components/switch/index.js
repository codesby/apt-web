import React from "react";
import PropTypes from "prop-types";
import * as css from "./css.module.scss";

const Switch = (props) => {
  const handleChange = (e) => {
    console.log(e.target.checked);
    props.onChange(e.target.checked);
  };
  return (
    <label className={css.toggle}>
      <input
        type="checkbox"
        defaultChecked={props.checked}
        onChange={handleChange}
      />
      <span></span>
    </label>
  );
};

Switch.prototype = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  checked: false,
  onChange: () => {},
};
export default Switch;
