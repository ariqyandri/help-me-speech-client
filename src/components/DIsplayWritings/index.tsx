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
  const date = new Date(props.aWriting.createdAt);
  if (loading === true) {
    return <Loading />;
  }
  return (
    <div>
      <Card border="dark" className="cardWritings hvr-grow">
        <Card.Body className="cardWritingsBody">
          <Link
            to={`/writing/view/${props.aWriting.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title className="hvr-weight-text">
              {props.aWriting.title}
            </Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            By{" "}
            <Link
              to={`/writing/view/${props.aWriting.user.id}`}
              style={{ color: "black" }}
            >
              {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}{" "}
            </Link>
          </Card.Subtitle>
          <Link
            to={`/writing/view/${props.aWriting.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Text className="cardWritingsText">
              {props.aWriting.content}
            </Card.Text>{" "}
          </Link>

          <div>
            <div style={{ color: "black", marginBottom: "10px" }}>
              <Badge variant="dark">{props.aWriting.category.name}</Badge>
              <Badge variant="dark-outline"> | {date.toDateString()}</Badge>
            </div>
            <Link
              to={`/writing/view/${props.aWriting.id}`}
              style={{ color: "black", marginTop: "100px" }}
            >
              <Button variant="outline-dark">Visit</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
