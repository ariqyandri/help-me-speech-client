import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pencilFill, threeDots } from "../../config/icons";
import DeleteButton from "../DeleteButton";
import { Props } from "./types";
import "./MyWritingButtons.css";

export default function MyWritingButtons({ id, type }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <article
      className={type !== "edit" ? "myWritingButtons" : "writingPageButtons"}
    >
      <div className="mwbLeft">{null}</div>
      <div className="mwbMiddle">
        <Link to={`/mywriting/helpmepractice/${id}`}>
          <Button variant="warning">Practice!</Button>
        </Link>
      </div>
      <div className="mwbRight">
        <ButtonGroup toggle>
          <ToggleButton
            type="checkbox"
            variant="warning"
            checked={checked}
            className="moreButtonParent"
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              border: "none",
              background: "none",
              boxShadow: "none",
            }}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            <span className="moreButton">{threeDots()}</span>
          </ToggleButton>
        </ButtonGroup>{" "}
        {!checked ? null : (
          <>
            <Link to={`/mywriting/edit/${id}`}>
              <Button
                className="hvr-bob"
                style={{
                  border: "none",
                  background: "none",
                  boxShadow: "none",
                  color: "black",
                }}
              >
                {pencilFill()}
              </Button>
            </Link>
            <DeleteButton
              id={id}
              type={type}
              style={{
                paddingRight: "0px",
                border: "none",
                background: "none",
                boxShadow: "none",
                color: "red",
              }}
              className="hvr-bob"
            />
          </>
        )}
      </div>
    </article>
  );
}
