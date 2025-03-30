import { Link } from "@chakra-ui/next-js";
import {
  GridItem,
  Button,
  Box,
  useDisclosure,
  Grid,
  useStyleConfig
} from "@chakra-ui/react";
import {
  ArrowsInLineVertical,
  ArrowsOutLineVertical
} from "@phosphor-icons/react";

import { SearchResultItem } from "../../../../types/searchResult";
import { TableRowDetails } from "../TableRowDetails";

export const TableRow = ({
  result,
  stripe
}: {
  result: SearchResultItem;
  stripe: boolean;
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box backgroundColor={stripe ? "green.400" : "initial"}>
      <Grid
        templateColumns="repeat(12, 1fr)"
        columnGap={2}
        alignItems="center"
        sx={{ "& > div": { py: 4 } }}
      >
        <GridItem pl={6} colSpan={7} position="relative">
          <Link
            target="_blank"
            href={result.url}
            _hover={{
              color: "gray.800",
              textDecor: "underline",
              textUnderlineOffset: "0.25rem"
            }}
            display={isOpen ? "initial" : "block"}
            fontWeight={isOpen ? "bold" : "regular"}
            whiteSpace={isOpen ? "initial" : "nowrap"}
            overflow={isOpen ? "initial" : "hidden"}
            textOverflow="ellipsis"
            _after={{
              display: "inline-block",
              content: "'🡕'",
              fontSize: "1.25em",
              marginLeft: 1,
              fontWeight: 500
            }}
          >
            {result.name}
          </Link>
        </GridItem>
        <GridItem colSpan={2} textAlign="center">
          {result.store}
        </GridItem>
        <GridItem colSpan={1} fontWeight="600" textAlign="center">
          {result.price === 0
            ? "Call Store"
            : `₹${result.price.toLocaleString("en-IN")}`}
        </GridItem>
        <GridItem
          colSpan={2}
          as={Button}
          rightIcon={
            isOpen ? <ArrowsInLineVertical /> : <ArrowsOutLineVertical />
          }
          sx={{ ...useStyleConfig("CustomButton"), bgColor: "inherit" }}
          onClick={onToggle}
          height="100%"
        >
          Details
        </GridItem>
      </Grid>
      <TableRowDetails id={result.id} isOpen={isOpen} name={result.name} />
    </Box>
  );
};
