import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogIn = (e: any) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <>
      <NavbarItem path="/login" linkText="Create Writing" />
      <Button onClick={handleLogIn}>Login</Button>
    </>
  );
}
