import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";

export default function DisplayImage(props: Props) {
  const loading = useSelector(selectAppLoading);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Carousel>
        {props.images.map((i) => {
          return (
            <Carousel.Item key={i.id} interval={1000}>
              <img className="d-block w-100" src={i.url} alt={i.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
