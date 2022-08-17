import React from "react";
import { Router } from "@reach/router";

import Home from "views/home";
import Login from "views/login";
import { navigate } from "gatsby";

const App = ({ context, page }) => {
  let isloggedIn = true; // use to test access to pages based on user authentication
  //https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/
  if (!context.auth.isLoggedIn(isloggedIn) && page.pathname !== "/login") {
    navigate("/login"); // navigate to login page if user tries to access a page without authentication first
    return null;
  }
  if (context.auth.isLoggedIn(isloggedIn) && page.pathname === "/login") {
    navigate("/"); //navigate to the home page if user is authenticated but trues to access to login page
    return;
  }
  return (
    <Router basepath="/">
      <Home path="/" />
      <Login path="/login" />
    </Router>
  );
};
export default App;
