import { makeStyles } from "@material-ui/styles";
import { parseBlob } from "music-metadata";
import React from "react";
import { useCustomContext } from "../context";
import { styles } from "./Library.styles";
import "./Library.styles.css";
import clsx from "clsx";

const useStyles = makeStyles(styles, {
  name: "Library",
  meta: "Library",
});

function secondsToHms(d: number) {
  const h = Math.floor(d / 3600),
    m = Math.floor((d % 3600) / 60),
    s = Math.floor((d % 3600) % 60);

  return (
    (h > 0 ? h + "h " : "") + (m > 0 ? m + "m " : "") + (s > 0 ? s + "s" : "")
  );
}

const Library = () => {
  const classes = useStyles();
  const {
    state: { audioFiles },
    dispatch,
  } = useCustomContext();

  const onFileAdd = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length) {
      const targetBackDrop = new CustomEvent("switchBackDrop", {
        detail: { state: true },
      });

      window.dispatchEvent(targetBackDrop);

      const audioFiles = await Promise.all(
        files.map(async (file, index) => {
          const { common, format } = await parseBlob(file);
          return {
            title: common.title || "Unknown Music",
            artist: common.artist || "Unknown Artist",
            image: common.picture?.[0].data
              ? URL.createObjectURL(
                  new Blob([common.picture?.[0].data.buffer], {
                    type: "image/png",
                  })
                )
              : "",
            audio: file,
            active: index === 0,
            duration: format.duration ? secondsToHms(format.duration) : null,
          };
        })
      );
      dispatch({ type: "UpdateAudioFiles", payload: audioFiles });

      targetBackDrop.detail.state = false;
      window.dispatchEvent(targetBackDrop);
    }
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
                  [classes.songItemActive]: el.active,
                })}
              >
                <div className={classes.songItemWrapper}>
                  <div className={classes.songImage}>
                    <img src={el.image} alt="no-image" />
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
                {el.active && (
                  <div className={classes.songItemActiveIcon}>
                    <div id="songItemActiveIcon"></div>
                  </div>
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Library;
