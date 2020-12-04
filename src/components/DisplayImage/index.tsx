import React from "react";
import { Carousel } from "react-bootstrap";
import { Props } from "./types";

export default function DisplayImage(props: Props) {
  return (
    <div>
      <Carousel>
        {props.images.map((i) => {
          return (
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={i.url} alt={i.name} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
