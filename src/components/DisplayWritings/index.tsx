import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./DisplayWritings.css";
import { selectUser } from "../../store/user/selectors";
import MyWritingButtons from "../MyWritingButtons";

export default function DisplayWritings(props: Props) {
  const loading = useSelector(selectAppLoading);
  const user = useSelector(selectUser);
  const date = new Date(props.aWriting.createdAt);
  if (loading === true) {
    return <Loading />;
  }
  const link =
    user?.id === props.aWriting.userId
      ? `/mywriting/view/${props.aWriting.id}`
      : `/writing/view/${props.aWriting.id}`;
  return (
    <article>
      <Card border="dark" className="cardWritings hvr-grow">
        <Card.Body className="cardWritingsBody">
          <main>
            <Link to={link} style={{ textDecoration: "none", color: "black" }}>
              <Card.Title className="hvr-weight-text">
                {props.aWriting.title}
              </Card.Title>
            </Link>
            <Card.Subtitle className="mb-2 text-muted">
              By{" "}
              <Link
                to={`/profile/${props.aWriting.userId}`}
                style={{ color: "inherit" }}
              >
                {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`}{" "}
              </Link>
            </Card.Subtitle>
            <Link to={link} style={{ textDecoration: "none", color: "black" }}>
              <Card.Text className="cardWritingsText">
                {props.aWriting.content}
              </Card.Text>{" "}
            </Link>
          </main>
          <footer>
            <div style={{ color: "black", marginBottom: "10px" }}>
              <Badge variant="dark">{props.aWriting.category.name}</Badge>
              <Badge variant="dark-outline"> | {date.toDateString()}</Badge>
            </div>
            <div>
              {user?.id === props.aWriting.userId ? (
                <MyWritingButtons id={props.aWriting.id} type="writings" />
              ) : (
                <Link to={link} style={{ color: "black", marginTop: "100px" }}>
                  <Button variant="outline-dark">Visit</Button>
                </Link>
              )}
            </div>
          </footer>
        </Card.Body>
      </Card>
    </article>
  );
}
