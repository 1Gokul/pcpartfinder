import { extendTheme } from "@chakra-ui/react"


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

export default extendTheme({ components })