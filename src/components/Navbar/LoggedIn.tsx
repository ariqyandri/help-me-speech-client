import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import { logOut } from "../../store/user/action";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = (e: any) => {
    e.preventDefault();
    dispatch(logOut());
    return history.push("/");
  };

  return (
    <>
      <NavbarItem path="/mywritings" linkText="My Writings" />
      <NavbarItem path="/mywriting/create" linkText="Create Writing" />
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button onClick={handleLogOut} variant="outline-dark">
        Logout
      </Button>
    </>
  );
}
