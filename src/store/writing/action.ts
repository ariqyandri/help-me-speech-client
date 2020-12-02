import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { PostWriting, Writing } from "./types";
import { Action } from "./types";
import {
  appDoneLoading,
  appLoading,
  showMessageWithTimeout,
} from "../appState/action";

export const displayWriting = (writing: Writing): Action => {
  return {
    type: "DISPLAY_WRITING",
    payload: writing,
  };
};

export const postWriting = (value: PostWriting) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/writing`, value, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(displayWriting(response.data));
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

export const fetchWriting = (id: number) => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/writing/${id}`);
      dispatch(displayWriting(response.data));
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
