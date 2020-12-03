//@ts-nocheck
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postImage } from "../../store/images/action";

export default function UploadImage() {
  const dispatch = useDispatch();
  const handleOpen = async () => {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: "doai9yryh",
        uploadPreset: "dgfhe4a6",
      },
      (error: any, result: any) => {
        if (result.event === "success") {
          console.log(
            `success`,
            result.info.url,
            result.info.original_filename
          );
          dispatch(
            postImage({
              url: result.info.url,
              name: result.info.original_filename,
            })
          );
        }
      }
    );
    widget.open();
  };
  return (
    <div>
      <Button onClick={handleOpen}>Upload Image</Button>
    </div>
  );
}
