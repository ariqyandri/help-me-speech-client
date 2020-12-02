import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateWritingForm from "../../components/CreateWritingForm";
import Loading from "../../components/Loading";
import { selectAppLoading, selectFullfilledRequest } from "../../store/appState/selectors";
import { selectToken } from "../../store/user/selectors";
import { selectWriting } from "../../store/writing/selector";

export default function CreateWriting() {
  const token = useSelector(selectToken);
  const requestId = useSelector(selectFullfilledRequest);
  const writing = useSelector(selectWriting);
  const loading = useSelector(selectAppLoading);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  if (writing) {
    if (requestId === writing.id) {
      history.push(`/writing/${writing.id}`);
    }
  }
  return (
    <div>
      <h1>Create Writing</h1>
      {loading ? <Loading /> : <CreateWritingForm />}
    </div>
  );
}
