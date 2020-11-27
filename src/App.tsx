import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/index";
import Writings from "./pages/Writings/index";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/writings" component={Writings} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
