import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import EditWritingForm from "../../components/EditWritingForm/index";
import { selectToken } from "../../store/user/selectors";

export default function EditWriting() {
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  return (
    <div>
      <h1>Edit Writing</h1>
      <EditWritingForm />
    </div>
  );
}
