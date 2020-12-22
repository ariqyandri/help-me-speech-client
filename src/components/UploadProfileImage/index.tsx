//@ts-nocheck
import React from "react";
import { Button, Image } from "react-bootstrap";
import { pencilFill, trashFill } from "../../config/icons";
import { Props } from "./types";

export default function UploadProfileImage({ setImage, image,setUpdate }: Props) {
  const handleOpen = async () => {
    const widget = cloudinary.createUploadWidget(
      {
        cloudName: "doai9yryh",
        uploadPreset: "profile_crop",
        cropping: true,
        cropping_aspect_ratio: 1,
        showSkipCropButton: false,
      },
      (error: any, result: any) => {
        if (result.event === "success") {
          setImage(result.info.url);
          if(setUpdate){
            setUpdate()
          }
        }
      }
    );
    widget.open();
  };
  return (
    <>
      <Image
        src={`${image}`}
        roundedCircle
        style={{ height: "200px", width: "auto" }}
      />
      <div style={{ margin: "5px" }}>
        <Button
          onClick={handleOpen}
          variant="outline-dark"
          className="uploadButton"
        >
          {image ===
          "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
            ? "Upload Profile Image"
            : pencilFill()}
        </Button>{" "}
        {image !==
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" ? (
          <Button
            variant="danger"
            onClick={() => {
              setImage(
                "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg"
              );
            }}
            className="uploadButton"
          >
            {trashFill()}
          </Button>
        ) : null}
      </div>
    </>
  );
}
