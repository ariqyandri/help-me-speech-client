import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import UploadProfileImage from "../UploadProfileImage";
import { Col, Image, Spinner } from "react-bootstrap";
import {
  selectAppLoading,
  selectLoginCorrect,
} from "../../store/appState/selectors";
import { Props } from "./types";
import { pencilFill } from "../../config/icons";

export default function ProfileForm(props: Props) {
  const [firstName, setFirstName] = useState(props.user.firstName);
  const [lastName, setLastName] = useState(props.user.lastName);
  const [email, setEmail] = useState(props.user.email);
  const [image, setImage] = useState(props.user.image);
  const [validated, setValidated] = useState(false);
  const [edit, setEdit] = useState(false);
  const correct = useSelector(selectLoginCorrect);
  const loading = useSelector(selectAppLoading);
  console.log(props.user);
  function submitForm(event: any) {
    if (edit === false) {
      event.preventDefault();
      setEdit(true);
    }
    if (edit === true) {
      event.preventDefault();
      if (firstName !== "" && lastName !== "" && email !== "") {
        setValidated(true);
      }
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    }
  }

  useEffect(() => {
    if (correct === false) {
      setValidated(false);
    }
  }, [correct]);

  return (
    <>
      {edit === false ? (
        <Image
          src={`${image}`}
          roundedCircle
          style={{ height: "200px", width: "auto" }}
        />
      ) : (
        <UploadProfileImage image={image} setImage={setImage} />
      )}{" "}
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

        <Form.Group style={{ margin: "20px" }}>
          <Button variant="success" onClick={submitForm}>
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : edit === true ? (
              "Save"
            ) : (
              pencilFill()
            )}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
