import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import SignUp from "./pages/SignUp/index";
import Login from "./pages/Login/index";
import MyWritings from "./pages/MyWritings/index";
import CreateWriting from "./pages/CreateWriting/index";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mywritings" component={MyWritings} />
        <Route exact path="/writing/create" component={CreateWriting} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
