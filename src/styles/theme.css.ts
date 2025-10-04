import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

globalFontFace("Mona Sans Variable", {
  src: "url(@fontsource-variable/mona-sans/files/mona-sans-latin-wght-normal.woff2) format('woff2-variations')",
  unicodeRange:
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  fontWeight: "300 900",
  fontDisplay: "swap",
  fontStyle: "normal",
});

export const vars = createGlobalTheme(":root", {
  color: {
    green: {
      50: "#EEFCF3",
      100: "#DCF9E6",
      200: "#CBF6DA",
      300: "#B9F3CE",
      400: "#A8F0C2",
      500: "#85EAAA",
      600: "#73E79E",
      700: "#1EAE53",
      800: "#188C42",
      900: "#126932",
      1000: "#0C4621",
      1100: "#093419",
      1200: "#031108",
    },
  },
  font: {
    base: "Mona Sans Variable, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
});

globalStyle("body", {
  fontFamily: vars.font.base,
  backgroundColor: vars.color.green[100],
  color: vars.color.green[1200]
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
