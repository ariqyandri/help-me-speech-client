import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDummy } from "../../store/dummy/selectors";
import { logOut } from "../../store/user/action";

export default function Home() {
  const dummy = useSelector(selectDummy);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {dummy.attr1}
      <div>
        <button onClick={handleLogout}>log out</button>
      </div>
    </div>
  );
}
