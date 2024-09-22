import { createContext, Dispatch, useContext } from "react";
import { ReducerActionType, ReducerStateType } from "../reducer/types";

const CustomContext = createContext<{
  state: ReducerStateType;
  dispatch: Dispatch<ReducerActionType>;
}>({
  state: { audioFiles: [], activeAudio: null },
  dispatch: () => {},
});

export function useCustomContext() {
  return useContext(CustomContext);
}

export default CustomContext;
