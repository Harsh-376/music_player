import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import AltImage from "../altImage.jpg";
import { useCustomContext } from "../context";
import { audioType } from "../reducer/types";
import { parsedAudioFiles } from "../reducer/utils";
import { styles } from "./Library.styles";
import "./Library.styles.css";

const useStyles = makeStyles(styles, {
  name: "Library",
  meta: "Library",
});

const Library = () => {
  const classes = useStyles();
  const {
    state: { audioFiles, activeAudio },
    dispatch,
  } = useCustomContext();

  const onFileAdd = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioFiles = await parsedAudioFiles(
      e.target.files ? Array.from(e.target.files) : []
    );
    if (audioFiles.length)
      dispatch({
        type: "AddAudioFiles",
        payload: audioFiles,
      });
  };

  const handleAudioChange = (audio: audioType) => {
    dispatch({ type: "SetActiveAudioFile", payload: audio });
  };

  return (
    <div className={classes.root}>
      <label htmlFor="music-player-file-#1">Select Files</label>
      <input
        type="file"
        accept=".mp3"
        onChange={onFileAdd}
        id="music-player-file-#1"
        style={{ display: "none" }}
        multiple
      />
      <div className={classes.songContainer}>
        {audioFiles.length
          ? audioFiles.map((el, index) => (
              <div
                key={`${el.artist}:${el.title}:${index}`}
                className={clsx(classes.songItem, {
                  [classes.songItemActive]: el.uuid === activeAudio?.uuid,
                })}
                onClick={() => {
                  handleAudioChange(el);
                }}
              >
                <div className={classes.songItemWrapper}>
                  <div className={classes.songImage}>
                    {el.uuid === activeAudio?.uuid ? (
                      <div className={classes.songItemActiveIcon}>
                        <div id="songItemActiveIcon"></div>
                      </div>
                    ) : el.image ? (
                      <img src={el.image} />
                    ) : (
                      <img src={AltImage} />
                    )}
                  </div>
                  <div className={classes.songDetails}>
                    <div>
                      Artist: <p title={el.artist}>{el.artist}</p>
                    </div>
                    <div>
                      Title: <p title={el.title}>{el.title}</p>
                    </div>
                    {el.duration && (
                      <div>
                        Duration: <p>{el.duration}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Library;
