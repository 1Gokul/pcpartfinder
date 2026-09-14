import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("Mona Sans Variable", {
  src: "url(@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2) format('woff2-variations')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  fontWeight: "500 800",
  fontDisplay: "swap",
  fontStyle: "normal",
});

globalFontFace("Martian Mono Variable", {
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "600 700",
  src: "url(@fontsource-variable/martian-mono/files/martian-mono-latin-wght-normal.woff2) format('woff2-variations')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
});

