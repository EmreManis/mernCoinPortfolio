import { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import TransactionModal from "./components/Transactions/TransactionModal";
import Portfolio from "./Pages/Portfolio";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  },[]);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/transaction/:coinName">
          <Homepage />
          <TransactionModal />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/login">
          <Homepage />
          <Login />
        </Route>
        <Route path="/signup">
          <Homepage />
          <Signup />
        </Route>
        <Route path="/transaction/:coinName">
          <Homepage />
          <TransactionModal />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;
