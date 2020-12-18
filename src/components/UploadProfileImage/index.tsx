//@ts-nocheck
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Props } from "./types";

export default function UploadProfileImage({ setImage }: Props) {
  const handleOpen = async () => {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: "doai9yryh",
        uploadPreset: "dgfhe4a6",
      },
      (error: any, result: any) => {
        if (result.event === "success") {
          setImage(result.info.url);
        }
      }
    );
    widget.open();
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outline-dark"
        className="uploadButton"
      >
        Upload Profile Image
      </Button>
    </div>
  );
}
