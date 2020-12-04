import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserId } from "../../store/user/selectors";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";

export default function DisplayWriting(props: Props) {
  const id = useSelector(selectUserId);
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
      <h3>{props.aWriting.content}</h3>
      {id === props.aWriting.userId ? (
        <Link to={`/writing/edit/${props.aWriting.id}`}>
          <Button>Edit</Button>
        </Link>
      ) : null}
    </div>
  );
}
