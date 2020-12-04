import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayMyWritings from "../../components/DisplayMyWritings";
import FilterByCategories from "../../components/FilterByCategories";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import { fetchMyWritings } from "../../store/myWritings/action";
import { selectWritings } from "../../store/writings/selector";
import { Writing } from "./types";

export default function MyWritings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectAppLoading);
  const writings = useSelector(selectWritings);
  const [categoryId, setCategoryId] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchMyWritings(categoryId));
  }, [dispatch, categoryId]);
  return (
    <div>
      <h1>Writings</h1>
      <FilterByCategories id={categoryId} setId={setCategoryId} />
      {loading ? (
        <Loading />
      ) : (
        writings.map((writing: Writing) => {
          return <DisplayMyWritings key={writing.id} myWriting={writing} />;
        })
      )}
    </div>
  );
}
