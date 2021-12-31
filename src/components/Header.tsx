import { useState } from "react";
import {
  CSSObject,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useStyleConfig
} from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";

// Links on the navbar
const navLinks: Array<{ text: string; url: string }> = [
  { text: "search", url: "/" },
  { text: "browse", url: "/products" }
];

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // For opening and closing the hamburger menu
  const [expanded, setExpanded] = useState<boolean>(false);

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
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
        <HamburgerMenuToggler
          toggleExpanded={toggleExpanded}
          expanded={expanded}
        />
      </Flex>

      <MobileNavMenu
        expanded={expanded}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;

// Navlink
interface NavLinkProps {
  // Theme styles for the link
  styles: CSSObject;

  // extra styles (if any)
  [otherProps: string]: unknown;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, url, styles, ...otherProps } = props;

  return (
    <Link href={url} passHref>
      <a>
        <Flex
          sx={styles}
          textTransform="capitalize"
          alignItems="center"
          {...otherProps}
        >
          {children}
        </Flex>
      </a>
    </Link>
  );
};

interface NavbarProps {
  colorMode: "light" | "dark";
  toggleColorMode: () => void;
}

// Desktop Navbar Menu

const DesktopNavMenu: React.FC<NavbarProps> = (props) => {
  const styles: CSSObject = useStyleConfig("DesktopNavlink");

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} styles={styles} url={navLink.url}>
          {navLink.text}
        </NavLink>
      ))}
      <Flex sx={styles} borderRight="1px" onClick={props.toggleColorMode}>
        {props.colorMode}
        <Icon
          as={props.colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
          marginLeft={2}
        />
      </Flex>
    </Flex>
  );
};

// Mobile Navbar
interface MobileNavProps extends NavbarProps {
  expanded: boolean;
}

const MobileNavMenu: React.FC<MobileNavProps> = (props) => {
  const styles: CSSObject = useStyleConfig("MobileNavlink");

  return (
    <Flex
      direction="column"
      height="100vh"
      display={{ base: props.expanded ? "flex" : "none", md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} url={navLink.url} styles={styles}>
          {navLink.text}
        </NavLink>
      ))}

      <Flex sx={styles} onClick={props.toggleColorMode}>
        {props.colorMode}
        <Icon
          as={props.colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
          marginLeft={2}
        />
      </Flex>
    </Flex>
  );
};

// Mobile menu toggler
interface HamburgerProps {
  expanded: boolean;
  toggleExpanded: () => void;
}

const HamburgerMenuToggler: React.FC<HamburgerProps> = (props) => (
  <IconButton
    aria-label="Click this button to toggle the menu."
    display={{ base: "flex", md: "none" }}
    variant="ghost"
    fontSize="40px"
    icon={props.expanded ? <VscClose /> : <VscMenu />}
    onClick={props.toggleExpanded}
  />
);
