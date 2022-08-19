import React, { PureComponent } from "react";
import * as css from "./css.module.scss";
import Loader from "components/loader";

class Layout extends PureComponent {
  state = {
    loading: this.props.loading,
    loadingMessage: "",
  };

  loading = (loading, loadingMessage = "") => {
    this.setState({ loading, loadingMessage });
    return this;
  };
  render() {
    const { state, props } = this;
    return (
      <section className={css.layout}>
        <main>{props.children}</main>
        <Loader active={state.loading} msg={state.msg} />
      </section>
    );
  }
}
export default Layout;
