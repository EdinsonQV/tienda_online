import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from "../src/components/views/SignInSide";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignInSide}></Route>
      </Switch>
    </Router>
  );
}

export default App;
