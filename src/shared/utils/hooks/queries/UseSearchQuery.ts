import { useQuery } from "@tanstack/react-query";

import { SearchParams, SearchResultObject } from "../../../types/SearchResult";
import { client } from "../../common/client";

// Search for products in search page
export const useGetSearchResults = (
  searchQuery: string,
  params: SearchParams,
  enabled: boolean
) =>
  useQuery<SearchResultObject>(
    ["productSearch", searchQuery, params],
    ({ signal }) =>
      client("/search", { query: searchQuery, ...params }, { signal }),
    { enabled }
  );
