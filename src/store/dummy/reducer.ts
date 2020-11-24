import { Dummy, Action } from "./types";

const initialState: Dummy = {
  attr1: "this is dummy data",
  attr2: 0,
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
