import { style } from "@vanilla-extract/css";
import { skeletonStyle } from "../../../../styles/skeleton.css";
import { breakpoints } from "../../../../styles/theme.css";

export const resultListContainerStyles = style({
  marginBottom: "2rem",
});

export const resultsTextSkeletonStyle = style([
  skeletonStyle,
  { width: "25%", height: "1.25rem", margin: "1rem 0" },
]);

export const resultsItemSkeletonStyle = style([
  skeletonStyle,
  { display: "block", marginTop: "0.5rem", width: "100%", height: "3.875rem" },
]);

export const resultsListSkeletonContainerStyle = style({
  width: "100%",
  height: "6.5rem",
  "@media": {
    [breakpoints.tablet]: {
      height: "4.5rem",
    },
  },
});

export const resultFilterSkeletonStyle = style([
  skeletonStyle,
  { display: "block", minHeight: "2.5rem", width: "10rem" },
]);
