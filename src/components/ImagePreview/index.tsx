import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage } from "../../store/images/action";
import { selectImages } from "../../store/images/selector";
import { ImageType } from "./types";

export default function ImagePreview() {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  if (images.find((image: ImageType) => image.id === 0)) {
    return <div>{null}</div>;
  }
  const handleRemove = (event: any) => {
    event.preventDefault();
    dispatch(deleteImage(event.target.value));
  };
  return (
    <div>
      {images.map((image: ImageType) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt={image.name} />
            <button onClick={handleRemove} value={image.id}>
              Remove Image
            </button>
          </div>
        );
      })}
    </div>
  );
}
