export type Action =
  | {
      type: "SET_TIME";
    }
  | {
      type: "SWITCH";
    }
  | { type: "DEACTIVATE" }
  | { type: "LAP" };
