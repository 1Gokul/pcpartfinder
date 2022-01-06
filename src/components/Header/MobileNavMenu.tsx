import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { VscMenu, VscClose } from "react-icons/vsc";

import { mq } from "../../../styles/styleConfig";
import { NavLink } from "../LayoutComponents";
import { Button, Flex } from "../StyledComponents";

// Import the theme toggler without SSR
// https://electricanimals.com/articles/next-js-dark-mode-toggle
const ThemeToggler = dynamic(() => import("../ThemeToggler"), {
  ssr: false
});

const mobileNavMenuStyles = css`
  margin: 0 10px;
  padding: 35px 50px;
  text-align: left;
  font-size: larger;
  align-items: center;
`;

// Mobile Navbar
type MobileNavProps = {
  expanded: boolean;
  pageLinks: Array<{ text: string; url: string }>;
};

const MobileNavMenu = ({ expanded, pageLinks }: MobileNavProps) => (
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
    {pageLinks.map((pageLink) => (
      <NavLink
        key={pageLink.text}
        url={pageLink.url}
        styles={mobileNavMenuStyles}
      >
        {pageLink.text}
      </NavLink>
    ))}

    <ThemeToggler styles={mobileNavMenuStyles} />
  </Flex>
);

export default MobileNavMenu;

// Mobile menu toggler
type HamburgerProps = {
  expanded: boolean;
  toggleExpanded: () => void;
};

export const HamburgerMenuToggler = ({
  expanded,
  toggleExpanded
}: HamburgerProps) => (
  <Button
    aria-label="Click this button to toggle the menu."
    css={css`
      ${mq["md"]} {
        display: none;
      }
    `}
    onClick={toggleExpanded}
  >
    {expanded ? <VscClose size={40} /> : <VscMenu size={40} />}
  </Button>
);
