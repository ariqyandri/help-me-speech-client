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
            <Carousel.Item key={i.id} interval={10000}>
              <div style={{ maxWidth: "1000px", maxHeight: "600px" }}>
                <img
                  className="d-block "
                  style={{ width: "100%", height: "100%" }}
                  src={i.url}
                  alt={i.name}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
