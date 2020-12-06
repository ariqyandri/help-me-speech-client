import React from "react";
import { Card } from "react-bootstrap";
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
            className="cardHome hvr-grow"
            onClick={() => {
              history.push(`/writings/${category.name}`);
            }}
            border="dark"
            key={category.id}
          >
            <Card.Body className="cardHomeBody">
              <Card.Title className="cardHomeTitle">
                <h1>{category.name}</h1>
              </Card.Title>
              <Card.Text className="cardHomeText">
                {category.description}
              </Card.Text>
              <Link
                style={{ color: "black", textDecoration: "none" }}
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
