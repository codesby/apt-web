import * as React from "react";
import { Context } from "../services/Provider";

import App from "views/app";

const IndexPage = ({ location: page }) => {
  return (
    <Context.Consumer>
      {(context) => <App context={context} page={page} />}
    </Context.Consumer>
  );
};

export default IndexPage;

export const Head = (props) => {
  return <title>Apt Home Assistant</title>;
};
