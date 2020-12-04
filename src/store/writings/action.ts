import { apiUrl } from "../../config/constants";
import axios from "axios";
import { Writing } from "./types";
import { Action } from "./types";
import { appDoneLoading, appLoading } from "../appState/action";

export const displayWritings = (writings: Writing[]): Action => {
  return {
    type: "FETCH_WRITINGS",
    payload: writings,
  };
};

export const createDescription = () => {
  return {
    type: "CREATE_DESCRIPTION",
  };
};

export const fetchWritings = (categoryId: number) => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      if (categoryId === 0) {
        const response = await axios.get(`${apiUrl}/writings`);
        dispatch(displayWritings(response.data));
      } else {
        const response = await axios.get(
          `${apiUrl}/writings/category/${categoryId}`
        );

        dispatch(displayWritings(response.data));
      }
      dispatch(createDescription());
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
