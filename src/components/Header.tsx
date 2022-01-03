// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.svg";
import { Flex } from "./LayoutComponents";
import { mq } from "../../styles/styleConfig";
import { css, SerializedStyles } from "@emotion/react";
import ThemeToggler from "./themeToggler";

// Links on the navbar
const navLinks: Array<{ text: string; url: string }> = [
  { text: "search", url: "/" },
  { text: "browse", url: "/products" }
];

const Header: React.FC = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  // For opening and closing the hamburger menu
  // const [expanded, setExpanded] = useState<boolean>(false);

  // const toggleExpanded = () => {
  //   document.body.style.overflow = !expanded ? "hidden" : "visible";
  //   setExpanded(!expanded);
  // };

  return (
    <Flex
      css={css`
        flex-direction: column;
      `}
    >
      <Flex
        css={css`
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border-gray);
          ${mq["sm"]} {
            padding-right: 50px;
            height: 12vh;
          }
          ${mq["md"]} {
            height: 20vh;
          }
        `}
      >
        {/* Logo */}
        <Flex
          css={css`
            padding: 0 40px;
          `}
        >
          <Link href="/" passHref>
            <a>
              <Flex
                css={css`
                  ${mq["sm"]} {
                    width: 200px;
                  }
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
      </Flex>
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
        css={css`
          ${styles}
          align-items: center;
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
    width: 150px;
    cursor: pointer;
    transition: 0.1s linear;
    &:hover {
      text-decoration: none;
      background-color: #00b1b3;
      color: white;
    }
  `;

  return (
    <Flex
      css={css`
        margin-right: 50px;
        height: 100%;
        ${mq["sm"]} {
          display: none;
        }

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
      <ThemeToggler styles={desktopNavlinkStyles} />
    </Flex>
  );
};

// // Mobile Navbar
// interface MobileNavProps extends NavbarProps {
//   expanded: boolean;
// }

// const MobileNavMenu: React.FC<MobileNavProps> = (props) => {
//   const styles: CSSObject = useStyleConfig("MobileNavlink");

//   return (
//     <Flex
//       direction="column"
//       height="100vh"
//       display={{ base: props.expanded ? "flex" : "none", md: "none" }}
//       borderBottom="1px"
//       borderColor="gray.200"
//     >
//       {navLinks.map((navLink) => (
//         <NavLink key={navLink.text} url={navLink.url} styles={styles}>
//           {navLink.text}
//         </NavLink>
//       ))}

//       <Flex sx={styles} onClick={props.toggleColorMode}>
//         {props.colorMode}
//         <Icon
//           as={props.colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
//           marginLeft={2}
//         />
//       </Flex>
//     </Flex>
//   );
// };

// // Mobile menu toggler
// interface HamburgerProps {
//   expanded: boolean;
//   toggleExpanded: () => void;
// }

// const HamburgerMenuToggler: React.FC<HamburgerProps> = (props) => (
//   <IconButton
//     aria-label="Click this button to toggle the menu."
//     display={{ base: "flex", md: "none" }}
//     variant="ghost"
//     fontSize="40px"
//     icon={props.expanded ? <VscClose /> : <VscMenu />}
//     onClick={props.toggleExpanded}
//   />
// );
