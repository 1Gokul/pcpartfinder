import { VscMenu, VscClose } from "react-icons/vsc"
import { Flex, Heading, IconButton } from "@chakra-ui/react"
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
        height={{ base: "10vh", md: "20vh" }}
        paddingX={{ base: 6, md: 12 }}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.300"
        //todo fixed header
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
    <Flex {...props}>
      <Flex>
        {props.name}
      </Flex>
    </Flex>
  </Link>
)

const DesktopNavMenu = ({ navLinks }) => (
  <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
    {navLinks.map ((navLink, index) => (
      <NavLink
        key={navLink.name}
        {...navLink}
        as="button"
        height="100%"
        fontSize="xl"
        color="black"
        justifyContent="center"
        alignItems="center"
        borderLeft="1px"
        borderRight={index + 1 === navLinks.length ? "1px" : "0"}
        borderColor="gray.300"
        width={40}
        transition="0.1s linear"
        _hover={{ textDecoration: "none", bgColor: "gray.800", color: "gray.50" }}
      />
    ))}
  </Flex>
)

const NavMenuToggler = props => (
  <IconButton
    display={{ base: "flex", md: "none" }}
    variant="ghost"
    fontSize="40px"
    icon={props.expanded ? <VscClose /> : <VscMenu />}
    onClick={props.toggleExpanded}
  />
)

const MobileNavMenu = props => (
  <Flex
    direction="column"
    height="100vh"
    display={{ base: props.expanded ? "flex" : "none", md: "none" }}
    borderBottom="1px"
    borderColor="gray.200"
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
