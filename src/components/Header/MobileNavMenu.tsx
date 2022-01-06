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
  padding: 25px;
  text-align: left;
  font-size: larger;
  align-items: center;
  font-weight: 500;
  background-color: transparent;
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
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      margin-top: 7rem;
      z-index: 1;
      background-color: var(--color-bg-primary-translucent);

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
      z-index: 2;
      ${mq["md"]} {
        display: none;
      }
    `}
    onClick={toggleExpanded}
  >
    {expanded ? <VscClose size={40} /> : <VscMenu size={40} />}
  </Button>
);
