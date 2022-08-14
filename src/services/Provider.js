//https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/

import React from "react";
import Auth from "./Auth";
export const Context = React.createContext();

const Provider = ({ children }) => {
  let auth = new Auth();

  return <Context.Provider value={{ auth }}>{children}</Context.Provider>;
};
const App = ({ element }) => <Provider>{element}</Provider>;

export default App;
