import { style } from "@vanilla-extract/css";
import { breakpoints } from "../../styles/theme.css";

export const LayoutContainerStyle = style({
  width: "100%",
  maxWidth: "100%",
  padding: "0 1rem",
  margin: "0 auto",
  "@media": {
    [breakpoints.tablet]: {
      width: "90vw",
      maxWidth: "90vw",
      padding: 0,
    },
    [breakpoints.desktop]: {
      width: "85vw",
      maxWidth: "85vw",
    },
    [breakpoints.wide]: {
      width: "75rem",
      maxWidth: "80rem",
    },
  },
});
