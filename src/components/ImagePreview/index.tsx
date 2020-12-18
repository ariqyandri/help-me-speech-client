import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteImage } from "../../store/images/action";
import { selectImages } from "../../store/images/selector";
import { ImageType } from "./types";
import "./ImagePreview.css";

export default function ImagePreview() {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  if (images.find((image: ImageType) => image.id === 0)) {
    return <div>{null}</div>;
  }
  return (
    <>
      <div className="imagePreview">
        {images.map((image: ImageType) => {
          return (
            <div key={image.id} className="img-wrap">
              <button
                className="close"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteImage(image.id));
                }}
              >
                <h1>&times;</h1>
              </button>
              <img
                src={image.url}
                alt={image.name}
                className="displayImagePreview"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
