import { Button, Flex, Icon, Progress, Text, useStyleConfig } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";
import { SearchResultObject } from "../shared/types/SearchResult";
import { useNextQueryParam } from "../utils/hooks/common/useNextQueryParam";
import { getSearchResults } from "../utils/hooks/queries/SearchQueries";

import Table from "./Table/Table";

// Structure of the JSON returned from the server after a search request.
const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown];

export const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") as string) || 1;

  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: pageFromQuery } })
    });
  }

  /* The value of "sort" determines the format in which the results are shown
    Normal results as received (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState<number>(0);

  const [page, setPage] = useState<number>(pageFromQuery);

  const handleChangeSort = () => {
    setSort((sort + 1) % 3);
  };

  const isQueryValid = !!searchQuery && page >= 1;

  const { data, isSuccess } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery, page, sort],
    () => getSearchResults(searchQuery, page, sort),
    { enabled: isQueryValid }
  );

  const filterButtonStyles = useStyleConfig("CustomButton");

  if (isQueryValid && isSuccess) {
    if (!data.n_results) {
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
              {data.n_results} RESULTS
            </Text>
            {/*  Button to cycle through values of "sort" */}
            <Button
              alignSelf="flex-end"
              sx={filterButtonStyles}
              fontSize="xl"
              padding={6}
              marginBottom={5}
              onClick={handleChangeSort}
            >
              Sort <Icon as={sortSymbols[sort]} />
            </Button>
          </Flex>
          <Table items={data.content} />
        </Flex>
      );
    }
  } else {
    return (
      <Flex marginTop={14} direction="column" justifyContent="center">
        <Text fontSize="2xl" align="center">
          Hold on... taking a look at our database.
        </Text>
        <Progress
          colorScheme="cyan"
          marginTop={4}
          size="xs"
          isIndeterminate={true}
        />
      </Flex>
    );
  }
};
