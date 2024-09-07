import React from "react";
import reducer from "../reducer";
import CustomContext from "./";
import image from "../download20210502194746.png";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    audioFiles: [],
    // [
    //   {
    //     title: "Numb (Album Version)",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: true,
    //   },
    //   {
    //     title: "Burn It Down",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: false,
    //   },
    //   {
    //     title: "I'll Be Gone (Schoolboy Remix)",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: false,
    //   },
    //   {
    //     title: "Bleed It Out (Radio Edit)",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: false,
    //   },
    //   {
    //     title: "Lost In The Echo (Album Version)",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: false,
    //   },
    //   {
    //     title: "Iridescent",
    //     artist: "Linkin Park",
    //     image: image,
    //     audio: {},
    //     active: false,
    //   },
    // ],
  });
  const providerState = { state, dispatch };

  return (
    <CustomContext.Provider value={providerState}>
      {children}
    </CustomContext.Provider>
  );
};

export default ContextProvider;
