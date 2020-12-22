import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../store/user/action";
import "./LoginForm.css";
import { selectToken } from "../../store/user/selectors";
import {
  selectAppLoading,
  selectLoginCorrect,
} from "../../store/appState/selectors";
import { loginCorrect } from "../../store/appState/action";
import { Spinner } from "react-bootstrap";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const correct = useSelector(selectLoginCorrect);
  const token = useSelector(selectToken);
  const loading = useSelector(selectAppLoading);
  const history = useHistory();
  const dispatch = useDispatch();

  const submitForm = (event: any) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      return dispatch(login(email, password));
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    if (token) {
      setEmail("");
      setPassword("");
      history.push("/");
    }
  }, [token, history]);

  return (
    <>
      <Form
        validated={validated}
        className="formLogin"
        onChange={() => {
          dispatch(loginCorrect());
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            isInvalid={correct ? false : true}
            required
          />{" "}
          <Form.Control.Feedback type="invalid">
            {correct
              ? "Please provide an email"
              : "User with email not found or password is incorrect"}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            isInvalid={correct ? false : true}
            required
          />{" "}
          <Form.Control.Feedback type="invalid">
            {correct
              ? "Please provide a password"
              : "User with email not found or password is incorrect"}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{ margin: "20px" }}>
          <Button variant="success" type="submit" onClick={submitForm}>
            {loading ? <Spinner animation="border" size="sm" /> : "Log in"}
          </Button>
        </Form.Group>
        <Link to="/signup" style={{ color: "black" }}>
          Click here to sign up
        </Link>
      </Form>
    </>
  );
}
