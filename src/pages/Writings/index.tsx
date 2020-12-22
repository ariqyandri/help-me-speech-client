import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DisplayWritings from "../../components/DisplayWritings";
import FilterByCategories from "../../components/FilterByCategories";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import {
  selectCategoryById,
  selectCategoryByName,
} from "../../store/categories/selector";
import { fetchWritings } from "../../store/writings/action";
import { selectWritings } from "../../store/writings/selector";
import { Params, Writing } from "./types";
import "./Writings.css";

export default function Writings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(selectAppLoading);
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
      <div className="justifyWritings">
        {loading ? (
          <Loading />
        ) : (
          writings.map((writing: Writing) => {
            return <DisplayWritings key={writing.id} aWriting={writing} />;
          })
        )}
      </div>
    </div>
  );
}
