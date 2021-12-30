import { Button, Flex, Icon, Text, useStyleConfig } from "@chakra-ui/react";
import React, { useState } from "react";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";

import Table, { TableWithHeading } from "./Tables";

// Structure of the JSON returned from the server after a search request.
export interface resultType {
  n_results: number;
  content: [
    {
      store_name: string;
      store_results: [
        { name: string; url: string; price: number; store: string }
      ];
    }
  ];
}

interface SearchResultsProps {
  results: resultType;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  /* The value of "sort" determines the format in which the results are shown
    Results by store (sort=0), ascending order(sort=1), descending order(sort=2)*/
  const [sort, setSort] = useState<number>(0);
  const filterButtonStyles = useStyleConfig("CustomButton");

  const sortSymbols = [GoPrimitiveDot, GoChevronUp, GoChevronDown];

  if (results) {
    if (!results.n_results) {
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
              {results.n_results} RESULTS
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
              results.content.map((store) => (
                <TableWithHeading
                  key={store.store_name}
                  title={store.store_name.replace("_", " ")}
                  content={store.store_results}
                />
              ))
            ) : (
              <Table
                items={results.content
                  .map((item) => item.store_results)
                  .flat()
                  .sort((a, b) => (sort === 1 ? 1 : -1) * (a.price - b.price))}
              />
            )}
          </Flex>
        </Flex>
      );
    }
  } else return null;
};
