import { extendTheme } from "@chakra-ui/react"


const components = {
  Input:{
    sizes: {
      xl: {
        field:{
          fontSize: "4xl",
          py: 2
        }
      }
    }
  }
}

export default extendTheme({ components })