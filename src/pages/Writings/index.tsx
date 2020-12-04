import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayWritings from "../../components/DIsplayWritings";
import FilterByCategories from "../../components/FilterByCategories";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import { fetchWritings } from "../../store/writings/action";
import { selectWritings } from "../../store/writings/selector";
import { Writing } from "./types";

export default function Writings() {
  const dispatch = useDispatch();
  const loading = useSelector(selectAppLoading);
  const writings = useSelector(selectWritings);
  const [categoryId, setCategoryId] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchWritings(categoryId));
  }, [dispatch, categoryId]);
  return (
    <div>
      <h1>Writings</h1>
      <FilterByCategories id={categoryId} setId={setCategoryId} />
      {loading ? (
        <Loading />
      ) : (
        writings.map((writing: Writing) => {
          return <DisplayWritings key={writing.id} aWriting={writing} />;
        })
      )}
    </div>
  );
}
