import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "light",
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
  },
  DesktopNavlink: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark"? "gray.100" : "gray.800",
      height:"100%",
      fontSize:"xl",
      justifyContent:"center",
      alignItems:"center",
      borderLeft:"1px",
      borderColor: colorMode === "dark"? "gray.600" : "gray.300",
      width:40,
      transition:"0.1s linear",
      _hover:{ textDecoration: "none", bgColor: "cyan.600", color: "gray.50" }
    }),
  },
  MobileNavlink: {
    baseStyle: ({ colorMode }) => ({
      color: colorMode === "dark"? "gray.100" : "gray.700",
      marginX:2,
      padding:7,
      fontSize:"2xl",
      textAlign:"left",
      borderBottom:"2px",
      borderColor: colorMode === "dark"? "gray.600" : "gray.300",
    })
  },
}

export default extendTheme({ config, colors, components })