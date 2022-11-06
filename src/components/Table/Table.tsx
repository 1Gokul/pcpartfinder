import {
  Flex,
  Icon,
  Link,
  Text as ChakraText,
  Table as ChakraTable,
  Thead,
  Tbody,
  TableCaption,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";

export interface TableProps {
  items: { name: string; url: string; price: number; store: string }[];
  [otherProps: string]: unknown;
}

const Table = ({ items, ...otherProps }: TableProps) => {
  return (
    <Flex overflowX="auto">
      {items.length ? (
        <ChakraTable
          variant="striped"
          colorScheme="cyan"
          border="2px"
          borderColor="cyan.600"
          {...otherProps}
        >
          <TableCaption
            display={{ md: "none" }}
            textAlign="left"
            placement="top"
          >
            ← Swipe left if some columns are not visible
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((result) => (
              <Tr key={`${result.name}:${result.url}`}>
                <Td>
                  <ChakraText noOfLines={4}>{result.name}</ChakraText>
                </Td>
                <Td>
                  <strong>
                    {result.price === 0
                      ? "Call Store"
                      : `₹${result.price.toLocaleString("en-IN")}`}
                  </strong>
                </Td>
                <Td>
                  <Link target="_blank" href={result.url}>
                    <Icon as={RiExternalLinkLine} fontSize="2xl" />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      ) : (
        <ChakraText size="xl">
          Sorry, no matching products were found.
        </ChakraText>
      )}
    </Flex>
  );
};

export default Table;
