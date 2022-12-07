// Desktop Navbar Menu

import {
  SystemStyleObject,
  useStyleConfig,
  Flex,
  Icon,
  useColorMode
} from "@chakra-ui/react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { navLinks } from "../../../shared/constants/NavLinks";
import { NavLink } from "./NavLink";

const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%" marginRight={10}>
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} styles={styles} url={navLink.url}>
          {navLink.text}
        </NavLink>
      ))}
      <Flex sx={styles} borderRight="1px" onClick={toggleColorMode}>
        {colorMode}
        <Icon
          as={colorMode === "dark" ? IoMoonSharp : IoSunnySharp}
          marginLeft={2}
        />
      </Flex>
    </Flex>
  );
};

export default DesktopNavMenu;
