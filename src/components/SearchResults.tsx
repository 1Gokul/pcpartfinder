import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Progress,
  Text,
  useStyleConfig
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { SearchResultObject, SortType } from "../shared/types/SearchResult";
import { useNextQueryParam } from "../utils/hooks/common/useNextQueryParam";
import { getSearchResults } from "../utils/hooks/queries/SearchQueries";

import Table from "./Table/Table";

const SearchResults = () => {
  const router = useRouter();
  const searchQuery = useNextQueryParam("query");

  const pageFromQuery = parseInt(useNextQueryParam("page") as string) || 1;
  const sort = useNextQueryParam("sort") as SortType;
  if (pageFromQuery < 1) {
    router.push({
      pathname: "search",
      ...(searchQuery && { query: { query: searchQuery, page: 1 } })
    });
  }

  const [page, setPage] = useState<number>(pageFromQuery);

  const handleChangeSort = (newSortType: SortType) => {
    router.push({
      pathname: "search",
      ...(searchQuery && {
        query: { query: searchQuery, page, sort: newSortType }
      })
    });
  };

  const isQueryValid = !!searchQuery && page >= 1;

  const { data, isSuccess, isLoading, isFetching } =
    useQuery<SearchResultObject>(
      ["productSearch", searchQuery, page, sort],
      () => getSearchResults(searchQuery, page, sort),
      { enabled: isQueryValid }
    );

  const customButtonStyle = useStyleConfig("CustomButton");

  if (isQueryValid && isSuccess) {
    if (!data.n_results) {
      return (
        <Text key={router.asPath} fontSize="xl">
          Sorry, no results were found. Try another search string.
        </Text>
      );
    } else {
      return (
        <Flex key={router.asPath} direction="column" marginTop={14}>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={5}
          >
            <Text color="gray.500" fontWeight="bold">
              {data.n_results} RESULTS
            </Text>
            <Menu>
              <MenuButton
                as={Button}
                sx={customButtonStyle}
                rightIcon={<GoChevronDown />}
              >
                {sort === "rel"
                  ? "Relevance"
                  : (sort === "asc" ? "Ascending" : "Descending") + " price"}
              </MenuButton>
              <MenuList>
                <MenuOptionGroup
                  defaultValue="rel"
                  value={sort}
                  onChange={(value) => handleChangeSort(value as SortType)}
                  type="radio"
                >
                  <MenuItemOption value="rel">Relevance</MenuItemOption>
                  <MenuItemOption value="asc">Ascending price</MenuItemOption>
                  <MenuItemOption value="dsc">Descending price</MenuItemOption>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>
          <Table items={data.content} />
        </Flex>
      );
    }
  } else if (isFetching) {
    return (
      <Flex
        key={router.asPath}
        marginTop={14}
        direction="column"
        justifyContent="center"
      >
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

export default SearchResults;
