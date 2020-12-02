import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayWriting from "../../components/DisplayWriting";
import { fetchWriting } from "../../store/writing/action";
import { selectWriting } from "../../store/writing/selector";
import { Params } from "./types";

export default function MyWriting() {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  const writing = useSelector(selectWriting);
  useEffect(() => {
    dispatch(fetchWriting(id));
  }, [dispatch, id]);
  return (
    <div>
      <DisplayWriting aWriting={writing} />
    </div>
  );
}
