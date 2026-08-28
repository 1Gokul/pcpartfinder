import { globalStyle, style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";
import { ResultItemContainerStyle } from "../Search/components/ResultsList/ResultItem/ResultItem.css";

export const buildTableStyle = style({
  padding: "1rem",
  border: '2px solid black',
});
export const buildItemRowStyle = style({
  padding: "1rem",
  border: '2px solid black',
  fontSize: "1.125rem",
});

export const buildItemNameContainerStyle = style({
  fontSize: "1.25rem",
  display: "flex",
  justifyContent: 'space-between',
  gap: "1rem",
});
export const buildItemDetailsStyle = style({
  display: "grid",
  gridTemplateColumns: "3fr 3fr 6fr",
});
globalStyle(`${buildItemDetailsStyle} > .category`, {
  fontWeight: "bold",
});

globalStyle(`.build-table-container > ${buildItemRowStyle}:nth-child(even)`, {
  backgroundColor: colours.green400,
});

export const emptyBuildItemPlaceholderStyle = style({
  padding: "1.5rem",
  fontStyle: "italic",
  "@media": {
    [breakpoints.desktop]: {
      padding: "1.25rem",
    },
    [breakpoints.wide]: {
      padding: "1.5rem",
    },
  },
});
