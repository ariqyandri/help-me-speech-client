import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DisplayWritings from "../../components/DisplayWritings";
import FilterByCategories from "../../components/FilterByCategories";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectCategoryById } from "../../store/categories/selector";
import { fetchMyWritings } from "../../store/myWritings/action";
import { selectMyWritings } from "../../store/myWritings/selector";
import { selectToken } from "../../store/user/selectors";
import { Writing } from "./types";

export default function MyWritings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);
  if (!token) {
    history.push("/");
  }
  const loading = useSelector(selectAppLoading);
  const myWritings = useSelector(selectMyWritings);
  const [categoryId, setCategoryId] = useState<number>(0);
  const category = useSelector(selectCategoryById(categoryId));
  useEffect(() => {
    dispatch(fetchMyWritings(categoryId));
    if (category) {
      history.push(`/mywritings/${category.name}`);
    } else {
      history.push(`/mywritings/all`);
    }
  }, [dispatch, history, category, categoryId]);
  return (
    <div>
      <h1>My Writings</h1>
      <FilterByCategories id={categoryId} setId={setCategoryId} />
      <div className="justifyWritings">
        {loading ? (
          <Loading />
        ) : (
          myWritings.map((writing: Writing) => {
            return <DisplayWritings key={writing.id} aWriting={writing} />;
          })
        )}
      </div>
    </div>
  );
}
