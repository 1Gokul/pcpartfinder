import { fontFace, globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { fonts, colours, breakpoints } from "../../../styles/theme.css";
import { formHeading, inputFieldStyle } from "../../Search/Search.css";
import { dotsStyle, hideOnMobileStyle } from "./BuildList/BuildList.css";

const barcodeFont = fontFace({
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: "url(@fontsource/libre-barcode-128/files/libre-barcode-128-latin-400-normal.woff2) format(woff2),\n       url(@fontsource/libre-barcode-128/files/libre-barcode-128-latin-400-normal.woff) format('woff')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
});

export const buildTableContainerStyle = style({
  WebkitFilter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2))",
});

export const buildTableHeading = style([
  formHeading,
  {
    fontFamily: fonts.mono,
    textAlign: "center",
  },
]);

const buildNameInputBaseStyle = style([
  inputFieldStyle,
  {
    display: "block",
    width: "100%",
    margin: "1.5rem auto",
    paddingInline: "0rem",
    textAlign: "center",
    fontFamily: fonts.mono,
    "@media": {
      [breakpoints.tablet]: {
        maxWidth: "32rem",
        paddingInline: "1.25rem",
      },
    },
    ":hover": {
      backgroundColor: colours.green50,
    },
  },
]);

export const buildNameInputStyle = styleVariants({
  default: [buildNameInputBaseStyle],
  /** Shown while the entered name contains profanity. */
  invalid: [
    buildNameInputBaseStyle,
    {
      borderColor: colours.red,
      backgroundColor: "#FFF0F0",
      ":hover": {
        backgroundColor: "#FFE4E4",
      },
      ":focus": {
        backgroundColor: "#FFF0F0",
        borderColor: colours.red,
        boxShadow: `0 0 0 1px ${colours.red}`,
        outline: `1px solid ${colours.red}`,
      },
    },
  ],
});

export const buildTableStyle = style({
  backgroundColor: "white",
  padding: "2.5rem 1rem 4rem",
  fontWeight: "500",
  vars: {
    "--m":
      "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) bottom/80px 51% repeat-x, conic-gradient(from 135deg at top   ,#0000,#000 1deg 89deg,#0000 90deg) top   /80px 51% repeat-x",
  },

  WebkitMask: "var(--m)",
  mask: "var(--m)",
});

export const starSeparator = style([
  dotsStyle,
  {
    display: "block",
    maxWidth: "80%",
    overflow: "hidden",
    fontSize: "2.25rem",
    margin: "2rem auto 0.5rem",
    color: colours.gray,
  },
]);

export const totalCostStyle = style({
  fontFamily: fonts.mono,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.125rem",
  "@media": {
    [breakpoints.tablet]: {
      display: "grid",
      gap: 0,
      gridTemplateColumns: "9fr 3fr",
    },
  },
});

globalStyle(`${totalCostStyle} > .total-title`, {
  "@media": {
    [breakpoints.tablet]: {
      paddingInlineStart: "5rem",
    },
  },
});

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

globalStyle(`${compatibilityDisclaimerStyle} > a:hover`, {
  textUnderlineOffset: "0.5em",
  color: colours.green800,
});
