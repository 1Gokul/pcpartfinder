import { useState } from "react";
import { css } from "@emotion/react";

import { Flex } from "../StyledComponents";
import { mq } from "../../../styles/styleConfig";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu, { HamburgerMenuToggler } from "./MobileNavMenu";
import { Logo } from "./Logo";

const Header = () => {
  // Links on the navbar
  const pageLinks: Array<{ text: string; url: string }> = [
    { text: "search", url: "/" },
    { text: "browse", url: "/products" }
  ];

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
          padding-right: 1.25rem;
          height: 12vh;

          ${mq["md"]} {
            padding-right: 0.625rem;
            height: 20vh;
          }
        `}
      >
        <Logo />
        <DesktopNavMenu pageLinks={pageLinks} />
        <HamburgerMenuToggler
          toggleExpanded={toggleExpanded}
          expanded={expanded}
        />
      </Flex>
      <MobileNavMenu pageLinks={pageLinks} expanded={expanded} />
    </Flex>
  );
};

export default Header;
