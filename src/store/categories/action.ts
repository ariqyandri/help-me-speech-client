import { apiUrl } from "../../config/constants";
import axios from "axios";
import { Category } from "./types";
import { Action } from "./types";
import { appDoneLoading, appLoading } from "../appState/action";

export const createCategories = (categories: Category[]): Action => {
  return {
    type: "FETCH_CATEGORIES",
    payload: categories,
  };
};

export const fetchCategories = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/categories`);
      dispatch(createCategories(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
      dispatch(appDoneLoading());
    }
  };
};
