import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";

export default function DisplayMyWritings(props: Props) {
  const loading = useSelector(selectAppLoading);
  const date = new Date(props.myWriting.createdAt);
  if (loading === true) {
    return <Loading />;
  }
  return (
    <div>
      <Card border="dark" className="cardWritings hvr-grow ">
        <Card.Body className="cardWritingsBody">
          <Link
            to={`/mywriting/view/${props.myWriting.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title className="hvr-weight-text">
              {props.myWriting.title}
            </Card.Title>
            <Card.Text className="cardWritingsText">
              {props.myWriting.content}
            </Card.Text>
          </Link>
          <div>
            <div style={{ color: "black", marginBottom: "10px" }}>
              <Badge variant="dark">{props.myWriting.category.name}</Badge>
              <Badge variant="dark-outline"> | {date.toDateString()}</Badge>
            </div>
            <div></div>
            <div>
              <Link to={`/mywriting/edit/${props.myWriting.id}`}>
                <Button variant="outline-dark">Edit</Button>
              </Link>{" "}
              <Link to={`/mywriting/helpmepractice/${props.myWriting.id}`}>
                <Button variant="warning">Practice!</Button>
              </Link>{" "}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
