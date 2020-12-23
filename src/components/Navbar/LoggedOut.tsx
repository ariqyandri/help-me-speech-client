import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
