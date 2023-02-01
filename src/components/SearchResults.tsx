import { Button, Flex, Icon, Text, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";
import { SearchResultObject } from "../shared/types/SearchResult";

import Table from "./Table/Table";

// Structure of the JSON returned from the server after a search request.
const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown];

export const SearchResults = ({
  results: { n_results, content },
  sort,
  changeSort
}: {
  results: SearchResultObject;
  sort: number;
  changeSort: () => void;
}) => {
  const filterButtonStyles = useStyleConfig("CustomButton");

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
            onClick={changeSort}
          >
            Sort <Icon as={sortSymbols[sort]} />
          </Button>
        </Flex>
        <Table items={content} />
      </Flex>
    );
  }
};
