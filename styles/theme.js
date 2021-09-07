import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true
}

const colors ={
  "cyan": {
    50: "#d7f8ff",
    100: "#aaf7ff",
    200: "#7af7ff",
    300: "#48fcff",
    400: "#1afffb",
    500: "#00e6da",
    600: "#00b1b3",
    700: "#007781",
    800: "#00434e",
    900: "#00181c",
  }
}


const components = {
  Input:{
    sizes: {
      xl: {
        field:{
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
      borderRadius: 0,
    },
    variants: {
      search: {
        padding: 10,
        bgColor: "gray.100",
        fontSize: "2xl",
      }
    }
  },
}

export default extendTheme({ config, colors, components })