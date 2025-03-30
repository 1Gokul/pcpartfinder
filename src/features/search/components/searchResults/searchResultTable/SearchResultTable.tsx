import { Box, Text } from "@chakra-ui/react";

import { TableRow } from "./tableRow/TableRow";
import { SearchResultItem } from "../../../types/searchResult";

export type SearchResultTableProps = {
  items: SearchResultItem[];
};

export const SearchResultTable = ({ items }: SearchResultTableProps) => {
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
