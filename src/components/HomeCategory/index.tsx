import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./HomeCategory.css";

export default function HomeCategory(props: Props) {
  const loading = useSelector(selectAppLoading);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {props.categories.map((category) => {
        return (
          <Card className="cardHome">
            <Card.Body className="cardHomeBody">
              <div>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
              </div>
              <Link to={`/writings/${category.name}`}>
                <Button variant="primary">{`View ${category.name}s`}</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
