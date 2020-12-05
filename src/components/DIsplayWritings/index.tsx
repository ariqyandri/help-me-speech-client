import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./DisplayWritings.css";

export default function DisplayWritings(props: Props) {
  const loading = useSelector(selectAppLoading);
  const history = useHistory();
  const date = new Date(props.aWriting.createdAt);
  if (loading === true) {
    return <Loading />;
  }
  return (
    <div>
      <Card
        border="dark"
        className="cardWritings hvr-box-shadow-outset"
        onClick={() => {
          history.push(`/writing/view/${props.aWriting.id}`);
        }}
      >
        <Card.Body className="cardWritingsBody">
          <div>
            <Card.Title>{props.aWriting.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              By{" "}
              {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}
            </Card.Subtitle>{" "}
            <Card.Text>{props.aWriting.description}</Card.Text>
          </div>
          <div>
            <div style={{ color: "black", marginBottom: "10px" }}>
              <Badge variant="dark">{props.aWriting.category.name}</Badge>
              <Badge variant="dark-outline">
                created at {date.toDateString()}
              </Badge>
            </div>
            <Link
              to={`/writing/view/${props.aWriting.id}`}
              style={{ color: "black", marginTop: "100px" }}
            >
              Visit {props.aWriting.category.name}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
