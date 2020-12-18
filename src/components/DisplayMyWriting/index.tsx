import React from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { pencilFill } from "../../config/icons";
import DeleteButton from "../DeleteButton";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";

export default function DisplayMyWriting(props: Props) {
  const date = new Date(props.myWriting.createdAt);
  return (
    <div className="displayWriting">
      <div className="displayWritingHeader">
        <Badge variant="dark">{props.myWriting.category.name}</Badge>
        <Badge variant="dark-outline">| {date.toDateString()}</Badge>
        <h1 className="displayWritingTitle">{props.myWriting.title}</h1>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Link to={`/mywriting/helpmepractice/${props.myWriting.id}`}>
            <Button variant="warning">Practice!</Button>
          </Link>{" "}
          <Link to={`/mywriting/edit/${props.myWriting.id}`}>
            <Button variant="outline-dark">{pencilFill()}</Button>
          </Link>{" "}
          <DeleteButton id={props.myWriting.id} type="edit" />
        </div>
        <h6>
          By{" "}
          {`${props.myWriting.user.firstName} ${props.myWriting.user.lastName}`}
        </h6>
      </div>
      <div className="displayWritingBody">
        {!props.myWriting.images ||
        props.myWriting.images?.length === 0 ? null : (
          <DisplayImage images={props.myWriting.images} />
        )}
        <div className="displayWritingBodyContent">
          <p>{props.myWriting.content}</p>
        </div>
      </div>
    </div>
  );
}
