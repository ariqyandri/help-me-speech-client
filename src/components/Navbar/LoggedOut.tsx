import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  const history = useHistory();
  const handleLogIn = (e: any) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <>
      <NavbarItem path="/login" linkText="Create Writing" />
      <Button onClick={handleLogIn} variant="dark">
        Login
      </Button>
    </>
  );
}
