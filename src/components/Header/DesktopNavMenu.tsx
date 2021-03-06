import { css } from "@emotion/react";
import dynamic from "next/dynamic";

import { mq } from "../../../styles/styleConfig";
import { NavLink } from "../LayoutComponents";
import { Flex } from "../StyledComponents";

// Import the theme toggler without SSR
// https://electricanimals.com/articles/next-js-dark-mode-toggle
const ThemeToggler = dynamic(() => import("../ThemeToggler"), {
  ssr: false
});

const desktopNavlinkStyles = css`
  height: 100%;
  font-size: larger;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--color-border-gray);
  width: 10rem;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    background-color: #00b1b3;
    color: white;
  }
`;

type desktopMenuProps = {
  pageLinks: Array<{ text: string; url: string }>;
};

// Desktop Navbar Menu
const DesktopNavMenu = ({ pageLinks }: desktopMenuProps) => (
  <Flex
    margin="0 3.125rem 0 0"
    display="none"
    css={css`
      height: 100%;

      ${mq["md"]} {
        display: flex;
      }
    `}
  >
    {pageLinks.map((navLink) => (
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

export default DesktopNavMenu;
