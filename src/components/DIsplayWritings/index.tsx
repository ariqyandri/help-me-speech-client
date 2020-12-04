import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./DisplayWritings.css";

export default function DisplayWritings(props: Props) {
  const loading = useSelector(selectAppLoading);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="cardWritings">
      <Card>
        <Card.Body>
          <Card.Title>{props.aWriting.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By{" "}
            {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}
          </Card.Subtitle>{" "}
          <Card.Subtitle className="mb-2 text-muted">
            {props.aWriting.createdAt}
          </Card.Subtitle>
          <Card.Text>{props.aWriting.description}</Card.Text>
          <Badge pill variant="primary">
            {props.aWriting.category.name}
          </Badge>
        </Card.Body>
        <Card.Body>
          <Link to={`/writing/view/${props.aWriting.id}`}>
            <Button variant="primary">Visit writing</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
