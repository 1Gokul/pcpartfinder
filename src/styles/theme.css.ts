import { createGlobalTheme, createThemeContract, globalStyle, layer } from "@vanilla-extract/css";
import "./fonts.css";

export const vars = createThemeContract({
  colour: {
    primary: null,
    secondary: null,
    bg: null,
    inputBg: null,
    accent: null,
    accentHover: null,
    accentTextHover: null,
    paper: null,
    red: null,
    redHover: null,
    redBg: null,
    redBgHover: null,
    textOnRedBg: null,
    gold: null,
    goldHover: null,
    muted: null,
    shadow: null,
  },
  font: {
    base: null,
    mono: null,
  },
  space: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
    "5xl": null,
  },
  text: {
    xs: null,
    sm: null,
    base: null,
    lg: null,
    xl: null,
    "2xl": null,
    "3xl": null,
    "4xl": null,
    display: null,
  },
  border: {
    width: null,
    style: null,
  },
  shadow: {
    sm: null,
    md: null,
    lg: null,
  },
  z: {
    base: null,
    dropdown: null,
    sticky: null,
    toast: null,
  },
});

type ColourTokens = Record<keyof typeof vars.colour, string>;

const lightColour = {
  primary: "#031108",
  secondary: "#126932",
  bg: "#CBF6DA",
  inputBg: "#EEFCF3",
  accent: "#A8F0C2",
  accentHover: "#85EAAA",
  accentTextHover: "#85EAAA",
  paper: "#555D62",
  red: "#FF333A",
  redHover: "#F50008",
  redBg: "#FFF0F0",
  redBgHover: "#FFE4E4",
  textOnRedBg: "#FFFFFF",
  gold: "#F3D77C",
  goldHover: "#ECC032",
  muted: "#6B7280",
  shadow: "#2E6161",
} satisfies ColourTokens;

const darkColour = {
  primary: "#EEFCF3",
  secondary: "#BAF3CE",
  bg: "#031109",
  inputBg: "",
  accent: "#1E4D30",
  accentHover: "#2E7D4F",
  accentTextHover: '#4CBD7B',
  paper: "#2F3337",
  red: "#FF5C61",
  redHover: "#FF7A7E",
  redBg: "#2A0A0C",
  redBgHover: "#3A0D10",
  textOnRedBg: "#1A0505",
  gold: "#CE7A27",
  goldHover: "#D88531",
  muted: "#9CA3AF",
  shadow: "transparent",
} satisfies ColourTokens;

const sharedTokens = {
  font: {
    base: "'Mona Sans Variable', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    mono: "'Martian Mono Variable', monospace",
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "3rem",
    "5xl": "4rem",
  },
  text: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.25rem",
    display: "3rem",
  },
  border: {
    width: "3px",
    style: "solid",
  },

  shadow: {
    sm: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
    md: `0.45rem 0.45rem 0 ${vars.colour.shadow}`,
    lg: `0.6rem 0.6rem 0 ${vars.colour.shadow}`,
  },
  z: {
    base: "0",
    dropdown: "10",
    sticky: "100",
    toast: "1000",
  },
};

createGlobalTheme(":root", vars, { ...sharedTokens, colour: lightColour });
createGlobalTheme("[data-theme='dark']", vars, { ...sharedTokens, colour: darkColour });

globalStyle(":root", { colorScheme: "light" });
globalStyle("[data-theme='dark']", { colorScheme: "dark" });

export const fonts = vars.font;

globalStyle("body", {
  fontFamily: fonts.base,
  backgroundColor: vars.colour.bg,
  backgroundImage: `linear-gradient(color-mix(in srgb, ${vars.colour.primary} 12.5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, ${vars.colour.primary} 12.5%, transparent) 1px, transparent 1px)`,
  backgroundSize: "32px 32px",
  color: vars.colour.primary,
  margin: 0,
  fontKerning: "normal",
  scrollbarGutter: "stable",
});

globalStyle("*", {
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
  cursor: "pointer",
});

globalStyle("p", {
  margin: 0,
});

export const breakpoints = {
  mobile: "screen and (min-width: 640px)",
  tablet: "screen and (min-width: 768px)",
  desktop: "screen and (min-width: 1024px)",
  wide: "screen and (min-width: 1280px)",
};

const reset = layer("reset");

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
