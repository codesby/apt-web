import React from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import Layout from "components/layout";
import Home from "views/home";
import Login from "views/login";

const App = ({ context, page }) => {
  //https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
  if (!context.auth.isLoggedIn() && page.pathname !== "/login") {
    navigate("/login"); // navigate to login page if user tries to access a page without authentication first
    return null;
  }
  if (context.auth.isLoggedIn() && page.pathname === "/login") {
    navigate("/"); //navigate to the home page if user is authenticated but trues to access to login page
    return;
  }

  return (
    <Layout>
      <Router basepath="/">
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </Layout>
  );
};
export default App;
