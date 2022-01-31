import { useState, useCallback, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import Homepage from "./Pages/Homepage";
import Portfolio from "./Pages/Portfolio";

const TransactionModal = lazy(() => import('./components/Transactions/TransactionModal'));
const Login = lazy(() => import('./Pages/Auth/Login'));
const Signup = lazy(() => import('./Pages/Auth/Signup'));
// const Portfolio = lazy(() => import('./Pages/Portfolio'));

function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback((uid, token) => {
    setToken(null);
    setUserId(uid);
  }, []);

  let routes;
  if (token) {
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
      value={{ isLoggedIn: !!token,token: token,userId: userId, login: login, logout: logout }}
    >
      <Router>{routes}</Router>
      {/* <Router><Portfolio /></Router> */}
    </AuthContext.Provider>
  );
}

export default App;
