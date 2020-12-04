import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DisplayMyWritings from "../../components/DisplayMyWritings";
import DisplayWritings from "../../components/DIsplayWritings";
import FilterByCategories from "../../components/FilterByCategories";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import {
  selectCategoryById,
  selectCategoryByName,
} from "../../store/categories/selector";
import { selectToken, selectUser } from "../../store/user/selectors";
import { fetchWritings } from "../../store/writings/action";
import { selectWritings } from "../../store/writings/selector";
import { Params, Writing } from "./types";

export default function Writings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const userId = token ? user.id : null;
  const params: Params = useParams();
  const categoryIdByName = useSelector(selectCategoryByName(params.category));
  const [categoryId, setCategoryId] = useState<number>(
    categoryIdByName ? categoryIdByName.id : 0
  );
  const category = useSelector(selectCategoryById(categoryId));
  useEffect(() => {
    dispatch(fetchWritings(categoryId));
    if (category) {
      history.push(`/writings/${category.name}`);
    } else {
      history.push(`/writings/all`);
    }
  }, [dispatch, history, category, categoryId]);
  const writings = useSelector(selectWritings);
  return (
    <div>
      <h1>Writings</h1>
      <FilterByCategories id={categoryId} setId={setCategoryId} />
      {loading ? (
        <Loading />
      ) : (
        writings.map((writing: Writing) => {
          if (writing.userId === userId) {
            return <DisplayMyWritings key={writing.id} myWriting={writing} />;
          }
          return <DisplayWritings key={writing.id} aWriting={writing} />;
        })
      )}
    </div>
  );
}
