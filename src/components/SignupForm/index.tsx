import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../store/user/action";
import UploadProfileImage from "../UploadProfileImage";
import { Col, Spinner } from "react-bootstrap";
import { selectToken } from "../../store/user/selectors";
import {
  selectAppLoading,
  selectLoginCorrect,
} from "../../store/appState/selectors";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
  );
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const correct = useSelector(selectLoginCorrect);
  const token = useSelector(selectToken);
  const loading = useSelector(selectAppLoading);
  const history = useHistory();

  function submitForm(event: any) {
    event.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== ""
    ) {
      setValidated(true);
      dispatch(signUp(firstName, lastName, email, image, password));
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  useEffect(() => {
    if (token !== null) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      history.push("/");
    }
    if (correct === false) {
      setValidated(false);
    }
  }, [token, history, correct]);

  return (
    <>
      <UploadProfileImage image={image} setImage={setImage} />{" "}
      <Form validated={validated} className="formSignup">
        <Form.Row>
          <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                placeholder="Enter first name"
                required
              />{" "}
              <Form.Control.Feedback type="invalid">
                Please provide your first name{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                placeholder="Enter last name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide your last name{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            isInvalid={correct ? false : true}
            formNoValidate={true}
            required
          />
          <Form.Control.Feedback type="invalid">
            {correct ? "Please provide an email" : "User with email exists"}
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            Please provide a password{" "}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{ margin: "20px" }}>
          <Button variant="success" type="submit" onClick={submitForm}>
            {loading ? <Spinner animation="border" size="sm" /> : "Log in"}
          </Button>
        </Form.Group>
        <Link to="/login" style={{ color: "black" }}>
          Click here to log in
        </Link>
      </Form>
    </>
  );
}
