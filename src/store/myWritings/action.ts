import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { Writing } from "./types";
import { Action } from "./types";
import { appDoneLoading, appLoading } from "../appState/action";

export const displayMyWritings = (writing: Writing[]): Action => {
  return {
    type: "FETCH_MY_WRITINGS",
    payload: writing,
  };
};

export const createDescription = () => {
  return {
    type: "CREATE_DESCRIPTION",
  };
};

export const fetchMyWritings = () => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/writings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(displayMyWritings(response.data));
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
