import {
  Flex,
  Table as ChakraTable,
  TableCaption,
  Tbody
} from "@chakra-ui/react";
import { SearchResultItem } from "../../types/SearchResult";
import TableRow from "./TableRow";

export interface TableProps {
  items: SearchResultItem[];
  [otherProps: string]: unknown;
}

const Table = ({ items, ...otherProps }: TableProps) => {
  return (
    <Flex overflowX="auto">
      <ChakraTable
        colorScheme="green"
        border="2px"
        rules="none"
        borderColor="green.1200"
        size={{ base: "sm", md: "lg" }}
        fontWeight="500"
        sx={{
          "& td[data-is-numeric=true]": { px: 1 },
          "& tr td:not(:first-of-type)": { px: 3 }
        }}
        {...otherProps}
      >
        <TableCaption display={{ md: "none" }} textAlign="left" placement="top">
          ← Swipe left if some columns are not visible
        </TableCaption>

        <Tbody>
          {items.map((result, index) => (
            <TableRow key={result.id} stripe={!!(index % 2)} result={result} />
          ))}
        </Tbody>
      </ChakraTable>
    </Flex>
  );
};

export default Table;
