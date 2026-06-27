import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../../../../styles/theme.css";

const ResultItemContainerStyleBase = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",
  transition: "filter 0.25s ease-in-out",
  boxShadow: `0.5rem 0.5rem 0 ${colours.green1200}`,
  borderWidth: "0 3px",
  borderStyle: "solid",
  borderColor: colours.green1200,
  fontWeight: 500,
  selectors: {
    "&:first-child": {
      borderTopWidth: "3px",
    },
    "&:last-child": {
      borderBottomWidth: "3px",
    },
    "&:nth-child(even)": {
      backgroundColor: colours.green400,
    },
    "&:nth-child(odd)": {
      backgroundColor: colours.green200,
    },
  },
  "@media": {
    [breakpoints.desktop]: {
      gridTemplateColumns: "8fr 5fr",
    },
    [breakpoints.wide]: {
      fontSize: "1.125rem",
    },
  },
});

export const ResultItemContainerStyle = styleVariants({
  base: [ResultItemContainerStyleBase],
  disableDuringReplacementPrompt: [
    ResultItemContainerStyleBase,
    { pointerEvents: "none", filter: "brightness(70%)" },
  ],
  itemBeingReplaced: [
    ResultItemContainerStyleBase,
    {
      color: "white",
      selectors: {
        "&:nth-child(even)": {
          backgroundColor: colours.red,
        },
        "&:nth-child(odd)": {
          backgroundColor: colours.red,
        },
      },
    },
  ],
  alreadyInBuild: [
    ResultItemContainerStyleBase,
    {
      selectors: {
        "&:nth-child(even)": {
          backgroundColor: colours.gold,
        },
        "&:nth-child(odd)": {
          backgroundColor: colours.gold,
        },
      },
    },
  ],
});

export const ResultItemLinkStyle = style({
  textDecoration: "none",
  padding: "1rem 1rem 0.5rem",
  color: colours.green1200,
  selectors: {
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &`]: {
      color: "white",
    },
  },
  ":hover": {
    textDecoration: "underline",
    textUnderlineOffset: "0.25rem",
  },
  "@media": {
    [breakpoints.desktop]: {
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
  padding: "0.5rem 0 0rem",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktop]: {
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
  appearance: "none",
  background: "none",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  borderStyle: "solid",
  borderColor: "transparent",
  borderWidth: "3px 0 3px 3px",
  margin: 0,
  padding: "0.75rem",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktop]: {
      paddingRight: "0.75rem",
      padding: "0",
    },
  },
  ":hover": {
    backgroundColor: colours.green600,
    borderColor: colours.green1200,
  },
  selectors: {
    [`${ResultItemContainerStyleBase}:first-child &`]: {
      borderTopWidth: 0,
    },
    [`${ResultItemContainerStyleBase}:last-child &`]: {
      borderBottomWidth: 0,
    },
    [`${ResultItemContainerStyle["alreadyInBuild"]}:first-child &`]: {
      borderTopWidth: "3px",
    },
    [`${ResultItemContainerStyle["alreadyInBuild"]}:last-child &`]: {
      borderBottomWidth: "3px",
    },
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &:hover`]: {
      backgroundColor: colours.redHover,
    },
    [`${ResultItemContainerStyle["alreadyInBuild"]} &:hover`]: {
      backgroundColor: colours.goldHover,
    },
  },
  height: "100%",
  transition: "background-color,border ease-in-out .05s",
});

const ResultItemReplacementTextBase = style({
  fontWeight: 600,
});
export const ResultItemReplacementText = styleVariants({
  incoming: [
    ResultItemReplacementTextBase,
    {
      margin: "2rem 0 0.5rem",
    },
  ],
  outgoing: [
    ResultItemReplacementTextBase,
    {
      margin: "0.75rem 0 2rem",
      color: colours.red,
    },
  ],
});
