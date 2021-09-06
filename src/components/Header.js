import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Button, ButtonGroup, Flex, Heading, IconButton } from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [expanded, setExpanded] = useState (false)

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  const navLinks = [
    { name: "Search", link: "/" },
    { name: "Set Alert", link: "/set-alert" },
  ]
  return (
    <Flex direction="column">
      <Flex
        justifyContent="space-between"
        padding={{ base: 5, md: 14 }}
        alignItems="center"
      >
        <Heading fontSize="4xl">PCPartFinder</Heading>
        <DesktopNavMenu navLinks={navLinks} />
        <NavMenuToggler toggleExpanded={toggleExpanded} expanded={expanded} />
      </Flex>
      <MobileNavMenu navLinks={navLinks} expanded={expanded} />
    </Flex>
  )
}

export default Header

const NavLink = props => (
  <Link href={props.link} passHref>
    <Button {...props}>{props.name}</Button>
  </Link>
)

const DesktopNavMenu = ({ navLinks }) => (
  <ButtonGroup
    display={{ base: "none", md: "flex" }}
    spacing={28}
    marginRight={10}
  >
    {navLinks.map (navLink => (
      <NavLink
        key={navLink.name}
        {...navLink}
        variant="link"
        fontSize="lg"
        color="black"
        _hover={{ textDecoration: "none" }}
      />
    ))}
  </ButtonGroup>
)

const NavMenuToggler = props => (
  <IconButton
    display={{ base: "block", md: "none" }}
    variant="ghost"
    icon={props.expanded ? <CloseIcon /> : <HamburgerIcon w={7} h={7} />}
    onClick={props.toggleExpanded}
  />
)

const MobileNavMenu = props => (
  <Flex
    direction="column"
    height="100vh"
    marginTop={10}
    display={{ base: props.expanded ? "flex" : "none", md: "none" }}
  >
    {props.navLinks.map (navLink => (
      <NavLink
        key={navLink.name}
        {...navLink}
        variant="outline"
        padding={10}
        fontSize="2xl"
        textAlign="left"
      />
    ))}
  </Flex>
)
