import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayMyWritings from "../../components/DisplayMyWritings";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import { fetchMyWritings } from "../../store/myWritings/action";
import { selectMyWritings } from "../../store/myWritings/selector";
import { Writing } from "./types";

export default function MyWritings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectAppLoading);
  const myWritings = useSelector(selectMyWritings);
  useEffect(() => {
    dispatch(fetchMyWritings());
  }, [dispatch]);

  return (
    <div>
      <h1>My Writings</h1>
      {loading ? (
        <Loading />
      ) : (
        myWritings.map((writing: Writing) => {
          return <DisplayMyWritings key={writing.id} myWriting={writing} />;
        })
      )}
    </div>
  );
}
