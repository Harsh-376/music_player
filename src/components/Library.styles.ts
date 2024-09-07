import { createStyles } from "@material-ui/styles";

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    padding: "0.5rem",
  },
  songContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    gap: "0.5rem",
  },
  songItem: {
    display: "flex",
    // backgroundColor: "#ebebeb",
    backgroundColor: "#dfdfdf",
    borderRadius: "0.75rem",
    padding: "0.25rem",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "space-between",
    "&:hover": {
      // backgroundColor: "#c0c0c0",
      backgroundColor: "#cdcdcd",
    },
  },
  songItemWrapper: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "flex-Start",
  },
  songItemActive: {
    backgroundColor: "#ccc",
  },
  songImage: {
    minHeight: "3.5rem",
    maxHeight: "3.5rem",
    minWidth: "3.5rem",
    maxWidth: "3.5rem",
    overflow: "hidden",
    "&>img": {
      borderRadius: "0.5rem",
      border: "0.0625rem solid #c0c0c0",
      height: "100%",
      width: "100%",
    },
  },
  songDetails: {
    fontSize: "0.875rem",
    fontWeight: 500,
    display: "flex",
    flexDirection: "column",
    gap: "0.0625rem",
    height: "fit-content",
    maxWidth: "16.875rem",
    "&>div": {
      display: "flex",
      gap: "0.25rem",
      alignItems: "flex-end",
      color: "#676767",
      "&>p": {
        fontSize: "0.9375rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        color: "#232323",
      },
    },
  },
  songItemActiveIcon: {
    height: "3.5rem",
    width: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "0.5rem",
  },
});

export { styles };
