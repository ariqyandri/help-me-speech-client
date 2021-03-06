import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteMyWriting } from "../../store/myWriting/action";
import { deleteMyWritings } from "../../store/myWritings/action";
import { Props } from "./types";

export default function DeleteConfirmation(props: Props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = (e: any) => {
    e.preventDefault();
    if (props.type === "edit") {
      dispatch(deleteMyWriting(props.id));
      history.push("/mywritings");
    }
    if (props.type === "writings") {
      dispatch(deleteMyWritings(props.id));
    }
  };
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
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}
