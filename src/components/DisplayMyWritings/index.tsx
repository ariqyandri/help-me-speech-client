import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Props } from "./types";

export default function DisplayMyWritings(props: Props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.myWriting.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.myWriting.createdAt}
          </Card.Subtitle>
          <Card.Text>{props.myWriting.content}</Card.Text>
          <Badge pill variant="primary">
            {props.myWriting.categoryId}
          </Badge>
        </Card.Body>
      </Card>
    </div>
  );
}
