import { Link } from "@chakra-ui/next-js";
import { Button, SimpleGrid } from "@chakra-ui/react";

import { BrowseMenuItems } from "../../../constants/browseMenuItems";

const BrowseMenuItem = ({ name, url }: Record<"name" | "url", string>) => (
  <Button
    as={Link}
    href={`browse/${url}`}
    alignItems="center"
    p={3}
    fontWeight={500}
    color="gray.800"
    bg="green.50"
    _hover={{
      bg: "green.400",
      color: "gray.800"
    }}
    _focus={{
      bg: "green.600"
    }}
  >
    {name}
  </Button>
);

export const BrowseMenu = () => {
  return (
    <SimpleGrid columns={2}>
      {BrowseMenuItems.map((menuItem) => (
        <BrowseMenuItem {...menuItem} key={menuItem.name} />
      ))}
    </SimpleGrid>
  );
};
