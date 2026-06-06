import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../../../../styles/theme.css";

const ResultItemContainerStyleBase = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",
  transition: "filter 0.25s ease-in-out",
  borderWidth: "0 2px",
  borderStyle: "solid",
  borderColor: colours.green1200,
  fontWeight: 500,
  selectors: {
    "&:first-child": {
      borderTopWidth: "2px",
    },
    "&:last-child": {
      borderBottomWidth: "2px",
    },
    "&:nth-child(even)": {
      backgroundColor: colours.green400,
    },
    "&:nth-child(odd)": {
      backgroundColor: colours.green200,
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
      borderColor: colours.gold,
      margin: "0.5rem 0",
      selectors: {
        "&:first-child": {
          borderTopWidth: 0,
        },
        "&:last-child": {
          borderBottomWidth: 0,
        },
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
  gap: "0.25rem",
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
    borderColor: colours.green1200,
  },
  selectors: {
    [`${ResultItemContainerStyle["base"]}&:first-child`]: {
      borderTopWidth: 0,
    },
    "&:last-child": {
      borderBottomWidth: 0,
    },
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &:hover`]: {
      backgroundColor: colours.redHover,
    },
    [`${ResultItemContainerStyle["alreadyInBuild"]} &:hover`]: {
      backgroundColor: colours.goldHover,
    },
  },
  height: "100%",
  transition: "background-color,border ease-in-out .25s",
});

const ResultItemReplacementTextBase = style({
  fontWeight: 600,
});
export const ResultItemReplacementText = styleVariants({
  incoming: [
    ResultItemReplacementTextBase,
    {
      margin: "1rem 0 0.25rem",
    },
  ],
  outgoing: [
    ResultItemReplacementTextBase,
    {
      margin: "0.25rem 0 2rem",
      color: colours.red,
    },
  ],
});
