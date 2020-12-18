import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { Writing } from "./types";
import { Action } from "./types";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/action";

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

export const removeMyWritings = (id: number): Action => {
  return {
    type: "REMOVE_MY_WRITINGS",
    payload: id,
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

export const deleteMyWritings = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      await axios.delete(`${apiUrl}/writing/mywriting/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(removeMyWritings(id));
      dispatch(showMessageWithTimeout("success", true, `Success!`, 2000));
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
