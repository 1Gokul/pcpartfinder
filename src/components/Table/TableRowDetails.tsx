import { Box, Collapse, Flex } from "@chakra-ui/react";

import { Chart } from "../chart/Chart";

const data1 = [
  { date: "2022-10-29", price: 45370 },
  { date: "2022-11-26", price: 40690 },
  { date: "2023-01-23", price: 38225 },
  { date: "2023-03-18", price: 37240 }
];

export const TableRowDetails = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Collapse in={isOpen} animateOpacity unmountOnExit>
      <Flex backgroundColor="inherit">
        <Box pb={3} pl={3}>
          <Chart data={{ testData: data1 }} />
        </Box>
      </Flex>
    </Collapse>
  );
};
