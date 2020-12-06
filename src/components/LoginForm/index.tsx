import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../store/user/action";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitForm = (event: any) => {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Form className="formLogin">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group style={{ margin: "20px" }}>
          <Button variant="success" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
        <Link to="/signup">
          <Button variant="outline-dark">Click here to sign up</Button>
        </Link>
      </Form>
    </>
  );
}
