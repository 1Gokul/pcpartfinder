import {
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  Table,
  Thead,
  Tbody,
  TableCaption,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";

export const StoreResultTable = ({ storeName, storeResults }) => (
  <Flex direction="column" marginBottom={16}>
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Heading size="2xl" marginBottom={4}>{storeName.replace("_", " ")}</Heading>
      <Text fontSize="sm" fontWeight="bold" color="gray.500">{storeResults.length} {storeResults.length !== 1 ? "MATCHES" : "MATCH"}</Text>
    </Flex>


    {storeResults.length
      ?
      <>
        {/* Have to render two separate tables, one for large screens and one for small screens
      as useMediaQuery does not work with SSR. */}
        <ResultTable items={storeResults} size="lg" display={{ base: "none", md: "table" }} />
        <ResultTable items={storeResults} size="sm" display={{ base: "table", md: "none" }} />
      </>
      :
      <Text size="xl">
        Sorry, no matching products were found.
      </Text>
    }
  </Flex>
)

export const ResultTable = ({ items, ...props }) => (
  <Flex overflowX="auto">
    <Table
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
        {items.map(result => (
          <Tr key={`${result.name}:${result.url}`}>
            <Td>
              <Text noOfLines={4}>
                {result.name}
              </Text>
            </Td>
            <Td>
              <strong>
                {result.price === 0 ? "Call Store" : `₹${result.price.toLocaleString("en-IN")}`}
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
    </Table>
  </Flex>
)
