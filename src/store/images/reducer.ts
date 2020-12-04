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
      if (
        state.find((image) => {
          return image.id === 0;
        })
      ) {
        return [{ ...action.payload }];
      }
      return [...state, { ...action.payload }];
    case "DISPLAY_IMAGE_FROM_FETCH":
      if (action.payload.length === 0) {
        return [...initialState];
      }
      return [...action.payload];
    case "REMOVE_IMAGE":
      if (state.length === 1) {
        return [...initialState];
      }
      return [
        ...state.filter((image) => {
          console.log();
          return image.id !== parseInt(action.payload);
        }),
      ];
    case "REMOVE_ALL_IMAGE":
      return initialState;
    default:
      return state;
  }
};

export default imagesReducer;
