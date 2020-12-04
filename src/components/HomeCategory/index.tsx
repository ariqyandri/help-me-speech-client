import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./HomeCategory.css";

export default function HomeCategory(props: Props) {
  const loading = useSelector(selectAppLoading);
  const history = useHistory();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {props.categories.map((category) => {
        return (
          <Card
            className="cardHome hvr-box-shadow-outset"
            onClick={() => {
              history.push(`/writings/${category.name}`);
            }}
            border="dark"
          >
            <Card.Body className="cardHomeBody">
              <div>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </div>
              <Link
                style={{ color: "black" }}
                to={`/writings/${category.name}`}
              >
                {`View ${category.name}s`}
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
