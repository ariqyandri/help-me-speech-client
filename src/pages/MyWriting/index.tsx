import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayWriting from "../../components/DisplayWriting";
import Loading from "../../components/Loading";
import { resetRequest } from "../../store/appState/action";
import { fetchMyWriting } from "../../store/myWriting/action";
import { selectMyWriting } from "../../store/myWriting/selector";
import { Params } from "./types";

export default function MyWriting() {
  const dispatch = useDispatch();
  dispatch(resetRequest());
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  const writing = useSelector(selectMyWriting);
  useEffect(() => {
    dispatch(fetchMyWriting(id));
  }, [dispatch, id]);
  return (
    <div>{!writing ? <Loading /> : <DisplayWriting aWriting={writing} />}</div>
  );
}
