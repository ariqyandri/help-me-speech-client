import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pencilFill, threeDots } from "../../config/icons";
import DeleteButton from "../DeleteButton";
import { Props } from "./types";

export default function MyWritingButtons({ id, type }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Link to={`/mywriting/helpmepractice/${id}`}>
        <Button variant="warning">Practice!</Button>
      </Link>{" "}
      <ButtonGroup toggle>
        <ToggleButton
          type="checkbox"
          variant="warning"
          checked={checked}
          style={{
            paddingLeft: `0px`,
            paddingRight: `0px`,
            border: "none",
            background: "none",
            boxShadow: "none",
          }}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          {/* {checked === true ? chevronCompLeft() : chevronCompRight()}{" "} */}
          {threeDots()}{" "}
        </ToggleButton>
      </ButtonGroup>{" "}
      {!checked ? null : (
        <>
          <Link to={`/mywriting/edit/${id}`}>
            <Button variant="outline-dark">{pencilFill()}</Button>
          </Link>{" "}
          <DeleteButton id={id} type={type} />
        </>
      )}
    </>
  );
}
