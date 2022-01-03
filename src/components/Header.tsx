import { useState } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { VscMenu, VscClose } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import logo from "../../public/logo.svg";
import { Button, Flex } from "./LayoutComponents";
import { mq } from "../../styles/styleConfig";

// Import the theme toggler without SSR
// https://electricanimals.com/articles/next-js-dark-mode-toggle
const ThemeToggler = dynamic(() => import("./ThemeToggler"), {
  ssr: false
});

// Links on the navbar
const navLinks: Array<{ text: string; url: string }> = [
  { text: "search", url: "/" },
  { text: "browse", url: "/products" }
];

const Header: React.FC = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  // For opening and closing the hamburger menu
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        css={css`
          border-bottom: 1px solid var(--color-border-gray);
          padding-right: 20px;
          height: 12vh;

          ${mq["md"]} {
            padding-right: 10px;
            height: 20vh;
          }
        `}
      >
        {/* Logo */}
        <Flex padding="0 40px">
          <Link href="/" passHref>
            <a>
              <Flex
                css={css`
                  width: 200px;

                  ${mq["md"]} {
                    width: 300px;
                  }
                `}
              >
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
        </Flex>
        <DesktopNavMenu />
        <HamburgerMenuToggler
          toggleExpanded={toggleExpanded}
          expanded={expanded}
        />
      </Flex>
      <MobileNavMenu expanded={expanded} />
    </Flex>
  );
};

export default Header;

// Navlink
interface NavLinkProps {
  // Styles for the link
  styles: SerializedStyles;

  url: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, url, styles } = props;

  return (
    <Link href={url} passHref>
      <Flex
        alignItems="center"
        css={css`
          ${styles}
          text-transform: capitalize;
        `}
      >
        {children}
      </Flex>
    </Link>
  );
};

// Desktop Navbar Menu
const DesktopNavMenu: React.FC = () => {
  const desktopNavlinkStyles = css`
    height: 100%;
    font-size: larger;
    justify-content: center;
    align-items: center;
    border-left: 1px solid var(--color-border-gray);
    width: 160px;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      background-color: #00b1b3;
      color: white;
    }
  `;

  return (
    <Flex
      margin="0 50px 0 0"
      display="none"
      css={css`
        height: 100%;

        ${mq["md"]} {
          display: flex;
        }
      `}
    >
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.text}
          styles={desktopNavlinkStyles}
          url={navLink.url}
        >
          {navLink.text}
        </NavLink>
      ))}
      <ThemeToggler
        styles={css`
          ${desktopNavlinkStyles}
          border-right: 1px solid var(--color-border-gray);
        `}
      />
    </Flex>
  );
};

// Mobile Navbar
interface MobileNavProps {
  expanded: boolean;
}

const MobileNavMenu: React.FC<MobileNavProps> = ({ expanded }) => {
  const mobileNavMenuStyles = css`
    margin: 0 10px;
    padding: 50px;
    text-align: left;
    font-size: larger;
    align-items: center;
  `;

  return (
    <Flex
      display={expanded ? "flex" : "none"}
      flexDirection="column"
      css={css`
        height: 100vh;

        ${mq["md"]} {
          display: none;
        }
      `}
    >
      {navLinks.map((navLink) => (
        <NavLink
          key={navLink.text}
          url={navLink.url}
          styles={mobileNavMenuStyles}
        >
          {navLink.text}
        </NavLink>
      ))}

      <ThemeToggler styles={mobileNavMenuStyles} />
    </Flex>
  );
};

// Mobile menu toggler
interface HamburgerProps {
  expanded: boolean;
  toggleExpanded: () => void;
}

const HamburgerMenuToggler: React.FC<HamburgerProps> = (props) => (
  <Button
    aria-label="Click this button to toggle the menu."
    css={css`
      ${mq["md"]} {
        display: none;
      }
    `}
    onClick={props.toggleExpanded}
  >
    {props.expanded ? <VscClose size={40} /> : <VscMenu size={40} />}
  </Button>
);
