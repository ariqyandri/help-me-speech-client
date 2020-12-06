import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectAppLoading } from "../../store/appState/selectors";
import Loading from "../Loading";
import { Props } from "./types";
import "./DisplayImage.css";

export default function DisplayImage(props: Props) {
  const loading = useSelector(selectAppLoading);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Carousel className="displayImageCarousel">
        {props.images.map((i) => {
          return (
            <Carousel.Item key={i.id} interval={10000}>
              <div className="displayImageBoxOver">
                <div className="displayImageBox">
                  <img
                    className="d-block displayImage"
                    src={i.url}
                    alt={i.name}
                  />
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
