import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayWriting from "../../components/DisplayWriting/index";
import Loading from "../../components/Loading";
import { fetchWriting } from "../../store/writing/action";
import { selectWriting } from "../../store/writing/selector";
import { Params } from "./types";
import "./Writing.css";

export default function Writing() {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  const writing = useSelector(selectWriting);
  useEffect(() => {
    dispatch(fetchWriting(id));
  }, [dispatch, id]);
  return (
    <div className="justifyWriting">
      {!writing ? <Loading /> : <DisplayWriting aWriting={writing} />}
    </div>
  );
}
