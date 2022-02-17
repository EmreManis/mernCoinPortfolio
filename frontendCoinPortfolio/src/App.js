import { useState, useCallback, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { w3cwebsocket as W3CWEBSOCKET } from "websocket";

import { AuthContext } from "./shared/context/auth-context";
import Homepage from "./Pages/Homepage";

let logoutTimer;

const client = new W3CWEBSOCKET("ws://127.0.0.1:8000")

const TransactionModal = lazy(() =>
  import("./components/Transactions/TransactionModal")
);
const Login = lazy(() => import("./Pages/Auth/Login"));
const Signup = lazy(() => import("./Pages/Auth/Signup"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));

function App() {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const logout = useCallback((uid, token) => {
    setToken(null);
    setUserId(uid);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if(token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(logoutTimer);
    }
  },[token, logout, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    }
  }, [])

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
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>{routes}</Router>
      {/* <Router><Portfolio /></Router> */}
    </AuthContext.Provider>
  );
}

export default App;
