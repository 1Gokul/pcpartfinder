// Desktop Navbar Menu

import {
  SystemStyleObject,
  useStyleConfig,
  Flex,
  Icon,
  useColorMode
} from "@chakra-ui/react";
import { navLinks } from "../../../constants/NavLinks";
import { NavLink } from "./NavLink";

const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  const { colorMode, toggleColorMode } = useColorMode();

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

export default DesktopNavMenu;
