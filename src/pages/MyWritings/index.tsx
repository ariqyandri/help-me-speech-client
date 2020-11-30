import React from "react";
import { useDispatch } from "react-redux";
import { fetchMyWritings } from "../../store/myWritings/action";

export default function MyWritings() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchMyWritings());
  };

  return (
    <div>
      My Writings
      <div>
        <button onClick={handleClick}>fetch my writings</button>
      </div>
    </div>
  );
}
