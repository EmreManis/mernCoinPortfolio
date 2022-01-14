import { useState, useCallback, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import Homepage from "./Pages/Homepage";

const TransactionModal = lazy(() => import('./components/Transactions/TransactionModal'));
const Login = lazy(() => import('./Pages/Auth/Login'));
const Signup = lazy(() => import('./Pages/Auth/Signup'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
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
