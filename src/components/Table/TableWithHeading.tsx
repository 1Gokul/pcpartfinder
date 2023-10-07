import { Flex, Heading, Text as ChakraText } from "@chakra-ui/react";
import Table, { TableProps } from "./Table";

type TableWithHeadingProps = TableProps & {
  heading: string;
};

export const TableWithHeading = ({ heading, items }: TableWithHeadingProps) => {
  if (items) {
    return (
      <Flex direction="column" marginBottom={16}>
        <Flex direction="row" alignItems="center">
          <Heading size="xl" fontWeight="black" marginBottom={4}>
            {heading}
          </Heading>
          <ChakraText
            fontSize="sm"
            marginLeft={8}
            fontWeight="bold"
            color="gray.500"
          >
            {items.length} {items.length !== 1 ? "MATCHES" : "ITEM"}
          </ChakraText>
        </Flex>
        {/* Have to render two separate tables, one for large screens and one for small screens
        as useMediaQuery does not work with SSR. */}
        <Table items={items} />
        {/* <Table
          items={items}
          size="sm"
          display={{ base: "table", md: "none" }}
          otherProps={otherProps}
        /> */}
      </Flex>
    );
  } else return null;
};
