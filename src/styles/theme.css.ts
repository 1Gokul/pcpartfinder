import { createGlobalTheme, globalStyle, layer } from "@vanilla-extract/css";
import "./fonts.css";

const reset = layer("reset");

export const { colours, font: fonts } = createGlobalTheme(":root", {
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
    red: "#FF333A",
    redHover: "#F50008",
    gold: "#F3D77C",
    goldHover: "#ECC032",
  },
  font: {
    base: "'Mona Sans Variable', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    mono: "'Departure Mono', monospace",
  },
});

globalStyle("body", {
  fontFamily: fonts.base,
  backgroundColor: colours.green200,
  color: colours.green1200,
  margin: 0,
  fontKerning: "normal",
  scrollbarGutter: "stable",
});

globalStyle("*", {
  fontFamily: fonts.base,
  fontKerning: "normal",
  borderRadius: "0",
  scrollbarGutter: "stable",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
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
      border: "none",
      color: "inherit",
      font: "inherit",
    },
  },
});

globalStyle("a", {
  cursor: "pointer",
});
