import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMyWritings } from "../../store/myWritings/action";

export default function MyWritings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyWritings());
  }, [dispatch]);

  return <div>My Writings</div>;
}
