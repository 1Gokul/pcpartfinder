import { Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"

const Layout = props => (
  <Flex direction="column" margin="0 auto" height="100vh">
    <Header />
    {props.children}
  </Flex>
)

const Header = () => {
  const navLinks = [
    { name: "Search", link: "/" },
    { name: "Set Alert", link: "/set-alert" },
  ]
  return (
    <Flex justifyContent="space-between" padding={{ base: 5, md: 6 }}>
      <Heading fontSize="4xl">PCPartFinder</Heading>
      <Flex>
        {navLinks.map(navLink =>
          <Link key={navLink.name} href={navLink.link}>{navLink.name}</Link>)}
      </Flex>
    </Flex>
  )
}

export default Layout
