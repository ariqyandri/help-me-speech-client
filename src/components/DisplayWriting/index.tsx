import React from "react";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";

export default function DisplayWriting(props: Props) {
  return (
    <div>
      <h1>{props.aWriting.title}</h1>
      <h5>{props.aWriting.category.name}</h5>
      <h5>
        By {`${props.aWriting.user.firstName} ${props.aWriting.user.lastName}`},
        Created at {props.aWriting.createdAt}
      </h5>
      {!props.aWriting.images ? null : (
        <DisplayImage images={props.aWriting.images} />
      )}
      <p>{props.aWriting.content}</p>
    </div>
  );
}
