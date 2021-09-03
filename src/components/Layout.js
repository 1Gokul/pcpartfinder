import { Flex, Heading } from "@chakra-ui/react"

const Layout = props => (
  <Flex direction="column" margin="0 auto" height="100vh">
    <Header />
    {props.children}
  </Flex>
)

const Header = () => (
  <Flex justifyContent="space-between" padding={{ base: 5, md: 6 }}>
    <Heading fontSize="4xl">PCPartFinder</Heading>
  </Flex>
)

export default Layout

