import { Flex } from "@chakra-ui/react";

export const MobileNavMenu = ({ expanded }: { expanded: boolean }) => {
  return (
    <Flex
      direction="column"
      height="100vh"
      display={{ base: expanded ? "flex" : "none", md: "none" }}
      borderBottom="1px"
      borderColor="gray.200"
    >
      {/* {navLinks.map((navLink) => (
        <NavLink key={navLink.text} url={navLink.url} styles={styles}>
          {navLink.text}
        </NavLink>
      ))} */}
    </Flex>
  );
};
