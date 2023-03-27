import {
  SystemStyleObject,
  useStyleConfig,
  Flex,
  Icon,
  useColorMode
} from "@chakra-ui/react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { navLinks } from "../../shared/constants/NavLinks";
import { NavLink } from "./NavLink";

const MobileNavMenu = ({ expanded }: { expanded: boolean }) => {
  const styles: SystemStyleObject = useStyleConfig("MobileNavlink");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      height="100vh"
      display={{ base: expanded ? "flex" : "none", md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {navLinks.map((navLink) => (
        <NavLink key={navLink.text} url={navLink.url} styles={styles}>
          {navLink.text}
        </NavLink>
      ))}
    </Flex>
  );
};

export default MobileNavMenu;
