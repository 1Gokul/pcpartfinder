import { css } from "@emotion/react";
import React, { useState } from "react";
import { GoPrimitiveDot, GoChevronUp, GoChevronDown } from "react-icons/go";

import Table, { TableWithHeading } from "./Tables";
import { Button, Flex, Icon, TextBox } from "./StyledComponents";

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

type searchResultsProps = {
  results: resultType | null;
};

export const SearchResults = ({ results }: searchResultsProps) => {
  /* The value of "globalSortDirection" determines the format in which the results are shown
    Results by store (globalSortDirection=0), ascending order(globalSortDirection=1), descending order(globalSortDirection=2)*/
  const [globalSortDirection, setGlobalSortDirection] = useState<number>(0);

  const sortSymbols = [<GoPrimitiveDot />, <GoChevronUp />, <GoChevronDown />];

  if (results) {
    if (!results.n_results) {
      return (
        <TextBox size="xl">
          Sorry, no results were found. Try another search string.
        </TextBox>
      );
    } else {
      return (
        <Flex
          flexDirection="column"
          css={css`
            margin-top: 3.5rem;
          `}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={css`
              margin-bottom: 1.25rem;
            `}
          >
            <TextBox color="var(--color-text-gray)" weight="bold">
              {results.n_results} RESULTS FOUND
            </TextBox>
            {/*  Button to cycle through values of "globalSortDirection" */}
            <Button
              aria-label="Click this button to change the globalSortDirection type."
              css={css`
                align-self: flex-end;
                font-size: larger;
                padding: 1rem 1.75rem;
                margin-bottom: 1.25rem;
              `}
              onClick={() =>
                setGlobalSortDirection((globalSortDirection + 1) % 3)
              }
            >
              Sort <Icon>{sortSymbols[globalSortDirection]}</Icon>
            </Button>
          </Flex>
          <Flex flexDirection="column">
            {globalSortDirection === 0 ? (
              results.content.map((store) => (
                <TableWithHeading
                  key={store.store_name}
                  title={store.store_name.replace("_", " ")}
                  items={store.store_results}
                />
              ))
            ) : (
              <Table
                items={results.content
                  .map((item) => item.store_results)
                  .flat()
                  .sort(
                    (a, b) =>
                      (globalSortDirection === 1 ? 1 : -1) * (a.price - b.price)
                  )}
              />
            )}
          </Flex>
        </Flex>
      );
    }
  } else return null;
};
