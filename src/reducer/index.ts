import { ReducerActionType, ReducerStateType } from "./types";

function reducer(state: ReducerStateType, action: ReducerActionType) {
  switch (action.type) {
    case "AddAudioFiles":
      return {
        audioFiles: action.payload,
        activeAudio: action.payload[0],
      };
    case "UpdateAudioFiles":
      return {
        ...state,
        audioFiles: [...state.audioFiles, ...action.payload],
      };
    case "SetActiveAudioFile":
      return {
        ...state,
        activeAudio: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
