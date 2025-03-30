import { Flex, Progress, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

import { Pagination } from "./searchResultTable/filters/Pagniation";
import { SortMenu } from "./searchResultTable/filters/SortMenu";
import { SearchResultTable } from "./searchResultTable/SearchResultTable";
import { useNextQueryParam } from "../../../../utils/hooks/useNextQueryParam";
import { PageSize } from "../../constants";
import { useGetSearchResults } from "../../hooks/UseSearchQuery";
import { SortType, SearchParams } from "../../types/searchResult";

export const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") ?? "1");
  const sortFromQuery = (useNextQueryParam("sort") || "rel") as SortType;

  if (pageFromQuery < 1) {
    void router.push({
      pathname: "search",
      query: { query: searchQuery, page: 1 }
    });
  }

  const [params, setParams] = useState<SearchParams>({
    page: pageFromQuery,
    sort: sortFromQuery
  });

  const handleParamChange = (newParams: Partial<SearchParams>) => {
    void router.push(
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
    searchQuery ?? "",
    params,
    isQueryValid
  );

  if (!searchQuery) {
    return null;
  }

  if (isFetching) {
    return (
      <Fragment key={router.asPath}>
        <Text fontSize="2xl" align="center" marginTop={5}>
          Looking at our database...
        </Text>
        <Progress colorScheme="green" marginTop={4} size="xs" isIndeterminate />
      </Fragment>
    );
  }

  return (
    <Flex key={router.asPath} direction="column">
      {isSuccess && data?.n_results ? (
        <Fragment key={router.asPath}>
          <Text fontSize="md" color="green.1200" fontWeight="500">
            {(params.page - 1) * PageSize}-
            {Math.min(params.page * PageSize, data.n_results)} of{" "}
            {data.n_results} results
          </Text>
          <Flex justifyContent="space-between" alignItems="center" marginY={5}>
            <Pagination
              totalResults={data.n_results}
              currentPage={params.page}
              handleParamChange={handleParamChange}
            />
            <SortMenu
              sort={params.sort}
              handleParamChange={handleParamChange}
            />
          </Flex>
          <SearchResultTable items={data.content} />
        </Fragment>
      ) : (
        <Text fontSize="md" color="gray.400" fontWeight="600">
          Sorry, no results were found. Try another search string.
        </Text>
      )}
    </Flex>
  );
};
