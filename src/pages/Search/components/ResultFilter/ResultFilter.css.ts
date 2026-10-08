import { style } from "@vanilla-extract/css";
import { paginationButtonStyle } from "../Pagination/Pagination.css";
import { breakpoints, fonts } from "../../../../styles/theme.css";

export const resultFilterContainerStyle = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  flexShrink: 0,
  justifyContent: "space-between",
  gap: "1rem",
  "@media": {
    [breakpoints.tablet]: {
      justifyContent: "initial",
    },
  },
});

export const SortButtonStyle = style([
  paginationButtonStyle["default"],
  {
    minHeight: "2.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 500,
    padding: "0.25rem 2rem",
    fontFamily: fonts.base,
  },
]);
