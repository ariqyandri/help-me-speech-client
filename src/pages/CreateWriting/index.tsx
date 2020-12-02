import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateWritingForm from "../../components/CreateWritingForm";
import { selectToken } from "../../store/user/selectors";

export default function CreateWriting() {
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  return (
    <div>
      <h1>Create Writing</h1>
      <CreateWritingForm />
    </div>
  );
}
