import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "../../store/user/action";
import UploadProfileImage from "../UploadProfileImage";
import { Col } from "react-bootstrap";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
  );
  const dispatch = useDispatch();

  function submitForm(event: any) {
    event.preventDefault();

    dispatch(signUp(firstName, lastName, email, image, password));

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <UploadProfileImage image={image} setImage={setImage} />{" "}
      <Form className="formSignup">
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
              />
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
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">
          <Button variant="outline-dark">Click here to log in</Button>
        </Link>
      </Form>
    </>
  );
}
