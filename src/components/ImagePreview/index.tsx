import React from "react";
import { useSelector } from "react-redux";
import { selectImages } from "../../store/images/selector";
import { ImageType } from "./types";

export default function ImagePreview() {
  const images = useSelector(selectImages);
  console.log(images);
  if (images.find((image: ImageType) => image.id === 0)) {
    return <div>{null}</div>;
  }
  return (
    <div>
      {images.map((image: ImageType) => {
        return <img src={image.url} alt={image.name} />;
      })}
    </div>
  );
}
