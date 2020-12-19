import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";
import { logOut } from "../../store/user/action";
import NavbarItem from "./NavbarItem";
import { Image } from "react-bootstrap";

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
      <Nav.Item>
        <Image
          src={`${user.image}`}
          roundedCircle
          style={{ height: "40px", width: "auto" }}
        />{" "}
      </Nav.Item>
      <Button onClick={handleLogOut} variant="outline-dark">
        Logout
      </Button>
    </>
  );
}
