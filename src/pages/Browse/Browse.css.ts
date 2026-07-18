import { style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const browseContainerStyle = style({
  padding: "0 1rem 3rem",
  marginTop: "2.5rem",
  "@media": {
    [breakpoints.tablet]: {
      padding: "0 1.75rem 4rem",
      marginTop: "3.5rem",
    },
    [breakpoints.desktop]: {
      padding: "0 2rem 4rem",
    },
  },
});

export const browseHeadingStyle = style({
  fontSize: "2.25rem",
  lineHeight: "2.25rem",
  fontWeight: 800,
  color: colours.green1100,
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
  border: `3px solid ${colours.green1200}`,
  backgroundColor: colours.green50,
  boxShadow: `0.45rem 0.45rem 0 ${colours.green1200}`,
  padding: "1.25rem",
  transition: "transform 0.12s ease, box-shadow 0.12s ease, background-color 0.12s ease",
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.6rem 0.6rem 0 ${colours.green1200}`,
    backgroundColor: colours.green100,
  },
  ":active": {
    transform: "translate(4px, 4px)",
    boxShadow: "none",
  },
});

export const categoryNameStyle = style({
  fontSize: "1.4rem",
  fontWeight: 750,
  letterSpacing: "0.02em",
});

export const categoryMetaStyle = style({
  fontSize: "0.95rem",
  color: colours.green900,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});
