import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Writings from "./pages/Writings/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/writings" component={Writings} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
