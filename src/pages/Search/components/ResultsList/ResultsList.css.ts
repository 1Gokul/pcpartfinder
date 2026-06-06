import { style } from "@vanilla-extract/css";
import { skeletonStyle } from "../../../../styles/skeleton.css";

export const resultListContainerStyles = style({
  marginBottom: "2rem",
});

export const resultsTextSkeletonStyle = style([
  skeletonStyle,
  { width: "25%", height: "1.25rem", marginTop: "1rem" },
]);

export const resultsItemSkeletonStyle = style([
  skeletonStyle,
  { display: "block", marginTop: "1rem", width: "100%", height: "3.875rem" },
]);

export const resultsListSkeletonContainerStyle = style({
  width: "100%",
  height: "120px",
});
