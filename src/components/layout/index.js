import React, { PureComponent } from "react";
import * as css from "./css.module.scss";
class Layout extends PureComponent {
  state = {
    loading: true,
    loadingMessage: "",
  };

  loading = (loading, loadingMessage) => {
    this.setState({ loading, loadingMessage });
    return this;
  };
  render() {
    const { state, props } = this;
    return (
      <section className={css.layout}>
        <main>{props.children}</main>
      </section>
    );
  }
}
export default Layout;
