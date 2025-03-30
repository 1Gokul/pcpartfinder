import { Link } from "@chakra-ui/next-js";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { List, X } from "@phosphor-icons/react";

import { DesktopNavMenu } from "./DesktopNavMenu";
import { MobileNavMenu } from "./MobileNavMenu";
import Logo from "../../../public/images/logo.svg";

export const Header = () => {
  // For opening and closing the hamburger menu
  const { isOpen, onToggle } = useDisclosure();

  const toggleExpanded = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "visible";
    onToggle();
  };

  return (
    <>
      <Flex
        justifyContent="space-between"
        height={{ base: "10vh", lg: "12vh", "2xl": "12vh" }}
        marginX={{ base: "initial", md: "auto" }}
        width={{ base: "100%", md: "75vw" }}
        position={{ base: "initial", md: "sticky" }}
        mt={{ base: "0", md: "2rem" }}
        top="0.25rem"
        zIndex="9999"
        alignItems="center"
        borderWidth={{ base: "0 0 1px 0", md: "2px" }}
        bgColor="green.200"
        borderColor="green.1200"
      >
        {/* Logo */}
        <Link href="/search">
          <Flex marginX={10} width={{ base: "250px", md: "300px" }}>
            <Logo alt="pcpartfinder logo" />
          </Flex>
        </Link>

        <DesktopNavMenu />
        <IconButton
          aria-label="Click this button to toggle the menu."
          display={{ base: "flex", md: "none" }}
          variant="ghost"
          fontSize="40px"
          icon={isOpen ? <X /> : <List />}
          onClick={toggleExpanded}
        />
      </Flex>

      <MobileNavMenu expanded={isOpen} />
    </>
  );
};
