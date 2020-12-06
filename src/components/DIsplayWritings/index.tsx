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
            <Card.Subtitle className="mb-2 text-muted">
              By{" "}
              {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}
            </Card.Subtitle>
            <Card.Text className="cardWritingsText">
              {props.aWriting.content}
            </Card.Text>
          </Link>
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
              <Button variant="outline-dark">Visit</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
