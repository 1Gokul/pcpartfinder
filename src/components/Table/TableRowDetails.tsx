import { Box, Collapse, Flex } from "@chakra-ui/react";

import { Chart } from "../chart/Chart";

export const TableRowDetails = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Collapse in={isOpen} animateOpacity unmountOnExit>
      <Flex backgroundColor="inherit">
        <Box pb={3} pl={3} width="50%" maxWidth="50%">
          <Chart />
        </Box>
      </Flex>
    </Collapse>
  );
};
