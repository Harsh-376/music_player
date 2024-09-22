import React from "react";
import reducer from "../reducer";
import CustomContext from "./";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    audioFiles: [],
    activeAudio: null,
  });
  const providerState = { state, dispatch };

  return (
    <CustomContext.Provider value={providerState}>
      {children}
    </CustomContext.Provider>
  );
};

export default ContextProvider;
