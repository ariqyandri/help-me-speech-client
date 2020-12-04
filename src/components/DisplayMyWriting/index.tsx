import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserId } from "../../store/user/selectors";
import DisplayImage from "../DisplayImage/index";
import { Props } from "./types";

export default function DisplayMyWriting(props: Props) {
  const id = useSelector(selectUserId);
  return (
    <div>
      <h1>{props.myWriting.title}</h1>
      <h5>{props.myWriting.category.name}</h5>
      <h5>
        By{" "}
        {`${props.myWriting.user.firstName} ${props.myWriting.user.lastName}`},
        Created at {props.myWriting.createdAt}
      </h5>
      {!props.myWriting.images ? null : (
        <DisplayImage images={props.myWriting.images} />
      )}
      <h3>{props.myWriting.content}</h3>
      {id === props.myWriting.userId ? (
        <Link to={`/mywriting/edit/${props.myWriting.id}`}>
          <Button>Edit</Button>
        </Link>
      ) : null}
    </div>
  );
}
