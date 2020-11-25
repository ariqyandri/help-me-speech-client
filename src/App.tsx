import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Writings from "./pages/Writings/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/writings">
          <Writings />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
