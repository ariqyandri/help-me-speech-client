import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Props } from "./types";

export default function DisplayMyWritings(props: Props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.createdAt}
          </Card.Subtitle>
          <Card.Text>{props.content}</Card.Text>
          <Badge pill variant="primary">
            {props.categoryId}
          </Badge>
        </Card.Body>
      </Card>
    </div>
  );
}
