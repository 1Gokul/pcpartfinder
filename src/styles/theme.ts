import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { menuTheme } from "./menuTheme";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const fonts = {
  heading: `
  var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
  var(--font-base),-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
};

const colors = {
  aqua: {
    50: "#EBFFFF",
    100: "#D6FFFF",
    200: "#C2FFFF",
    300: "#ADFFFF",
    400: "#99FFFF",
    500: "#85FFFF",
    600: "#70FFFF",
    700: "#1FFFFF",
    800: "#00F5F5",
    900: "#00CCCC",
    1000: "#00A3A3",
    1100: "#007A7A",
    1200: "#005252"
  },
  green: {
    50: "#EBFFF5",
    100: "#D6FFEC",
    200: "#C2FFE3",
    300: "#85FFC6",
    400: "#70FFBC",
    500: "#6dfdbb",
    600: "#5CFFB3",
    700: "#33FFA0",
    800: "#0AFF8D",
    900: "#0AFF8D",
    1000: "#00A357",
    1100: "#006636",
    1200: "#006636"
  }
};

const styles = {
  global: {
    body: {
      color: "gray.700",
      bg: "aqua.200",
      transitionProperty: "all",
      transitionDuration: "normal"
    }
  }
};

const components = {
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
        color: "aqua.500",
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
      _hover: { textDecoration: "none", bgColor: "aqua.400" }
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
      bgColor: "aqua.400",
      fontWeight: 600,
      _hover: { bgColor: "aqua.600", color: "gray.800" },
      _active: {
        bgColor: "aqua.700",
        color: "gray.800"
      }
    }
  },
  Menu: menuTheme,
  PaginationButton: {
    baseStyle: {
      color: "gray.800",
      bgColor: "transparent",
      borderRadius: "50%",
      fontWeight: 400,
      fontSize: "md",
      width: "25%",
      _hover: { bgColor: "aqua.400" },
      _active: {
        bgColor: "aqua.600",
      }
    }
  },
};

export default extendTheme({ colors, config, components, fonts, styles });
