import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"


const Header = () => {
  const navLinks = [
    { name: "Search", link: "/" },
    { name: "Set Alert", link: "/set-alert" },
  ]
  return (
    <Flex justifyContent="space-between" padding={{ base: 5, md: 14 }}>
      <Heading fontSize="4xl">PCPartFinder</Heading>
      <DesktopNavMenu navLinks={navLinks}/>
    </Flex>
  )
}

export default Header

const NavLink = props => (
  <Link href={props.link} passHref>
    <Button variant="link" fontSize="lg" color="black" _hover={{ textDecoration: "none" }}>{props.name}</Button>
  </Link>
)

const DesktopNavMenu = ({ navLinks }) => (
  <ButtonGroup display={{ base:"none", md: "flex" }} spacing={28} marginRight={10}>
    {navLinks.map(navLink =>
      <NavLink key={navLink.name} {...navLink} />)}
  </ButtonGroup>
)