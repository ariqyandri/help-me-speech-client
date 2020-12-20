import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import UploadProfileImage from "../UploadProfileImage";
import { Col, Spinner } from "react-bootstrap";
import {
  selectAppLoading,
  selectLoginCorrect,
} from "../../store/appState/selectors";
import { Props } from "./types";
import { updateProfile } from "../../store/user/action";

export default function ProfileForm({ user, setEdit }: Props) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(user.image);
  const [update, setUpdate] = useState({});
  const [validated, setValidated] = useState(false);
  const correct = useSelector(selectLoginCorrect);
  const loading = useSelector(selectAppLoading);
  const dispatch = useDispatch();

  function submitForm(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (image !== user.image) {
      dispatch(updateProfile({ ...update, image: image }));
    } else {
      dispatch(updateProfile({ ...update }));
    }
    setValidated(true);
    setEdit(false);
  }

  function handleUpdate(e: any) {
    console.log({ ...update, [e.target.name]: e.target.value });
    setUpdate({ ...update, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (correct === false) {
      setValidated(false);
    }
  }, [correct]);

  return (
    <>
      <UploadProfileImage image={image} setImage={setImage} />
      <Form validated={validated} className="formSignup" onSubmit={submitForm}>
        <Form.Row>
          <Col>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                  handleUpdate(event);
                }}
                name="firstName"
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
                onChange={(event) => {
                  setLastName(event.target.value);
                  handleUpdate(event);
                }}
                name="lastName"
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
            onChange={(event) => {
              setEmail(event.target.value);
              handleUpdate(event);
            }}
            name="email"
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
          <Button variant="success" type="submit">
            {loading ? <Spinner animation="border" size="sm" /> : "Save"}
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
