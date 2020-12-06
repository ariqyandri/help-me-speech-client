import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "hover.css";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import SignUp from "./pages/SignUp/index";
import MyWritings from "./pages/MyWritings/index";
import CreateWriting from "./pages/CreateWriting/index";
import Navbar from "./components/Navbar/index";
import Message from "./components/Message";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken, logOut } from "./store/user/action";
import { fetchCategories } from "./store/categories/action";
import { selectToken } from "./store/user/selectors";
import MyWriting from "./pages/MyWriting/index";
import EditWriting from "./pages/EditWriting/index";
import HelpMePractice from "./pages/HelpMePractice/index";
import Writings from "./pages/Writings/index";
import Writing from "./pages/Writing/index";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  if (!token) {
    dispatch(logOut());
  }
  useEffect(() => {
    dispatch(getUserWithStoredToken());
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Message />
      <div className="marginApp">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/writings/:category?" component={Writings} />
          <Route exact path="/writing/view/:id" component={Writing} />
          <Route exact path="/mywritings/:category?" component={MyWritings} />
          <Route exact path="/mywriting/create" component={CreateWriting} />
          <Route exact path="/mywriting/edit/:id" component={EditWriting} />
          <Route exact path="/mywriting/view/:id" component={MyWriting} />
          <Route
            exact
            path="/mywriting/helpmepractice/:id"
            component={HelpMePractice}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
