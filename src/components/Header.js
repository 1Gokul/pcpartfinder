import { useState } from "react";
import {
  Flex,
  Icon,
  IconButton,
  LinkBox,
  LinkOverlay,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";


// Links on the navbar
const navLinks = [
  { name: "search", link: "/" },
  { name: "products", link: "/products" },
];


const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  // For opening and closing the hamburger menu
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };

  return (
    <Flex direction="column">
      <Flex
        justifyContent="space-between"
        paddingRight={5}
        height={{ base: "12vh", md: "20vh" }}
        alignItems="center"
        borderBottom="1px"
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      >
        {/* Logo */}
        <Link href="/" passHref>
          <a>
            <Flex marginX={10} width={{ base: "200px", md: "300px" }}>
              <Image
                src={logo}
                alt="pcpartfinder logo"
                placeholder="blur"
                blurDataURL={logo}
                priority={true}
              />

            </Flex>
          </a>
        </Link>

        <DesktopNavMenu
          navLinks={navLinks}
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <HamburgerMenuToggler toggleExpanded={toggleExpanded} expanded={expanded} />
      </Flex>

      <MobileNavMenu
        navLinks={navLinks}
        expanded={expanded}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;



const NavLink = props => (
  <Flex {...props}>
    <Flex textTransform="capitalize" alignItems="center">
      {props.children}
    </Flex>
  </Flex>
);

const DesktopNavMenu = props => {
  const styles = useStyleConfig("DesktopNavlink");

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
      {props.navLinks.map(navLink => (
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
  );
};

const MobileNavMenu = props => {
  const styles = useStyleConfig("MobileNavlink");

  return (
    <Flex
      direction="column"
      height="100vh"
      display={{ base: props.expanded ? "flex" : "none", md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {props.navLinks.map(navLink => (
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
  );
};

const HamburgerMenuToggler = props => (
  <IconButton
    display={{ base: "flex", md: "none" }}
    variant="ghost"
    fontSize="40px"
    icon={props.expanded ? <VscClose /> : <VscMenu />}
    onClick={props.toggleExpanded}
  />
);

