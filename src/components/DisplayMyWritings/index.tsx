import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";

export default function DisplayMyWritings(props: Props) {
  const loading = useSelector(selectAppLoading);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.myWriting.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.myWriting.createdAt}
          </Card.Subtitle>
          <Card.Text>{props.myWriting.description}</Card.Text>
          <Badge pill variant="primary">
            {props.myWriting.category.name}
          </Badge>
          <Link to={`/writing/${props.myWriting.id}`}>
            <Button variant="primary">Visit writing</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
