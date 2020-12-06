import React from "react";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";
import "./DisplayWriting.css";
import { Badge } from "react-bootstrap";

export default function DisplayWriting(props: Props) {
  const date = new Date(props.aWriting.createdAt);
  return (
    <div className="displayWriting">
      <div className="displayWritingHeader">
        <Badge variant="dark">{props.aWriting.category.name}</Badge>
        <Badge variant="dark-outline">| {date.toDateString()}</Badge>
        <h1 className="displayWritingTitle">{props.aWriting.title}</h1>
        <h6>
          By{" "}
          {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}
        </h6>
      </div>
      <div className="displayWritingBody">
        {!props.aWriting.images ? null : (
          <DisplayImage images={props.aWriting.images} />
        )}
        <div className="displayWritingBodyContent">
          <p>{props.aWriting.content}</p>
        </div>
      </div>
    </div>
  );
}
