import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { ImageType, PostImage } from "./types";
import { selectImagesIds } from "./selector";

export const displayImage = (image: ImageType) => {
  return { type: "DISPLAY_IMAGE", payload: image };
};

export const removeImage = (id: number) => {
  return { type: "REMOVE_IMAGE", payload: id };
};

export const removeAllImage = () => {
  return { type: "REMOVE_ALL_IMAGE" };
};

export const postImage = (value: PostImage) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    try {
      const response = await axios.post(`${apiUrl}/image`, value, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      dispatch(displayImage(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const assignImage = (writingId: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    const imagesIds = selectImagesIds(getState());
    try {
      await axios.put(
        `${apiUrl}/image/${writingId}`,
        { id: imagesIds },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(removeAllImage());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const deleteImage = (id: number) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    try {
      await axios.delete(`${apiUrl}/image/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(removeImage(id));
      console.log(`removed image`, id);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
