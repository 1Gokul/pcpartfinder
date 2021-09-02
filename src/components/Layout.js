import { Flex } from "@chakra-ui/layout"

const Layout = props => (
  <Flex direction="column" margin="0 auto">
    {props.children}
  </Flex>
)

export default Layout

