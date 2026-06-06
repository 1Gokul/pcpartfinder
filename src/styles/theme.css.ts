import { createGlobalTheme, globalFontFace, globalStyle, layer } from "@vanilla-extract/css";

const reset = layer("reset");

globalFontFace("Mona Sans Variable", {
  src: "url(@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2) format('woff2-variations')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  fontWeight: "300 900",
  fontDisplay: "swap",
  fontStyle: "normal",
});

export const { colours, font } = createGlobalTheme(":root", {
  colours: {
    green50: "#EEFCF3",
    green100: "#DCF9E6",
    green200: "#CBF6DA",
    green300: "#B9F3CE",
    green400: "#A8F0C2",
    green500: "#85EAAA",
    green600: "#73E79E",
    green700: "#1EAE53",
    green800: "#188C42",
    green900: "#126932",
    green1000: "#0C4621",
    green1100: "#093419",
    green1200: "#031108",
    red: "#B80006",
    redHover: "#8F0005",
    gold: "#F3D77C",
    goldHover: "#ECC032",
  },
  font: {
    base: "Mona Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
});

globalStyle("body", {
  fontFamily: font.base,
  backgroundColor: colours.green200,
  color: colours.green1200,
  margin: 0,
  fontKerning: "normal",
});

globalStyle("*", {
  fontFamily: font.base,
  fontKerning: "normal",
  borderRadius: "0",
});

globalStyle("a", {
  all: "unset",
});

export const breakpoints = {
  mobile: "screen and (min-width: 360px)",
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1024px)",
  wide: "screen and (min-width: 1280px)",
};

globalStyle("button", {
  "@layer": {
    [reset]: {
      borderRadius: 0,
      textAlign: "inherit",
      background: "none",
      boxShadow: "none",
      padding: 0,
      cursor: "pointer",
      border: "none",
      color: "inherit",
      font: "inherit",
    },
  },
});
