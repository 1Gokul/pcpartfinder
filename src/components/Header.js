import { VscMenu, VscClose } from "react-icons/vsc"
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [expanded, setExpanded] = useState (false)
  const { colorMode, toggleColorMode } = useColorMode ()

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  const navLinks = [
    { name: "search", link: "/" },
    { name: "set alert", link: "/set-alert" },
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
        <DesktopNavMenu
          navLinks={navLinks}
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <NavMenuToggler toggleExpanded={toggleExpanded} expanded={expanded} />
      </Flex>
      <MobileNavMenu navLinks={navLinks} expanded={expanded} />
    </Flex>
  )
}

export default Header

const NavLink = props => (
  <Flex {...props}>
    <Flex textTransform="capitalize">
      {props.name}
    </Flex>
  </Flex>
)

const DesktopNavMenu = props => {
  const styles = useStyleConfig ("DesktopNavlink")

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
      {props.navLinks.map (navLink => (
        <Link key={navLink.name} href={navLink.link} passHref>
          <NavLink sx={styles} {...navLink} as="button" />
        </Link>
      ))}
      <NavLink
        sx={styles}
        as="button"
        borderRight="1px"
        name={props.colorMode}
        onClick={props.toggleColorMode}
      />
    </Flex>
  )
}

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
