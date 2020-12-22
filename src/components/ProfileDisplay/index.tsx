import React from "react";
import { Image } from "react-bootstrap";
import { Props } from "./types";

export default function ProfileDisplay({ user }: Props) {
  const { firstName, lastName, email, image } = user;

  return (
    <>
      <Image
        src={`${image}`}
        roundedCircle
        style={{ height: "200px", width: "auto" }}
      />
      <h1>{`${firstName} ${lastName}`}</h1>
      <h2>{email}</h2>
    </>
  );
}
