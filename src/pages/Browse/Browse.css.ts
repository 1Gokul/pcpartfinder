import { style } from "@vanilla-extract/css";
import { breakpoints, vars } from "../../styles/theme.css";

export const browseHeadingStyle = style({
  fontSize: "2.25rem",
  lineHeight: "2.25rem",
  fontWeight: 800,
  color: vars.colour.primary,
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "3rem",
      lineHeight: "3rem",
    },
  },
});

export const categoryGridStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [breakpoints.desktop]: {
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    },
  },
});

export const categoryCardStyle = style({
  display: "flex",
  minHeight: "8rem",
  flexDirection: "column",
  justifyContent: "space-between",
  border: `3px solid ${vars.colour.secondary}`,
  backgroundColor: vars.colour.inputBg,
  boxShadow: `0.45rem 0.45rem 0 ${vars.colour.shadow}`,
  padding: "1.25rem",
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.6rem 0.6rem 0 ${vars.colour.shadow}`,
    backgroundColor: vars.colour.accentHover,
  },
  ":active": {
    transform: "translate(4px, 4px)",
    boxShadow: "none",
    backgroundColor: vars.colour.accentHover,
  },
});

export const categoryNameStyle = style({
  fontSize: "1.4rem",
  fontWeight: 800,
  letterSpacing: "0.02em",
});

export const categoryMetaStyle = style({
  fontSize: "0.95rem",
  color: vars.colour.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});
