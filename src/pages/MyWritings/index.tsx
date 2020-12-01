import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyWritings } from "../../store/myWritings/action";
import { selectMyWritings } from "../../store/myWritings/selector";

export default function MyWritings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMyWritings());
  }, [dispatch]);
  const myWritings = useSelector(selectMyWritings);

  return (
    <div>
      <h1>My Writings</h1>
    </div>
  );
}
