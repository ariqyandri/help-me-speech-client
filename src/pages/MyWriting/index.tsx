import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWriting } from "../../store/writing/action";
import { Params } from "./types";

export default function MyWriting() {
  const dispatch = useDispatch();
  const params: Params = useParams();
  const id: number = parseInt(params.id);
  useEffect(() => {
    dispatch(fetchWriting(id));
  }, [dispatch]);
  return <div>My Writing</div>;
}
