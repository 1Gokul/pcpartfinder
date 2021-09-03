import { Flex } from "@chakra-ui/react"
import Header from "./Header"

const Layout = props => (
  <Flex direction="column" margin="0 auto">
    <Header />
    {props.children}
  </Flex>
)

export default Layout

export const Container = props => (
  <Flex direction="column" marginX="auto"  marginTop={5} minH="75vh" minW="70vw" maxW={{ base:"95vw", md: "75vw" }} padding={{ base: 5, md: 10 }}>
    {props.children}
  </Flex>
)