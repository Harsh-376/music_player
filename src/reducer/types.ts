export type ReducerStateType = {
  audioFiles: Array<{
    title: string;
    artist: string;
    image: string;
    audio: File | {}; // Remove empty object
    active: boolean;
    duration: string | null;
  }>;
};

export type ReducerActionType = {
  type: string;
  payload: ReducerStateType["audioFiles"];
};
