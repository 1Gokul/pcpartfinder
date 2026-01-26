import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles/theme.css";

export const LayoutContainerStyle = style({
  width: "90vw",
  maxWidth: "90vw",
  margin: "0 auto",
  "@media": {
    [breakpoints.tablet]: {
      width: "85vw",
      maxWidth: "85vw",
    },
    [breakpoints.desktop]: {
      width: "75vw",
      maxWidth: "75vw",
    },
    [breakpoints.wide]: {
      width: "80rem",
      maxWidth: "80rem",
    },
  },
});
