// Desktop Navbar Menu

import {
  SystemStyleObject,
  useStyleConfig,
  Flex,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Icon
} from "@chakra-ui/react";

import { BrowseMenu } from "./BrowseMenu";
import { NavLink } from "./NavLink";
import { CaretDown } from "@phosphor-icons/react";

export const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%">
      <Menu isOpen={isOpen}>
        <MenuButton
          bgColor="transparent"
          sx={{ ...styles, position: "relative" }}
          onMouseEnter={() => onOpen()}
          onMouseLeave={() => onClose()}
        >
          Browse
          <CaretDown
            size={16}
            style={{
              transition: "bottom ease 0.2s",
              position: "absolute",
              bottom: isOpen ? 5 : 10,
              margin: "auto",
              left: 0,
              right: 0
            }}
          />
        </MenuButton>
        <MenuList onMouseEnter={() => onOpen()} onMouseLeave={() => onClose()}>
          <BrowseMenu />
        </MenuList>
      </Menu>
      <NavLink styles={styles} url="/search">
        Build
      </NavLink>
      <NavLink styles={styles} url="search">
        Chart
      </NavLink>
    </Flex>
  );
};
