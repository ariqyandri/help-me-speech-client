//@ts-nocheck
import React from "react";
import { Button } from "react-bootstrap";

export default function UploadImage() {
  const handleOpen = async () => {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: "doai9yryh",
        uploadPreset: "dgfhe4a6",
      },
      (error: any, result: any) => {
        if (result.event === "success") {
          console.log(`success`, result.info.url);
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
