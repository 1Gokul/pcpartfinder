import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import Header from "./Header"

const Layout = props => (
  <Flex direction="column" margin="0 auto">
    <Header />
    {props.children}
    <Footer />
  </Flex>
)

export default Layout

export const Container = props => (
  <Flex
    direction="column"
    marginX="auto"
    marginTop={5}
    minH="70vh"
    minW="70vw"
    maxW={{ base: "95vw", md: "75vw" }}
    padding={{ base: 5, md: 10 }}
    {...props}
  >
    {props.children}
  </Flex>
)

const Footer = () => (
  <Flex paddingX={10} paddingY={5} direction={{ base:"column", md:"row" }} justifyContent="space-evenly">
    <Text>
      {new Date ().getFullYear ()} Gokul Viswanath
    </Text>
    <Link href="https://github.com/1Gokul/pcpartfinder">GitHub repo</Link>
  </Flex>
)
