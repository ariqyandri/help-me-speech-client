import { Writing, Action } from "./types";

const initialState: Writing = {
  title: null,
  content: null,
  imageUrl: null,
  videoUrl: null,
  userId: null,
  categoryId: null,
  createdAt: null,
  updatedAt: null,
};

const writingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "CREATE_WRITING":
      return { ...action.payload };
    default:
      return state;
  }
};

export default writingReducer;