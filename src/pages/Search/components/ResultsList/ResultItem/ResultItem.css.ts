import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, fonts, vars } from "../../../../../styles/theme.css";

const ResultItemContainerStyleBase = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0.5rem 0.5rem 0 ${vars.colour.shadow}`,
  borderWidth: "0 3px",
  borderStyle: "solid",
  borderColor: vars.colour.secondary,
  fontWeight: 500,
  selectors: {
    "&:first-child": {
      borderTopWidth: "3px",
    },
    "&:last-child": {
      borderBottomWidth: "3px",
    },
    "&:nth-child(even)": {
      backgroundColor: vars.colour.accent,
    },
    "&:nth-child(odd)": {
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
  /**
   * The items the one being replaced or the item being
   * added to the build.
   */
  disableDuringReplacementPrompt: [
    ResultItemContainerStyleBase,
    { pointerEvents: "none", filter: "brightness(70%)" },
  ],
  itemBeingReplaced: [
    ResultItemContainerStyleBase,
    {
      color: vars.colour.textOnRedBg,
      selectors: {
        "&:nth-child(even)": {
          backgroundColor: vars.colour.red,
        },
        "&:nth-child(odd)": {
          backgroundColor: vars.colour.red,
        },
      },
    },
  ],
  alreadyInBuild: [
    ResultItemContainerStyleBase,
    {
      selectors: {
        "&:nth-child(even)": {
          backgroundColor: vars.colour.gold,
        },
        "&:nth-child(odd)": {
          backgroundColor: vars.colour.gold,
        },
      },
    },
  ],
});

export const ResultItemLinkStyle = style({
  textDecoration: "none",
  padding: "1rem 1rem 0.5rem",
  color: vars.colour.primary,
  selectors: {
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &`]: {
      color: vars.colour.textOnRedBg,
    },
  },
  ":hover": {
    textDecoration: "underline",
    color: vars.colour.accentHover,
    textUnderlineOffset: "0.25rem",
  },
  "@media": {
    [breakpoints.desktop]: {
      padding: "1.25rem",
    },
    [breakpoints.wide]: {
      padding: "1.5rem",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  },
});

export const ResultItemDetailGridStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: "0.75rem",
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
globalStyle(`${ResultItemDetailGridStyle} > .result-store`, {
  gridColumn: "1 / -1",
  "@media": {
    [breakpoints.tablet]: {
      gridColumn: "auto",
    },
  },
});

export const resultItemPriceStyle = style({
  fontWeight: "600",
  fontFamily: fonts.mono,
});

export const resultItemAddToBuildButtonStyle = style({
  appearance: "none",
  background: "none",
  boxSizing: "border-box",
  backgroundClip: "padding-box",
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  borderStyle: "solid",
  borderColor: "transparent",
  borderWidth: "3px 0 3px 3px",
  margin: 0,
  padding: "0.5rem",
  justifyContent: "center",
  "@media": {
    [breakpoints.desktop]: {
      paddingRight: "0.75rem",
      padding: "0",
      selectors: {
        [`${ResultItemContainerStyleBase}:first-child &`]: {
          borderTopWidth: 0,
        },
      },
    },
  },
  ":hover": {
    backgroundColor: vars.colour.accentHover,
    borderColor: vars.colour.secondary,
  },
  ":active": {
    backgroundColor: vars.colour.accentHover,
  },
  selectors: {
    [`${ResultItemContainerStyleBase}:last-child &`]: {
      borderBottomWidth: 0,
    },
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &`]: {
      borderBottom: 0,
    },
    [`${ResultItemContainerStyle["itemBeingReplaced"]} &:hover`]: {
      backgroundColor: vars.colour.redHover,
    },
    [`${ResultItemContainerStyle["alreadyInBuild"]} &:hover`]: {
      backgroundColor: vars.colour.goldHover,
    },
  },
  height: "100%",
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
      color: vars.colour.red,
    },
  ],
});
