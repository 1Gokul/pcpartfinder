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
  Td,
  useToken
} from "@chakra-ui/react";
import { RiExternalLinkLine } from "react-icons/ri";
import theme from "../../styles/theme";

export interface TableProps {
  items: { name: string; url: string; price: number; store: string }[];
  [otherProps: string]: unknown;
}

const Table = ({ items, ...otherProps }: TableProps) => {
  const [aqua1k] = useToken("colors", ["aqua.1200"]);
  return (
    <Flex overflowX="auto">
      <ChakraTable
        colorScheme="aqua"
        border="2px"
        rules="none"
        borderColor="aqua.1200"
        size={{ base: "sm", md: "lg" }}
        fontWeight="500"
        sx={{
          "& td[data-is-numeric=true]": { px: 1 },
          "& tr td:not(:first-child)": { px: 3 }
        }}
        {...otherProps}
      >
        <TableCaption display={{ md: "none" }} textAlign="left" placement="top">
          ← Swipe left if some columns are not visible
        </TableCaption>

        <Tbody>
          {items.map((result, index) => (
            <Tr
              key={`${result.name}:${result.url}`}
              backgroundColor={index % 2 ? "aqua.400" : "initial"}
              // border={`1px solid ${index % 2 ? "aqua.300" : "initial"}`}
            >
              <Td border="none">
                <ChakraText noOfLines={4}>{result.name}</ChakraText>
              </Td>
              <Td border="none">
                <ChakraText noOfLines={4}>{result.store}</ChakraText>
              </Td>
              <Td border="none" fontWeight="600" isNumeric>
                {result.price === 0
                  ? "Call Store"
                  : `₹${result.price.toLocaleString("en-IN")}`}
              </Td>
              <Td border="none">
                <Link target="_blank" href={result.url}>
                  <Icon as={RiExternalLinkLine} fontSize="2xl" />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </Flex>
  );
};

export default Table;
