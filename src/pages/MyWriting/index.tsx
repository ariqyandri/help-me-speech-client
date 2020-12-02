import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
      <h1>My Writing</h1>
    </div>
  );
}
