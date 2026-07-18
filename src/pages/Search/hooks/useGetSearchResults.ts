import type { SearchParams, SearchResultObject } from "../types/searchResult";
import { doFetch } from "../../../utils/doFetch";
import type { Optional } from "../../../types/common";
import { useQuery } from "@tanstack/react-query";

// Search for products in search page
export const useGetSearchResults = ({
  page,
  query,
  category,
  sort,
  stores,
}: Optional<SearchParams>) =>
  useQuery({
    queryKey: ["product-search", page, query, category, sort, stores],
    queryFn: ({ signal }) =>
      doFetch<SearchResultObject>(
        "/search",
        {
          ...(query && { query }),
          ...(category && { category }),
          ...(sort && { sort }),
          ...(page && { page }),
          ...(stores && { store: stores }),
        },
        { signal },
      ),
    enabled: !!query || !!category,
  });
