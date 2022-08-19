import React from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import Layout from "components/layout";
import Home from "views/home";
import Login from "views/login";

const App = (props) => {
  const _layout = React.createRef();

  const { page, context } = props;
  context.loading = (isLoading, msg) => _layout.current?.loading(isLoading, msg);
  context.page = page;

  const { user } = context.auth;
  const { fetching } = context;

  if (fetching) return null;
  //https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
  if (!user && page.pathname !== "/login") {
    navigate("/login"); // navigate to login page if user tries to access a page without authentication first
    return null;
  }
  if (user && page.pathname === "/login") {
    navigate("/"); //navigate to the home page if user is authenticated but trues to access to login page
    return;
  }
  return (
    <Layout ref={_layout} loading={fetching}>
      <Router basepath="/">
        <Home path="/" context={context} />
        <Login path="/login" context={context} />
      </Router>
    </Layout>
  );
};
export default App;
