import { useState } from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Header = () => {
  const { colorMode } = useColorMode();

  // For opening and closing the hamburger menu
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };

  return (
    <Flex direction="column">
      <Flex
        justifyContent="space-between"
        paddingRight={5}
        height={{ base: "12vh", md: "20vh" }}
        alignItems="center"
        borderBottom="1px"
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      >
        {/* Logo */}
        <Link href="/search" passHref>
          <Flex marginX={10} width={{ base: "200px", md: "300px" }}>
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
    </Flex>
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
