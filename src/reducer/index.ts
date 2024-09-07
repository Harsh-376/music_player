import { ReducerStateType, ReducerActionType } from "./types";

function reducer(state: ReducerStateType, action: ReducerActionType) {
  switch (action.type) {
    case "UpdateAudioFiles":
      return {
        ...state,
        audioFiles: action.payload as ReducerStateType["audioFiles"],
      };
    default:
      return state;
  }
}

export default reducer;
