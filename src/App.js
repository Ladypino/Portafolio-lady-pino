import React from "react";
import "./assets/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from "./views/HelloWorld";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HelloWorld />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
