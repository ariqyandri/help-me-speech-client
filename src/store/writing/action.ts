import { apiUrl } from "../../config/constants";
import axios from "axios";
import { Writing } from "./types";
import { Action } from "./types";
import { appDoneLoading, appLoading } from "../appState/action";

export const displayWriting = (writing: Writing): Action => {
  return {
    type: "DISPLAY_WRITING",
    payload: writing,
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
