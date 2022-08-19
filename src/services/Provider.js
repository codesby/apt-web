//https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/

import React, { useEffect } from "react";
import Auth from "./Auth";
export const Context = React.createContext();

const auth = new Auth();

const Provider = ({ children }) => {
  const [state, setState] = React.useState({ fetching: true });

  auth.user = state.user;

  useEffect(() => {
    const unsubscribe = auth.onChange((user) =>
      setState({ user, fetching: false })
    );
    //clean up unscriptions
    return () => (typeof unsubscribe === "function" ? unsubscribe() : null);
  }, []);

  return (
    <Context.Provider value={{ auth, fetching: state.fetching }}>
      {children}
    </Context.Provider>
  );
};
const App = ({ element }) => <Provider>{element}</Provider>;

export default App;
