import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "../user/selectors";
import { PostWriting, Writing } from "./types";

export const createWriting = (writing: Writing) => {
  return {
    type: "CREATE_WRITING",
    payload: writing,
  };
};

export const postWriting = ({
  title,
  content,
  imageUrl,
  videoUrl,
  categoryId,
}: PostWriting) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());

    try {
      const response = await axios.post(
        `${apiUrl}/writing`,
        {
          title,
          content,
          imageUrl,
          videoUrl,
          categoryId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(createWriting(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
