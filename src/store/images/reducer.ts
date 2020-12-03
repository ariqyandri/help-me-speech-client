import { ImageStateType, Action } from "./types";

const initialState: ImageStateType = [
  {
    id: 0,
    name: "",
    url: "",
    writingId: null,
    createdAt: null,
    updatedAt: null,
  },
];

const imagesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "DISPLAY_IMAGE":
      if (state === initialState) {
        return [{ ...action.payload }];
      }
      return [...state, { ...action.payload }];
    case "REMOVE_IMAGE":
      console.log("image remove", action.payload);
      if (state.length === 1) {
        return [...initialState];
      }
      const newArray = state.filter((image) => {
        return image.id !== action.payload;
      });
      return [...newArray];
    case "REMOVE_ALL_IMAGE":
      console.log("all removed", [...initialState]);
      return [...initialState];
    default:
      return state;
  }
};

export default imagesReducer;
