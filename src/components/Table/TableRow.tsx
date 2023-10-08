import { Link } from "@chakra-ui/next-js";
import {
  GridItem,
  Text,
  Button,
  Box,
  useDisclosure,
  Grid,
  useStyleConfig
} from "@chakra-ui/react";
import {
  ArrowsInLineVertical,
  ArrowsOutLineVertical,
  ArrowUpRight
} from "@phosphor-icons/react";

import { ItemDetails } from "./ItemDetails";
import { SearchResultItem } from "../../types/SearchResult";

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
        sx={{ "& > div": { py: 5 } }}
      >
        <GridItem pl={6} colSpan={7}>
          <Link
            target="_blank"
            href={result.url}
            _hover={{
              color: "gray.800",
              textDecor: "underline",
              textUnderlineOffset: "0.25rem"
            }}
            display={isOpen ? "initial" : "flex"}
            gap={1}
            alignItems="center"
            width="100%"
            fontWeight={isOpen ? "bold" : "regular"}
            whiteSpace={isOpen ? "initial" : "nowrap"}
            overflow={isOpen ? "initial" : "hidden"}
            textOverflow="ellipsis"
          >
            {result.name}
            <ArrowUpRight size={20} />
          </Link>
        </GridItem>
        <GridItem colSpan={2}>
          <Text noOfLines={4}>{result.store}</Text>
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
      <ItemDetails isOpen={isOpen} />
    </Box>
  );
};
