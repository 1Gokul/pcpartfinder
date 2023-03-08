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

  const [page, setPage] = useState<number>(pageFromQuery);
  const [sort, setSort] = useState<SortType>(sortFromQuery);
  const [nRows, setNRows] = useState<NRowsType>(rowsFromQuery);

  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: 1 } })
    });
  }

  const handleChangeSort = (newSortType: SortType) => {
    router.push(
      {
        pathname: "search",
        query: { query: searchQuery, page, sort: newSortType, nRows }
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
        query: { query: searchQuery, page: newPage, sort, nRows }
      },
      undefined,
      { shallow: true }
    );
    setPage(newPage);
  };

  const handleChangeNRows = (newRow: NRowsType = 10) => {
    router.push(
      {
        pathname: "search",
        query: { query: searchQuery, page: 1, sort, nRows: newRow }
      },
      undefined,
      { shallow: true }
    );
    setPage(1);
    setNRows(newRow);
  };

  const isQueryValid = !!searchQuery && page >= 1;

  const { data, isSuccess, isFetching } = useQuery<SearchResultObject>(
    ["productSearch", searchQuery, page, sort, nRows],
    () => getSearchResults(searchQuery, page, sort, nRows),
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
                ? `${(page - 1) * nRows}-${Math.min(
                    page * nRows,
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
                nRows={nRows}
                totalResults={data.n_results}
                currentPage={page}
                handleChangePage={handleChangePage}
              />
              <Flex gap={6}>
                <RowsPerPage
                  nRows={nRows}
                  handleChangeNRows={handleChangeNRows}
                />
                <SortMenu sort={sort} handleChangeSort={handleChangeSort} />
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
