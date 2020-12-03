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

export const fetchMyWritings = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());

    dispatch(appLoading());
    try {
      if (id === 0) {
        const response = await axios.get(`${apiUrl}/writings/mywritings`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(displayMyWritings(response.data));
      } else {
        const response = await axios.get(
          `${apiUrl}/writings/mywritings/category/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(displayMyWritings(response.data));
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
