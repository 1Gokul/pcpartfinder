
import {
  Flex,
  Icon,
  IconButton,
  LinkBox,
  LinkOverlay,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react"
import { VscMenu, VscClose } from "react-icons/vsc"
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5"
import Image from "next/image"
import { useState } from "react"

import logo from "../../public/logo.svg"

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
        paddingRight={5}
        height={{ base: "13vh", md: "20vh" }}
        alignItems="center"
        borderBottom="1px"
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      >
        <Flex marginX={10} height={{ base: "35px", md:   "75px" }} width={{ base: "200px", md:"300px" }}>
          <Image src={logo} alt="pcpartfinder logo"/>
        </Flex>

        <DesktopNavMenu
          navLinks={navLinks}
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <NavMenuToggler toggleExpanded={toggleExpanded} expanded={expanded} />
      </Flex>
      <MobileNavMenu
        navLinks={navLinks}
        expanded={expanded}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
    </Flex>
  )
}

export default Header

const NavLink = props => (
  <Flex {...props}>
    <Flex textTransform="capitalize" alignItems="center">
      {props.children}
    </Flex>
  </Flex>
)

const DesktopNavMenu = props => {
  const styles = useStyleConfig ("DesktopNavlink")

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
      {props.navLinks.map (navLink => (
        <LinkBox key={navLink.name}>
          <NavLink sx={styles} {...navLink} as="button">
            <LinkOverlay href={navLink.link}>
              {navLink.name}
            </LinkOverlay>
          </NavLink>
        </LinkBox>
      ))}
      <NavLink
        sx={styles}
        as="button"
        borderRight="1px"
        onClick={props.toggleColorMode}
      >
        {props.colorMode}
        <Icon
          as={props.colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
          marginLeft={2}
        />
      </NavLink>
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

const MobileNavMenu = props => {
  const styles = useStyleConfig ("MobileNavlink")

  return (
    <Flex
      direction="column"
      height="100vh"
      display={{ base: props.expanded ? "flex" : "none", md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {props.navLinks.map (navLink => (
        <NavLink key={navLink.name} {...navLink} sx={styles}>
          {navLink.name}
        </NavLink>
      ))}

      <NavLink sx={styles} onClick={props.toggleColorMode}>
        {props.colorMode}
        <Icon
          as={props.colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
          marginLeft={2}
        />
      </NavLink>
    </Flex>
  )
}
