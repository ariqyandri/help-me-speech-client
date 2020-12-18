import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMyWriting } from "../../store/myWriting/action";
import { Props } from "./types";

export default function DeleteConfirmation(props: Props) {
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        {...props}
        // size="sm"
        dialogClassName="modal-40w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Warning!{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this file?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">
            Return
          </Button>{" "}
          <Button
            onClick={() => {
              dispatch(deleteMyWriting(props.id));
            }}
            variant="danger"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}
