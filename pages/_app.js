import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../styles/theme"

function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default App
