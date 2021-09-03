import { Flex, Heading } from "@chakra-ui/react"
import Header from "./Header"

const Layout = props => (
  <Flex direction="column" margin="0 auto" height="100vh">
    <Header />
    {props.children}
  </Flex>
)

export default Layout
