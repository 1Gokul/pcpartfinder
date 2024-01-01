// Desktop Navbar Menu

import {
  SystemStyleObject,
  useStyleConfig,
  Flex,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList} from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react";

import { BrowseMenu } from "./BrowseMenu";
import { NavLink } from "./NavLink";

export const DesktopNavMenu = () => {
  const styles: SystemStyleObject = useStyleConfig("DesktopNavlink");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex display={{ base: "none", md: "flex" }} height="100%">
      <Menu isOpen={isOpen} gutter={4}>
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
