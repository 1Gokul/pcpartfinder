// Desktop Navbar Menu

import { SystemStyleObject, useStyleConfig, Flex } from "@chakra-ui/react";

import { NavLink } from "./NavLink";

export const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%">
      <NavLink styles={styles} url="/search">
        Search
      </NavLink>
      <NavLink styles={styles} url="/build">
        Build
      </NavLink>
    </Flex>
  );
};
