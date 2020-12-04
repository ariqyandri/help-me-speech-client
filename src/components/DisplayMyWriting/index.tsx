import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";

export default function DisplayMyWriting(props: Props) {
  return (
    <div>
      <h1>{props.myWriting.title}</h1>
      <h5>{props.myWriting.category.name}</h5>
      <h5>
        By{" "}
        {`${props.myWriting.user.firstName} ${props.myWriting.user.lastName}`},
        Created at {props.myWriting.createdAt}
      </h5>
      {!props.myWriting.images ? null : (
        <DisplayImage images={props.myWriting.images} />
      )}
      <h3>{props.myWriting.content}</h3>
      <Link to={`/mywriting/edit/${props.myWriting.id}`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}
