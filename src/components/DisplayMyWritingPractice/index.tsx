import React from "react";
import { Badge, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./DisplayMyWritingPractice.css";
import { Link } from "react-router-dom";

export default function DisplayMyWritingPractice(props: Props) {
  const loading = useSelector(selectAppLoading);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div>
      <Card className="practiceCard">
        <Card.Header as="h5">
          <h2>
            <Link
              to={`/mywriting/view/${props.myWriting.id}`}
              style={{ color: "black" }}
            >
              {props.myWriting.title}
            </Link>
          </h2>
          <Badge pill variant="dark">
            {props.myWriting.category.name}
          </Badge>
        </Card.Header>
        <Card.Body className="practiceCardBody">
          <Card.Text>{props.myWriting.content} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
