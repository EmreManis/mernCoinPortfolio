import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import TransactionModal from "./components/Transactions/TransactionModal";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/home">
          <Homepage/>
        </Route>
        <Route path="/login">
          <Homepage />
          <Login/>
        </Route>
        <Route path="/signup">
        <Homepage />
          <Signup/>
          </Route>
        <Route path="/transaction">
          <Homepage />
          <TransactionModal />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
