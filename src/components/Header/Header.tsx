import { useState } from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Header = () => {
  // For opening and closing the hamburger menu
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };

  return (
    <>
      <Flex
        justifyContent="space-between"
        height={{ base: "10vh", md: "12vh", lg: "10vh" }}
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
        <Link href="/search" passHref>
          <Flex marginX={10} width={{ base: "250px", md: "300px" }}>
            <Image src={logo} alt="pcpartfinder logo" priority={true} />
          </Flex>
        </Link>

        <DesktopNavMenu />
        <HamburgerMenuToggler
          toggleExpanded={toggleExpanded}
          expanded={expanded}
        />
      </Flex>

      <MobileNavMenu expanded={expanded} />
    </>
  );
};

export default Header;

// Mobile menu toggler
const HamburgerMenuToggler = ({
  expanded,
  toggleExpanded
}: {
  expanded: boolean;
  toggleExpanded: () => void;
}) => (
  <IconButton
    aria-label="Click this button to toggle the menu."
    display={{ base: "flex", md: "none" }}
    variant="ghost"
    fontSize="40px"
    icon={expanded ? <VscClose /> : <VscMenu />}
    onClick={toggleExpanded}
  />
);
