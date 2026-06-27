import { style } from "@vanilla-extract/css";
import { paginationButtonStyle } from "../Pagination/Pagination.css";
import { breakpoints } from "../../../../styles/theme.css";

export const StoreFilterContainerStyle = style({
  display: "flex",
  alignItems: "center",
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
  },
]);
