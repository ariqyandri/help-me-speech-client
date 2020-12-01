import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import MyWritings from "./pages/MyWritings/index";
import CreateWriting from "./pages/CreateWriting/index";
import Navbar from "./components/Navbar/index";
import Message from "./components/Message";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Message />
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
