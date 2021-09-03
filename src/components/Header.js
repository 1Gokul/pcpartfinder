import { Button, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"


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
          <NavLink key={navLink.name} {...navLink} />)}
      </Flex>
    </Flex>
  )
}

export default Header

const NavLink = props => (
  <Link href={props.link} passHref>
    <Button variant="ghost">{props.name}</Button>
  </Link>
)