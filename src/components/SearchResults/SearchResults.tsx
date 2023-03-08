import {
  Button,
  Flex,
  Progress,
  SimpleGrid,
  Text,
  useStyleConfig
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { pageSize } from "../../shared/constants/SearchResults";
import { SearchResultObject, SortType } from "../../shared/types/SearchResult";
import { useNextQueryParam } from "../../utils/hooks/common/useNextQueryParam";
import { getSearchResults } from "../../utils/hooks/queries/SearchQueries";

import Table from "../Table/Table";
import Pagination from "./Pagniation";
import SortMenu from "./SortMenu";

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") as string) || 1;
  const sortFromQuery = (useNextQueryParam("sort") || "rel") as SortType;
  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: 1 } })
    });
  }

  const [page, setPage] = useState<number>(pageFromQuery);
  const [sort, setSort] = useState<SortType>(sortFromQuery);

  const handleChangeSort = (newSortType: SortType) => {
    router.push(
      {
        pathname: "search",
        query: { query: searchQuery, page, sort: newSortType }
      },
      undefined,
      { shallow: true }
    );
    setSort(newSortType);
  };
  const handleChangePage = (newPage: number = 1) => {
    router.push(
      {
        pathname: "search",
        query: { query: searchQuery, page: newPage, sort }
      },
      undefined,
      { shallow: true }
    );
    setPage(newPage);
  };

  const isQueryValid = !!searchQuery && page >= 1;

  const { data, isSuccess, isFetching } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery, page, sort],
    () => getSearchResults(searchQuery, page, sort),
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
                ? `${(page - 1) * pageSize}-${page * pageSize} of ${
                    data.n_results
                  } results`
                : "Sorry, no results were found. Try another search string."}
            </Text>
            <Flex
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginY={5}
            >
              <Pagination
                totalResults={data.n_results}
                currentPage={page}
                handleChangePage={handleChangePage}
              />
              <SortMenu sort={sort} handleChangeSort={handleChangeSort} />
            </Flex>

            <Table items={data.content} />
          </>
        )
      )}
    </Flex>
  );
};

export default SearchResults;
