import { apiUrl } from "../../config/constants";
import axios from "axios";
import { User } from "./types";
import { Action } from "./types";
import { appDoneLoading, appLoading } from "../appState/action";

export const displayOtherUser = (user: User): Action => {
  return {
    type: "DISPLAY_OTHER_USER",
    payload: user,
  };
};

export const fetchOtherUser = (id: number) => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/user/${id}`);
      dispatch(displayOtherUser(response.data));
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
