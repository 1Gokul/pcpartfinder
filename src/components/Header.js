import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react"
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
    <Box {...props}>{props.name}</Box>
  </Link>
)

const DesktopNavMenu = ({ navLinks }) => (
  <Flex
    display={{ base: "none", md: "flex" }}
    justifyContent="space-between"
    flexGrow={0.1}
    marginRight={10}
  >
    {navLinks.map (navLink => (
      <NavLink
        key={navLink.name}
        {...navLink}
        as="button"
        fontSize="xl"
        color="black"
        _hover={{ textDecoration: "none" }}
      />
    ))}
  </Flex>
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
    marginTop={5}
    display={{ base: props.expanded ? "flex" : "none", md: "none" }}
  >
    {props.navLinks.map (navLink => (
      <NavLink
        key={navLink.name}
        {...navLink}
        marginX={2}
        padding={7}
        fontSize="2xl"
        textAlign="left"
        borderBottom="2px"
        borderColor="gray.700"
      />
    ))}
  </Flex>
)
