import { Collapse, Flex } from "@chakra-ui/react";

export const ItemDetails = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex py={5} pl={6} backgroundColor="inherit">
        data
      </Flex>
    </Collapse>
  );
};
