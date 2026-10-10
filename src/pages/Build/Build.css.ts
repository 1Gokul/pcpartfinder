import { fontFace, globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours, fonts } from "../../styles/theme.css";
import { formHeading } from "../Search/Search.css";
import { paginationButtonStyle } from "../Search/components/Pagination/Pagination.css";

const barcodeFont = fontFace({
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: "url(@fontsource/libre-barcode-128/files/libre-barcode-128-latin-400-normal.woff2) format(woff2),\n       url(@fontsource/libre-barcode-128/files/libre-barcode-128-latin-400-normal.woff) format('woff')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
});

export const buildTableContainerStyle = style({
  WebkitFilter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.1))",
});

export const buildTableHeading = style([
  formHeading,
  {
    fontFamily: fonts.mono,
    textAlign: "center",
  },
]);
export const buildTableStyle = style({
  backgroundColor: colours.green50,
  padding: "2.5rem 1rem 4rem",
  fontWeight: "500",
  vars: {
    "--m":
      "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 51% repeat-x, conic-gradient(from 135deg at top   ,#0000,#000 1deg 89deg,#0000 90deg) top   /80px 51% repeat-x",
  },

  WebkitMask: "var(--m)",
  mask: "var(--m)",
});

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
  empty: [buildItemRowStyleBase],
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
    backgroundColor: colours.green50,
    color: colours.green1100,
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
      backgroundColor: colours.red,
      color: "white",
      ":hover": {
        backgroundColor: colours.redHover,
      },
      "::before": {
        content: "Yes",
      },
    },
  ],
  cancel: [
    deleteButtonStyleBase,
    {
      backgroundColor: colours.green400,
      ":hover": {
        backgroundColor: colours.green500,
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
  color: colours.green1100,
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
  color: colours.gray,
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

globalStyle(`${buildItemDetailsStyle} > .category`, {
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

export const starSeparator = style([
  dotsStyle,
  {
    display: "block",
    maxWidth: "80%",
    overflow: "hidden",
    fontSize: "2.25rem",
    margin: "2rem auto 0.5rem",
  },
]);

export const totalCostStyle = style([
  buildItemRowStyle["itemExists"],
  {
    fontFamily: fonts.mono,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
    fontSize: "1.125rem",
    paddingInlineStart: "3rem",
    "@media": {
      [breakpoints.tablet]: {
        flexDirection: "row",
      },
    },
  },
]);

export const buildLargePriceStyle = style([
  hideOnMobileStyle,
  {
    fontFamily: fonts.mono,
    fontSize: "2rem",
    alignSelf: "end",
    selectors: {
      [`${totalCostStyle} &`]: {
        alignSelf: "auto",
        display: "initial",
      },
    },
  },
]);

export const barcode = style({
  fontFamily: barcodeFont,
  fontSize: "5rem",
  lineHeight: 0.75,
});

export const compatibilityDisclaimerStyle = style({
  fontFamily: fonts.mono,
  textAlign: "center",
  lineHeight: 1.5,
  marginBlock: "3rem",
  textWrap: "pretty",
  "@media": {
    [breakpoints.tablet]: {
      paddingInline: "3rem",
    },
  },
});

globalStyle(`${compatibilityDisclaimerStyle} > a`, {
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "underline",
  textUnderlineOffset: "0.25em",
});
