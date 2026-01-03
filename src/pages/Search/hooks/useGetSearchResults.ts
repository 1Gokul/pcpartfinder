import { useQuery } from "react-query";
import type { SearchParams, SearchResultObject } from "../types/searchResult";
import { doFetch } from "../../../utils/doFetch";
import type { Optional } from "../../../types/common";

// Search for products in search page
export const useGetSearchResults = ({
  page,
  query,
  sort,
}: Optional<SearchParams>) =>
  useQuery({
    queryKey: ["product-search", page, query, sort],
    queryFn: ({ signal }) =>
      doFetch<SearchResultObject>(
        "/search",
        {
          ...(query && { query }),
          ...(sort && { sort }),
          ...(page && { page }),
        },
        { signal }
      ),
    enabled: !!query,
  });
