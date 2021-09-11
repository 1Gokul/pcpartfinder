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
  useMediaQuery
} from "@chakra-ui/react"
import { RiExternalLinkLine } from "react-icons/ri"

export const StoreTable = ({ item }) => (
  <Flex direction="column" marginBottom={16}>
    <Heading size="2xl" marginBottom={4}>{item.store}</Heading>

    {item.results.length
      ? <ResultTable items={item.results} />
      : <Text size="xl">
          No matching products found.
      </Text>}
  </Flex>
)

export const ResultTable = ({ items }) => {
  const [largerThanMD] = useMediaQuery("(min-width: 784px)")
  return(
    <Flex overflowX="auto">
      <Table
        size={largerThanMD ? "lg" : "sm"}
        variant="striped"
        colorScheme="cyan"
        border="2px"
        borderColor="cyan.600"
      >
        <TableCaption display={{ md: "none" }} textAlign="left" placement="top">
        ← Swipe left to see other columns
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Price</Th>
            <Th>Link</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map (result => (
            <Tr key={`${result.name}:${result.link}`}>
              <Td>
                <Text noOfLines={4}>
                  {result.name}
                </Text>
              </Td>
              <Td>
                <strong>
                  {result.price === 0 ? "Call Store" : `₹${result.price}`}
                </strong>
              </Td>
              <Td>
                <Link target="_blank" href={result.link}>
                  <Icon as={RiExternalLinkLine} fontSize="2xl" />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}