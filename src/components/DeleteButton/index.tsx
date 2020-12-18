import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DeleteConfirmation from "../DeleteConfirmation";
import { Props } from "./types";

export default function DeleteButton(props: Props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        Delete{" "}
      </Button>

      <DeleteConfirmation
        id={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
