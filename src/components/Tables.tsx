import {
  Flex,
  Heading,
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

const Table = ({ items, ...props }) => (
  <Flex overflowX="auto">
    {items.length ? (
      <ChakraTable
        variant="striped"
        colorScheme="cyan"
        border="2px"
        borderColor="cyan.600"
        {...props}
      >
        <TableCaption display={{ md: "none" }} textAlign="left" placement="top">
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
      <ChakraText size="xl">Sorry, no matching products were found.</ChakraText>
    )}
  </Flex>
);

export default Table;

export const TableWithHeading = ({ title, content }) =>
  content && (
    <Flex direction="column" marginBottom={16}>
      <Flex direction="row" alignItems="center">
        <Heading size="xl" fontWeight="black" marginBottom={4}>
          {title}
        </Heading>
        <ChakraText
          fontSize="sm"
          marginLeft={8}
          fontWeight="bold"
          color="gray.500"
        >
          {content.length} {content.length !== 1 ? "MATCHES" : "ITEM"}
        </ChakraText>
      </Flex>
      {/* Have to render two separate tables, one for large screens and one for small screens
      as useMediaQuery does not work with SSR. */}
      <Table
        items={content}
        size="lg"
        display={{ base: "none", md: "table" }}
      />
      <Table
        items={content}
        size="sm"
        display={{ base: "table", md: "none" }}
      />
    </Flex>
  );
