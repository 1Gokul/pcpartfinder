import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
  layer,
} from "@vanilla-extract/css";

const reset = layer("reset");

globalFontFace("Mona Sans Variable", {
  src: "url(@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2) format('woff2-variations')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  fontWeight: "300 900",
  fontDisplay: "swap",
  fontStyle: "normal",
});

export const { colors, font } = createGlobalTheme(":root", {
  colors: {
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
  },
  font: {
    base: "Mona Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
});

globalStyle("body", {
  fontFamily: font.base,
  backgroundColor: colors.green200,
  color: colors.green1200,
  margin: 0,
});

export const breakpoints = {
  mobile: "screen and (min-width: 640px)",
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

const customConfig = {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
        },
        body: {
          value: `var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
        },
      },
      colors: {
        green: {
          50: { value: "#EEFCF3" },
          100: { value: "#DCF9E6" },
          200: { value: "#CBF6DA" },
          300: { value: "#B9F3CE" },
          400: { value: "#A8F0C2" },
          500: { value: "#85EAAA" },
          600: { value: "#73E79E" },
          700: { value: "#1EAE53" },
          800: { value: "#188C42" },
          900: { value: "#126932" },
          1000: { value: "#0C4621" },
          1100: { value: "#093419" },
          1200: { value: "#031108" },
        },
      },
    },
    semanticTokens: {
      colors: {
        body: {
          value: "{colors.gray.700}",
        },
        bg: {
          value: "{colors.green.200}",
        },
      },
    },
    recipes: {
      input: {
        variants: {
          size: {
            xl: {
              root: {
                fontSize: "4xl",
                py: "2",
                px: "6",
                borderRadius: "0",
              },
            },
          },
        },
      },
      button: {
        base: {
          borderRadius: 0,
        },
      },
      link: {
        base: {
          color: "gray.800",
          _hover: {
            color: "green.700",
            textDecoration: "none",
          },
          _focus: {
            color: "green.800",
            textDecoration: "none",
          },
        },
      },
      desktopNavlink: {
        base: {
          color: "gray.900",
          height: "100%",
          fontSize: "xl",
          fontWeight: "500",
          justifyContent: "center",
          alignItems: "center",
          width: "100px",
          cursor: "pointer",
          transition: "0.1s linear",
          _hover: { textDecoration: "none", bgColor: "green.400" },
        },
      },
      mobileNavlink: {
        base: {
          color: "gray.700",
          marginX: 2,
          padding: 7,
          fontSize: "2xl",
          textAlign: "left",
          borderBottom: "2px",
          textTransform: "capitalize",
          alignItems: "center",
          borderColor: "gray.300",
        },
      },
      customButton: {
        base: {
          color: "gray.800",
          bgColor: "green.400",
          fontWeight: 600,
          _hover: { bgColor: "green.600", color: "gray.800" },
          _active: {
            bgColor: "green.600",
            color: "gray.800",
          },
        },
      },
      paginationButton: {
        base: {
          color: "gray.800",
          bgColor: "transparent",
          borderRadius: "0",
          fontWeight: 400,
          fontSize: "md",
          width: "25%",
          _hover: { bgColor: "green.400" },
          _active: {
            bgColor: "green.600",
          },
        },
      },
    },
  },
  globalCss: {
    body: {
      color: "body",
      bg: "bg",
      transitionProperty: "all",
      transitionDuration: "normal",
    },
    "g.visx-axis-tick text": {
      fontFamily: "var(--font-base)",
      fontWeight: 500,
    },
  },
};
