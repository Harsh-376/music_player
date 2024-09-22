export type audioType = {
  title: string;
  artist: string;
  image: string;
  audio: File | {};
  duration: string | null;
  uuid: string;
};

export type ReducerStateType = {
  audioFiles: Array<audioType>;
  activeAudio: audioType | null;
};

export type ReducerActionType =
  | {
      type: "AddAudioFiles";
      payload: ReducerStateType["audioFiles"];
    }
  | {
      type: "SetActiveAudioFile";
      payload: ReducerStateType["activeAudio"];
    }
  | {
      type: "UpdateAudioFiles";
      payload: ReducerStateType["audioFiles"];
    };
