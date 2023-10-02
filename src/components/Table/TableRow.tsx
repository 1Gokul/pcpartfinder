import {
  Td,
  Tr,
  Text,
  Icon,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  Box
} from "@chakra-ui/react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { SearchResultItem } from "../../types/SearchResult";

const TableRow = ({
  result,
  stripe
}: {
  result: SearchResultItem;
  stripe: boolean;
}) => {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Tr
          backgroundColor={stripe ? "green.400" : "initial"}
          cursor="pointer"
          transition="background-color 0.1s linear"
          _hover={{
            backgroundColor: "green.300"
          }}
          // border={`1px solid ${index % 2 ? "green.300" : "initial"}`}
        >
          <Td border="none">
            <Text noOfLines={4}>{result.name}</Text>
          </Td>
          <Td border="none">
            <Text noOfLines={4}>{result.store}</Text>
          </Td>
          <Td border="none" fontWeight="600" isNumeric>
            {result.price === 0
              ? "Call Store"
              : `₹${result.price.toLocaleString("en-IN")}`}
          </Td>
          <Td border="none">
            <Link target="_blank" href={result.url}>
              <Icon as={ArrowSquareOut} fontSize="2xl" />
            </Link>
          </Td>
        </Tr>
      </PopoverTrigger>
      <PopoverContent
        border="2px"
        borderColor="green.1200"
        bg="green.300"
        width="50vw"
        borderRadius="none"
        p={2}
      >
        <PopoverHeader color="black" display="flex" gap="1rem" alignItems="end">
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {result.name}
            </Text>
            <Text fontSize="md" color="gray.500">
              {result.category}
            </Text>
          </Box>
          <Button>Build</Button>
        </PopoverHeader>
        <PopoverArrow
          borderTop="2px"
          borderLeft="2px"
          borderColor="green.1200"
          bg="green.300"
        />
        <PopoverCloseButton bg="green.300" />
        <PopoverBody>Data</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TableRow;
