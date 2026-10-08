import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours, fonts } from "../../../../styles/theme.css";

export const paginationLabelStyle = style({
  marginTop: "1rem",
  fontWeight: 500,
});

const PaginationGridStyleBase = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
  gap: "0.5rem",
  height: "2.5rem",
  width: "100%",
  "@media": {
    [breakpoints.mobile]: { gridTemplateColumns: "repeat(9, 1fr)" },
  },
});

export const paginationGridStyle = styleVariants({
  default: [PaginationGridStyleBase],
  invisible: [PaginationGridStyleBase, { visibility: "hidden" }],
});

const baseButtonStyle = style({
  textAlign: "center",
  backgroundColor: colours.green300,
  transition: "transform 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease",
  boxShadow: `0.2rem 0.2rem 0 ${colours.green1200}`,
  border: `3px solid ${colours.green1200}`,
  fontFamily: fonts.mono,
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

export const stickySentinelStyle = style({
  height: "1px",
  width: "100%",
});

const paginationAndFilterContainerStyleBase = style({
  zIndex: 9999,
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "2.5rem",
  alignItems: "center",
  paddingBlock: "1.5rem",
  "@media": {
    [breakpoints.tablet]: {
      rowGap: "1.5rem",
    },
    [breakpoints.desktop]: {
      position: "sticky",
      top: "0.25rem",
      gridTemplateColumns: "1fr fit-content(25rem)",
      gap: "5rem",
    },
  },
});

export const paginationAndFilterContainerStyle = styleVariants({
  default: [paginationAndFilterContainerStyleBase],
  sticky: [
    paginationAndFilterContainerStyleBase,
    {
      backgroundColor: colours.green200,
      "@media": {
        [breakpoints.desktop]: {
          gridTemplateColumns: "1fr fit-content(25rem)",
          gap: "5rem",
          paddingInline: "0.5rem",
        },
      },
    },
  ],
});
