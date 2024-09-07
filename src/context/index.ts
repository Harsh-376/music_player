import React from "react";
import { ReducerActionType, ReducerStateType } from "../reducer/types";

const CustomContext = React.createContext<{
  state: ReducerStateType;
  dispatch: React.Dispatch<ReducerActionType>;
}>({
  state: { audioFiles: [] },
  dispatch: () => {},
});

export function useCustomContext() {
  return React.useContext(CustomContext);
}

export default CustomContext;
