import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import EditWritingForm from "../../components/EditWritingForm/index";
import Loading from "../../components/Loading";
import {
  selectAppLoading,
  selectFullfilledRequest,
} from "../../store/appState/selectors";
import { selectToken } from "../../store/user/selectors";
import { fetchMyWriting } from "../../store/myWriting/action";
import { selectMyWriting } from "../../store/myWriting/selector";
import { Writing, Params } from "./types";

export default function EditWriting() {
  const dispatch = useDispatch();
  const requestId = useSelector(selectFullfilledRequest);
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  const loading = useSelector(selectAppLoading);
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  useEffect(() => {
    dispatch(fetchMyWriting(id));
  }, [dispatch, id]);
  if (loading === false && requestId === id) {
    history.push(`/mywriting/view/${id}`);
  }
  const writing = useSelector(selectMyWriting);
  if (!writing) {
    return <Loading />;
  }
  const { title, content, isPrivate, categoryId } = writing;
  const editWriting: Writing = {
    id,
    title,
    content,
    isPrivate,
    categoryId,
  };
  return (
    <div style={{ width: "1000px" }}>
      <h1>Edit Writing</h1>
      {loading ? (
        <Loading />
      ) : (
        <EditWritingForm editWriting={editWriting} id={id} />
      )}
    </div>
  );
}
