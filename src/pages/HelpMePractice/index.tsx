import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DisplayMyWritingPractice from "../../components/DisplayWritingPractice/index";
import Loading from "../../components/Loading";
import { selectToken } from "../../store/user/selectors";
import { fetchWriting } from "../../store/writing/action";
import { selectWriting } from "../../store/writing/selector";
import { Params } from "./types";

export default function HelpMePractice() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  if (!token) {
    history.push("/");
  }
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  const writing = useSelector(selectWriting);
  useEffect(() => {
    dispatch(fetchWriting(id));
  }, [dispatch, id]);
  return (
    <div>
      <h1>Help Me Practice!</h1>
      {!writing ? (
        <Loading />
      ) : (
        <DisplayMyWritingPractice myWriting={writing} />
      )}{" "}
    </div>
  );
}
