// Desktop Navbar Menu

import { SystemStyleObject, useStyleConfig, Flex } from "@chakra-ui/react";

import { NavLink } from "./NavLink";
import { navLinks } from "../../../constants/navLinks";

export const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%">
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} styles={styles} url={navLink.url}>
          {navLink.text}
        </NavLink>
      ))}
    </Flex>
  );
};
