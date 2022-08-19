import React, { PureComponent } from "react";
import * as css from "./css.module.scss";
import PropTypes from "prop-types";

const Button = (props) => {
  const semantic = props.sematic
    .split(" ")
    .map((x) => css[x])
    .join(" ");

  return <button className={semantic}>{props.children}</button>;
};
// const LoadingButton = (props) => {
//   const { loading } = props;
//   let semantic = loading ? `${css.loading} ` : "";
//   semantic += props.sematic
//     .split(" ")
//     .map((x) => css[x])
//     .join(" ");

//   return (
//     <button className={semantic} onClick={props.onClick}>
//       <svg viewBox="0 0 16 16">
//         <circle strokeOpacity=".1" cx="8" cy="8" r="6"></circle>
//         <circle className={css.load} cx="8" cy="8" r="6"></circle>
//       </svg>
//       <span>{props.children}</span>
//     </button>
//   );
// };
class LoadingButton extends PureComponent {
  state = {
    loading: this.props.loading,
  };
  setLoading = (loading) => this.setState({ loading });
  render() {
    let semantic = this.state.loading ? `${css.loading} ` : "";
    semantic += this.props.sematic
      .split(" ")
      .map((x) => css[x])
      .join(" ");
    return (
      <button className={semantic} onClick={this.props.onClick}>
        <svg viewBox="0 0 16 16">
          <circle strokeOpacity=".1" cx="8" cy="8" r="6"></circle>
          <circle className={css.load} cx="8" cy="8" r="6"></circle>
        </svg>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

Button.prototype = {
  sematic: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  sematic: "",
  onClick: () => {},
};
LoadingButton.propTypes = {
  loading: PropTypes.bool,
  sematic: PropTypes.string,
  onClick: PropTypes.func,
};
LoadingButton.defaultProps = {
  loading: false,
  sematic: "",
  onClick: () => {},
};

export { Button, LoadingButton };
