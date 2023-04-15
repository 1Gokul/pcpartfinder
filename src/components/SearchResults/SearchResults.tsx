import { Flex, Progress, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

import Table from "./Table/Table";
import Pagination from "./Pagniation";
import RowsPerPage from "./RowsPerPage";
import SortMenu from "./SortMenu";
import {
  NRowsType,
  SearchParams,
  SearchResultObject,
  SortType
} from "../../shared/types/SearchResult";
import { useNextQueryParam } from "../../shared/utils/hooks/useNextQueryParam";
import { useGetSearchResults } from "../../shared/utils/hooks/queries/UseSearchQuery";

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") as string) || 1;
  const sortFromQuery = (useNextQueryParam("sort") || "rel") as SortType;
  const rowsFromQuery = (useNextQueryParam("nRows") || 10) as NRowsType;

  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      query: { query: searchQuery, page: 1 }
    });
  }

  const [params, setParams] = useState<SearchParams>({
    page: pageFromQuery,
    sort: sortFromQuery,
    nRows: rowsFromQuery
  });

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

  const { data, isSuccess, isFetching } = useGetSearchResults(
    searchQuery,
    params,
    isQueryValid
  );

  return (
    <Flex key={router.asPath} direction="column">
      {isFetching ? (
        <Fragment key={router.asPath}>
          <Text fontSize="2xl" align="center" marginTop={5}>
            Looking at our database...
          </Text>
          <Progress
            colorScheme="aqua"
            marginTop={4}
            size="xs"
            isIndeterminate
          />
        </Fragment>
      ) : searchQuery ? (
        isSuccess && data?.n_results ? (
          <Fragment key={router.asPath}>
            <Text fontSize="md" color="aqua.1200" fontWeight="500">
              {(params.page - 1) * params.nRows}-
              {Math.min(params.page * params.nRows, data.n_results)} of{" "}
              {data.n_results} results
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
          </Fragment>
        ) : (
          <Text fontSize="md" color="gray.400" fontWeight="600">
            Sorry, no results were found. Try another search string.
          </Text>
        )
      ) : null}
    </Flex>
  );
};

export default SearchResults;
