import { globalStyle, style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../../../../styles/theme.css";

export const ResultItemContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  selectors: {
    "&:nth-child(even)": {
      backgroundColor: colours.green400,
    },
  },
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "8fr 5fr",
    },
    [breakpoints.wide]: {
      fontSize: "1.125rem",
    },
  },
});

export const ResultItemLinkStyle = style({
  textDecoration: "none",
  padding: "1rem 1rem 0.5rem",
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "0.25rem",
  },
  "@media": {
    [breakpoints.tablet]: {
      padding: "1.25rem",
    },
    [breakpoints.desktop]: {
      padding: "1.5rem",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
});

export const ResultItemDetailGridStyle = style({
  display: "grid",
  padding: "0.5rem 0 1rem",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "2fr 1.5fr 1.5fr",
      padding: "0",
    },
  },
  height: "100%",
});

globalStyle(`${ResultItemDetailGridStyle} > *`, {
  textAlign: "center",
});

export const resultItemPriceStyle = style({ fontWeight: 600 });

export const resultItemAddToBuildButtonStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.1rem",
  paddingRight: "1rem",
  justifyContent: "center",
  "@media": {
    [breakpoints.tablet]: {
      paddingRight: "0.75rem",
      padding: "0",
    },
  },
  ":hover": {
    backgroundColor: colours.green600,
  },
  height: "100%",
  transition: "background-color ease-in-out 0.1s",
});
