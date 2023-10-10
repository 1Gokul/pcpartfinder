import { Box, Text } from "@chakra-ui/react";

import { TableRow } from "./TableRow";
import { SearchResultItem } from "../../types/searchResult";

export type TableProps = {
  items: SearchResultItem[];
};

export const Table = ({ items }: TableProps) => {
  return (
    <Box
      overflowX="auto"
      border="2px"
      borderColor="green.1200"
      fontWeight="500"
    >
      <Text display={{ md: "none" }} textAlign="left">
        ← Swipe left if some columns are not visible
      </Text>

      {items.map((result, index) => (
        <TableRow key={result.id} stripe={!!(index % 2)} result={result} />
      ))}
    </Box>
  );
};
