import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
};

const fonts = {
  heading: `
    InterVariable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`,
  body: `
  InterVariable,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol`
};

const colors = {
  cyan: {
    50: "#d7f8ff",
    100: "#aaf7ff",
    200: "#7af7ff",
    300: "#48fcff",
    400: "#1afffb",
    500: "#00e6da",
    600: "#00b1b3",
    700: "#007781",
    800: "#00434e",
    900: "#00181c"
  }
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "#FCF7F8")(props),
      bg: mode("#F3F4F7", "#001114")(props),
      transition: "all 0.2s linear"
    }
  })
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
    baseStyle: (props) => ({
      color: props.colorMode == "dark" ? "gray.100" : "gray.800",
      _hover: {
        color: "cyan.500",
        textDecoration: "none"
      }
    })
  },
  DesktopNavlink: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.100" : "gray.800",
      height: "100%",
      fontSize: "xl",
      justifyContent: "center",
      textTransform: "capitalize",
      alignItems: "center",
      borderLeft: "1px",
      borderColor: colorMode === "dark" ? "gray.600" : "gray.300",
      width: 40,
      cursor: "pointer",
      transition: "0.1s linear",
      _hover: { textDecoration: "none", bgColor: "cyan.600", color: "gray.50" }
    })
  },
  MobileNavlink: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.100" : "gray.700",
      marginX: 2,
      padding: 7,
      fontSize: "2xl",
      textAlign: "left",
      borderBottom: "2px",
      textTransform: "capitalize",
      alignItems: "center",
      borderColor: colorMode === "dark" ? "gray.600" : "gray.300"
    })
  },
  CustomButton: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark" ? "gray.200" : "gray.800",
      bgColor: colorMode === "dark" ? "cyan.800" : "cyan.500",
      _hover: { bgColor: "cyan.600", color: "gray.50" },
      _active: {
        bgColor: "cyan.700",
        color: "gray.100"
      }
    })
  }
};

export default extendTheme({ colors, config, components, fonts, styles });
