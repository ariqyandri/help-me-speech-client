import React from "react";
import { Button, Nav } from "react-bootstrap";
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
      <Button onClick={handleLogIn} variant="outline-dark">
        Login
      </Button>
    </>
  );
}
