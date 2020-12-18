import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DeleteConfirmation from "../DeleteConfirmation";

export default function DeleteButton() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        Delete{" "}
      </Button>

      <DeleteConfirmation show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
