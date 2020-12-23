import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function LoggedOut() {
  const history = useHistory();
  const handleLogIn = (e: any) => {
    e.preventDefault();
    history.push("/login");
  };
  return (
    <>
      <Nav.Link href="/mywriting/create">
        <Button variant="success">Create Writing</Button>
      </Nav.Link>
      <Button onClick={handleLogIn} variant="outline-dark">
        Login
      </Button>
    </>
  );
}
