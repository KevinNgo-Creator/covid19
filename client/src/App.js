import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/", "/login"]}>
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
