import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import styles from "./App.styles";
import Library from "./components/Library";
import Player from "./components/Player";
import ContextProvider from "./context/ContextProvider";
import Loader from "./components/Loader";

const useStyles = makeStyles(styles, {
  name: "App",
  meta: "App",
});

function App() {
  const classes = useStyles();
  const [backDropState, setBackDropState] = React.useState(false);

  const handleBackdrop = (e: CustomEventInit) => {
    setBackDropState(e.detail.state);
  };

  React.useEffect(() => {
    window.addEventListener("switchBackDrop", handleBackdrop);
    return () => {
      window.removeEventListener("switchBackDrop", handleBackdrop);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Backdrop open={backDropState}>
        <Loader />
      </Backdrop>
      <ContextProvider>
        <Library />
        <Player />
      </ContextProvider>
    </div>
  );
}

export default App;
