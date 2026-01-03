import { globalStyle, style } from "@vanilla-extract/css";
import { colours } from "../../../../../styles/theme.css";

export const ResultItemContainerStyle = style({
  display: "grid",
  gridTemplateColumns: "8fr 2fr 1.5fr 1.5fr",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  selectors: {
    "&:nth-child(even)": {
      backgroundColor: colours.green400,
    },
  },
});

globalStyle(`${ResultItemContainerStyle} > *`, {
  padding: "1rem 0 1rem 0",
  textAlign: "center",
});

export const ResultItemLinkStyle = style({
  textDecoration: "none",
  textAlign: "left",
  paddingLeft: "1.25rem",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  marginRight: "1rem",
  "::after": {
    display: "inline-block",
    content: "'🡕'",
    fontSize: "1.25em",
    marginLeft: 1,
    fontWeight: 500,
  },
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "0.25rem",
  },
});

export const resultItemPriceStyle = style({ fontWeight: 600 });

export const resultItemAddToBuildButtonStyle = style({
  ":hover": {
    backgroundColor: colours.green600,
  },
  height: "100%",
  transition: "background-color ease-in-out 0.1s",
});
