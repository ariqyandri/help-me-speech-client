import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
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
      <Card>
        <Card.Header as="h5">{props.myWriting.title}</Card.Header>
        <Badge pill variant="primary">
          {props.myWriting.category.name}
        </Badge>
        <Card.Body>
          <Card.Text>{props.myWriting.content} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
