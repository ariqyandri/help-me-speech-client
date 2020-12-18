import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Props } from "./types";

export default function DeleteConfirmation(props: Props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Delete Warning!</h4>
          <p>Are you sure you want to delete this file?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Return</Button>{" "}
          <Button onClick={props.onHide} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}
