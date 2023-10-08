import { ChakraTheme, extendTheme } from "@chakra-ui/react";

import { menuTheme } from "./menuTheme";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },

  fonts: {
    heading: `
  var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
    body: `
  var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
  },

  colors: {
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
      1200: "#031108"
    }
  },

  styles: {
    global: {
      body: {
        color: "gray.700",
        bg: "green.200",
        transitionProperty: "all",
        transitionDuration: "normal"
      }
    }
  },

  components: {
    Input: {
      sizes: {
        xl: {
          field: {
            fontSize: "4xl",
            py: 2,
            px: 6,
            borderRadius: 0
          }
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: 0
      }
    },
    Link: {
      baseStyle: {
        color: "gray.800",
        _hover: {
          color: "green.700",
          textDecoration: "none"
        },
        _focus: {
          color: "green.800",
          textDecoration: "none"
        }
      }
    },
    DesktopNavlink: {
      baseStyle: {
        color: "gray.900",
        height: "100%",
        fontSize: "xl",
        fontWeight: "500",
        justifyContent: "center",
        textTransform: "capitalize",
        alignItems: "center",
        width: "100px",
        cursor: "pointer",
        transition: "0.1s linear",
        _hover: { textDecoration: "none", bgColor: "green.400" }
      }
    },
    MobileNavlink: {
      baseStyle: {
        color: "gray.700",
        marginX: 2,
        padding: 7,
        fontSize: "2xl",
        textAlign: "left",
        borderBottom: "2px",
        textTransform: "capitalize",
        alignItems: "center",
        borderColor: "gray.300"
      }
    },
    CustomButton: {
      baseStyle: {
        color: "gray.800",
        bgColor: "green.400",
        fontWeight: 600,
        _hover: { bgColor: "green.600", color: "gray.800" },
        _active: {
          bgColor: "green.600",
          color: "gray.800"
        }
      }
    },
    Menu: menuTheme,
    PaginationButton: {
      baseStyle: {
        color: "gray.800",
        bgColor: "transparent",
        borderRadius: "0",
        fontWeight: 400,
        fontSize: "md",
        width: "25%",
        _hover: { bgColor: "green.400" },
        _active: {
          bgColor: "green.600"
        }
      }
    }
  }
}) as ChakraTheme;
