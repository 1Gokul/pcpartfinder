import { style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const footerContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1.25rem",
  padding: "2rem 0",
  placeItems:'center',
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
});

export const footerLinkStyle = style({
  color: colours.green1200,
  fontSize: "large",
  fontWeight: "500",
  textDecoration: "underline",
  textUnderlineOffset: "0.5rem",
  ":hover": {
    color: colours.green800,
    textUnderlineOffset: "0.75rem",
  },
});
