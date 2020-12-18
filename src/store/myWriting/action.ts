import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { PostWriting, UpdateWriting, Writing } from "./types";
import { Action } from "./types";
import {
  appDoneLoading,
  appLoading,
  fulfilledRequest,
  showMessageWithTimeout,
} from "../appState/action";
import { assignImage, displayImageFromFetch } from "../images/action";

export const displayMyWriting = (writing: Writing): Action => {
  return {
    type: "DISPLAY_WRITING",
    payload: writing,
  };
};

export const removeMyWriting = (): Action => {
  return {
    type: "REMOVE_WRITING",
  };
};

export const fetchMyWriting = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/writing/mywriting/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(displayImageFromFetch(response.data.images));

      dispatch(displayMyWriting(response.data));
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

export const postMyWriting = (value: PostWriting) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/writing`, value, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(assignImage(response.data.id));
      dispatch(fetchMyWriting(response.data.id));
      dispatch(fulfilledRequest(response.data.id));
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

export const updateMyWriting = (value: UpdateWriting, id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    const { title, content, isPrivate, categoryId } = value;
    try {
      const response = await axios.put(
        `${apiUrl}/writing/mywriting/${id}`,
        { title, content, isPrivate, categoryId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(assignImage(response.data.id));
      dispatch(fetchMyWriting(response.data.id));
      dispatch(fulfilledRequest(response.data.id));
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

export const deleteMyWriting = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      await axios.delete(`${apiUrl}/writing/mywriting/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(removeMyWriting());
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
