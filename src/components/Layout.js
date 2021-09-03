import { Flex } from "@chakra-ui/react"
import Header from "./Header"

const Layout = props => (
  <Flex direction="column" margin="0 auto" height="100vh">
    <Header />
    {props.children}
  </Flex>
)

export default Layout

export const Container = props => (
  <Flex direction="column" marginX="auto"  marginTop={10} minH="90vh" minW="70vw" maxW={{ base:"95vw", md: "75vw" }} padding={{ base:5, md: 10 }}>
    {props.children}
  </Flex>
)