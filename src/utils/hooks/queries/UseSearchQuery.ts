import { useQuery } from "@tanstack/react-query";

import { SearchParams, SearchResultObject } from "../../../types/searchResult";
import { client } from "../../common/client";

// Search for products in search page
export const useGetSearchResults = (
  searchQuery: string,
  params: SearchParams,
  enabled: boolean
) =>
  useQuery(
    ["productSearch", searchQuery, params],
    ({ signal }) =>
      client<SearchResultObject>(
        "/search",
        { query: searchQuery, ...params },
        { signal }
      ),
    { enabled }
  );
