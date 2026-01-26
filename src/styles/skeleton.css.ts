import { keyframes, style } from "@vanilla-extract/css";
import { colours } from "./theme.css";

const skeletonAnimation = keyframes({
  "0%": { backgroundColor: colours.green400 },
  "50%": { backgroundColor: colours.green500 },
  "100%": { backgroundColor: colours.green600 },
});

export const skeletonStyle = style({
  animationName: skeletonAnimation,
  animationDuration: "0.75s",
  animationIterationCount: "infinite",
  animationDirection: "alternate-reverse",
});
