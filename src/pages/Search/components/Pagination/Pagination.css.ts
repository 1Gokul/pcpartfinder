import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, fonts, vars } from "../../../../styles/theme.css";

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

const paginationButtonBaseStyle = style({
  textAlign: "center",
  boxShadow: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
  border: `3px solid ${vars.colour.secondary}`,
  fontFamily: fonts.mono,
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.25rem 0.25rem 0 ${vars.colour.shadow}`,
    backgroundColor: vars.colour.accentHover,
  },
  ":active": {
    transform: "translate(2px, 2px)",
    boxShadow: "none",
    backgroundColor: vars.colour.accentHover,
  },
});

export const paginationButtonStyle = styleVariants({
  default: [paginationButtonBaseStyle],
  arrow: [
    paginationButtonBaseStyle,
    { display: "flex", alignItems: "center", justifyContent: "center" },
  ],
  active: [
    paginationButtonBaseStyle,
    {
      backgroundColor: vars.colour.accent,
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
      backgroundColor: vars.colour.bg,
      "@media": {
        [breakpoints.desktop]: {
          borderBottom: `3px solid ${vars.colour.secondary}`,
          paddingInline: "0.5rem",
        },
      },
    },
  ],
});
