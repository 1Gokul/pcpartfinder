import { Button, Flex, Icon, Text, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";
import { SearchResultObject } from "../shared/types/SearchResult";

import Table from "./Table/Table";
import { TableWithHeading } from "./Table/TableWithHeading";

// Structure of the JSON returned from the server after a search request.
const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown];

export const SearchResults = ({
  results: { n_results, content }
}: {
  results: SearchResultObject;
}) => {
  /* The value of "sort" determines the format in which the results are shown
    Results by store (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState<number>(0);
  const filterButtonStyles = useStyleConfig("CustomButton");

  const stores = [...new Set(content.map((item) => item.store))];

  if (!n_results) {
    return (
      <Text fontSize="xl">
        Sorry, no results were found. Try another search string.
      </Text>
    );
  } else {
    return (
      <Flex direction="column" marginTop={14}>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={5}
        >
          <Text color="gray.500" fontWeight="bold">
            {n_results} RESULTS
          </Text>
          {/*  Button to cycle through values of "sort" */}
          <Button
            alignSelf="flex-end"
            sx={filterButtonStyles}
            fontSize="xl"
            padding={6}
            marginBottom={5}
            onClick={() => setSort((sort + 1) % 3)}
          >
            Sort <Icon as={sortSymbols[sort]} />
          </Button>
        </Flex>
        <Flex direction="column">
          {sort === 0 ? (
            stores.map((store: string) => (
              <TableWithHeading
                key={store}
                heading={store.replace("_", " ")}
                items={content.filter((item) => item.store === store)}
              />
            ))
          ) : (
            <Table
              items={content.sort(
                (a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price)
              )}
            />
          )}
        </Flex>
      </Flex>
    );
  }
};
