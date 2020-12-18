import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { trashFill } from "../../config/icons";
import DeleteConfirmation from "../DeleteConfirmation";
import { Props } from "./types";

export default function DeleteButton(props: Props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setModalShow(true)}>
        {trashFill()}
      </Button>

      <DeleteConfirmation
        id={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={props.type}
      />
    </>
  );
}
