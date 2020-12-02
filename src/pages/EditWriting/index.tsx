import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import EditWritingForm from "../../components/EditWritingForm/index";
import { selectToken } from "../../store/user/selectors";
import { selectWriting } from "../../store/writing/selector";
import { Params } from "./types";

export default function EditWriting() {
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  const writing = useSelector(selectWriting);
  const { title, content, isPrivate, imageUrl, videoUrl, categoryId } = writing;
  const editWriting = {
    title,
    content,
    isPrivate,
    imageUrl,
    videoUrl,
    categoryId,
  };
  return (
    <div>
      <h1>Edit Writing</h1>
      <EditWritingForm />
    </div>
  );
}
