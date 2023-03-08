import { Flex, Progress, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Table from "../Table/Table";
import Pagination from "./Pagniation";
import RowsPerPage from "./RowsPerPage";
import SortMenu from "./SortMenu";
import {
  NRowsType,
  SearchParams,
  SearchResultObject,
  SortType
} from "../../shared/types/SearchResult";
import { useNextQueryParam } from "../../utils/hooks/common/useNextQueryParam";
import { getSearchResults } from "../../utils/hooks/queries/SearchQueries";

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") as string) || 1;
  const sortFromQuery = (useNextQueryParam("sort") || "rel") as SortType;
  const rowsFromQuery = (useNextQueryParam("nRows") || 10) as NRowsType;

  const [params, setParams] = useState<SearchParams>({
    page: pageFromQuery,
    sort: sortFromQuery,
    nRows: rowsFromQuery
  });

  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: 1 } })
    });
  }

  const handleParamChange = (newParams: Partial<SearchParams>) => {
    router.push(
      {
        pathname: "search",
        query: { query: searchQuery, ...params, ...newParams }
      },
      undefined,
      { shallow: true }
    );
    setParams({ ...params, ...newParams });
  };

  const isQueryValid = !!searchQuery && params.page >= 1;

  const { data, isSuccess, isFetching } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery, params],
    () => getSearchResults(searchQuery, params),
    { enabled: isQueryValid }
  );

  return (
    <Flex key={router.asPath} direction="column">
      {isFetching ? (
        <>
          <Text fontSize="2xl" align="center" marginTop={5}>
            Looking at our database...
          </Text>
          <Progress
            colorScheme="cyan"
            marginTop={4}
            size="xs"
            isIndeterminate
          />
        </>
      ) : (
        isSuccess && (
          <>
            <Text fontSize="md" color="gray.400" fontWeight="600">
              {data?.n_results
                ? `${(params.page - 1) * params.nRows}-${Math.min(
                    params.page * params.nRows,
                    data.n_results
                  )} of ${data.n_results} results`
                : "Sorry, no results were found. Try another search string."}
            </Text>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginY={5}
            >
              <Pagination
                nRows={params.nRows}
                totalResults={data.n_results}
                currentPage={params.page}
                handleParamChange={handleParamChange}
              />
              <Flex gap={6}>
                <RowsPerPage
                  n_results={data.n_results}
                  nRows={params.nRows}
                  handleParamChange={handleParamChange}
                />
                <SortMenu
                  sort={params.sort}
                  handleParamChange={handleParamChange}
                />
              </Flex>
            </Flex>

            <Table items={data.content} />
          </>
        )
      )}
    </Flex>
  );
};

export default SearchResults;
