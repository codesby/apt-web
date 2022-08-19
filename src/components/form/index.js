import React from "react";
import PropTypes from "prop-types";

const Form = React.forwardRef((props, ref) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (const val of formData.entries()) {
      data[val[0]] = val[1];
    }
    console.log(data);
    props.onSubmit(data);
  };
  return (
    <form ref={ref} onSubmit={handleSubmit} className={props.className}>
      {props.children}
    </form>
  );
});

Form.prototype = {
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};
Form.defaultProps = {
  onSubmit: () => {},
  className: "",
};
export default Form;
