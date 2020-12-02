import React from "react";
import { Props } from "./types";

export default function DisplayWriting(props: Props) {
  return (
    <div>
      <h1>{props.aWriting.title}</h1>
      <h4>
        By {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`},
        Created at {props.aWriting.createdAt}
      </h4>
      <h3>{props.aWriting.content}</h3>
    </div>
  );
}
