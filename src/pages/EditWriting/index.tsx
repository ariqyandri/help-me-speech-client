import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import EditWritingForm from "../../components/EditWritingForm/index";
import Loading from "../../components/Loading";
import { selectToken } from "../../store/user/selectors";
import { fetchWriting } from "../../store/writing/action";
import { selectWriting } from "../../store/writing/selector";
import { Writing, Params } from "./types";

export default function EditWriting() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  useEffect(() => {
    dispatch(fetchWriting(id));
  }, [dispatch, id]);
  const writing = useSelector(selectWriting);
  if (!writing) {
    return <Loading />;
  }
  const { title, content, isPrivate, imageUrl, videoUrl, categoryId } = writing;
  const editWriting: Writing = {
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
      <EditWritingForm editWriting={editWriting} id={id} />
    </div>
  );
}
