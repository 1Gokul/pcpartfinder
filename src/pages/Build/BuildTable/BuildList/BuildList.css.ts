import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, fonts, vars } from "../../../../styles/theme.css";
import { paginationButtonStyle } from "../../../Search/components/Pagination/Pagination.css";

const buildItemRowStyleBase = style({
  padding: "1rem",
  fontSize: "1rem",

  "@media": {
    [breakpoints.tablet]: {
      fontSize: "1.125rem",
    },
  },
});

export const hideOnMobileStyle = style({
  display: "none",
  "@media": {
    [breakpoints.tablet]: {
      display: "block",
    },
  },
});

export const buildItemRowStyle = styleVariants({
  empty: [
    buildItemRowStyleBase,
    {
      marginBlock: "1rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      textDecoration: "underline",
      textUnderlineOffset: "0.5rem",
      maxWidth: "max-content",
      lineHeight: 2,
      color: vars.colour.secondary,
      ":hover": {
        color: vars.colour.accentHover,
        textUnderlineOffset: "0.75rem",
      },
    },
  ],
  itemExists: [
    buildItemRowStyleBase,
    {
      position: "relative",
      columnGap: "0.5rem",
      "@media": {
        [breakpoints.tablet]: {
          display: "grid",
          gridTemplateColumns: "9fr 3fr",
        },
      },
    },
  ],
});

export const buildItemNameStyle = style({
  fontSize: "1.125rem",
  lineHeight: 1.25,
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  marginBottom: "0.5rem",
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "1.25rem",
      paddingRight: "2.5rem",
    },
  },
});

export const deleteButtonContainerStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "0.75rem",
  marginTop: "0.5rem",
  "@media": {
    [breakpoints.tablet]: {
      position: "absolute",
      top: 0,
      right: "0.5rem",
    },
  },
});

const deleteButtonStyleBase = style([
  paginationButtonStyle["default"],
  {
    backgroundColor: "transparent",
    color: vars.colour.primary,
    display: "flex",
    alignItems: "center",
    padding: "0.25rem 0.5rem",
    "::before": {
      content: "Delete",
    },
    "@media": {
      [breakpoints.tablet]: {
        "::before": {
          content: "",
          padding: 0,
        },
      },
    },
  },
]);

export const deleteButtonStyle = styleVariants({
  delete: [deleteButtonStyleBase],
  confirm: [
    deleteButtonStyleBase,
    {
      backgroundColor: vars.colour.red,
      color: vars.colour.textOnRedBg,
      ":hover": {
        backgroundColor: vars.colour.redHover,
      },
      "::before": {
        content: "Yes",
      },
    },
  ],
  cancel: [
    deleteButtonStyleBase,
    {
      backgroundColor: vars.colour.accent,
      ":hover": {
        backgroundColor: vars.colour.accentHover,
      },
      "::before": {
        content: "No",
      },
    },
  ],
});

export const buildSmallPriceStyle = style({
  display: "inline",
  fontFamily: fonts.mono,
  color: vars.colour.primary,
  fontSize: "1.25rem",
  "@media": {
    [breakpoints.tablet]: {
      display: "none",
    },
  },
});

export const buildItemDetailsStyle = style({
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
  gap: "0.5rem",
  color: vars.colour.muted,
  "@media": {
    [breakpoints.tablet]: {
      flexDirection: "row",
      alignItems: "center",
      textWrap: "nowrap",
      overflow: "hidden",
      justifyContent: "space-between",
    },
  },
});

globalStyle(".category-label", {
  fontFamily: fonts.mono,
  fontWeight: 700,
});

globalStyle(`${buildItemDetailsStyle} > *`, { flexShrink: 0 });

globalStyle(`${buildItemRowStyle["itemExists"]} > div`, { minWidth: 0 });

export const emptyBuildItemPlaceholderStyle = style({
  padding: "1.5rem",
  fontStyle: "italic",
  "@media": {
    [breakpoints.desktop]: {
      padding: "1.25rem",
    },
    [breakpoints.wide]: {
      padding: "1.5rem",
    },
  },
});

export const dotsStyle = style([
  hideOnMobileStyle,
  {
    whiteSpace: "nowrap",
    textOverflow: "unset",
  },
]);

export const buildIconStyle = style({ padding: 0, minWidth: 20, minHeight: 20, flexShrink: 0 });
