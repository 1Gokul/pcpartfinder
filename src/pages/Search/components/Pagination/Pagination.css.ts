import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../../../styles/theme.css";

export const paginationLabelStyle = style({
  margin: "1rem 0",
  fontWeight: 500,
  "@media": {
    [breakpoints.tablet]: {
      margin: "1rem 0",
    },
  },
});

const PaginationGridStyleBase = style({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  columnGap: "0.5rem",
  height: "2.5rem",
  width: "100%",
  // "@media": {
  //   [breakpoints.tablet]: {
  //     width: "65%",
  //   },
  //   [breakpoints.desktop]: {
  //     width: "55%",
  //   },
  //   [breakpoints.wide]: {
  //     width: "40%",
  //   },
  // },
});

export const paginationGridStyle = styleVariants({
  default: [PaginationGridStyleBase],
  invisible: [PaginationGridStyleBase, { visibility: "hidden" }],
});

const baseButtonStyle = style({
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: colours.green300,
  transition: "transform 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease",
  boxShadow: `0.2rem 0.2rem 0 ${colours.green1200}`,
  border: "3px solid",
  borderColor: colours.green1100,
  ":active": {
    transform: "translate(2px, 2px)",
    boxShadow: "none",
  },
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.25rem 0.25rem 0 ${colours.green1200}`,
    backgroundColor: colours.green500,
  },
});

export const paginationButtonStyle = styleVariants({
  default: [baseButtonStyle],
  arrow: [baseButtonStyle, { display: "flex", alignItems: "center", justifyContent: "center" }],
  active: [
    baseButtonStyle,
    {
      backgroundColor: colours.green500,
      fontWeight: 500,
    },
  ],
});

export const paginationAndFilterContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  alignItems: "center",
  marginTop: "0.75rem",
  marginBottom: "2rem",
  "@media": {
    [breakpoints.desktop]: {
      gridTemplateColumns: "10fr 1fr",
      gap: "8rem",
    },
  },
});
