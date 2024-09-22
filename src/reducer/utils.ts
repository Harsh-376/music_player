import { parseBlob } from "music-metadata";
import { ReducerStateType } from "./types";

export function secondsToHms(d: number) {
  const h = Math.floor(d / 3600),
    m = Math.floor((d % 3600) / 60),
    s = Math.floor((d % 3600) % 60);

  return (
    (h > 0 ? h + "h " : "") + (m > 0 ? m + "m " : "") + (s > 0 ? s + "s" : "")
  );
}

export async function parsedAudioFiles(files: File[]) {
  if (files.length) {
    const targetBackDrop = new CustomEvent("switchBackDrop", {
      detail: { state: true },
    });
    let audioFiles: ReducerStateType["audioFiles"] = [];

    window.dispatchEvent(targetBackDrop);
    try {
      audioFiles = await Promise.all(
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
            duration: format.duration ? secondsToHms(format.duration) : null,
            uuid: `${index}:${common.title}:${common.artist}`,
          };
        })
      );
    } catch (e) {
      console.error("Error while extracting metadata", e);
    }

    targetBackDrop.detail.state = false;
    window.dispatchEvent(targetBackDrop);
    return audioFiles;
  }
  return [];
}
