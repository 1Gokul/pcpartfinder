import {
  NRowsType,
  SearchParams,
  SortType
} from "../../../shared/types/SearchResult";
import { client } from "../common/client";

// Search for products in search page
export const getSearchResults = async (
  searchQuery: string,
  params: SearchParams,
  signal: AbortSignal
) => await client("/search", { query: searchQuery, ...params }, { signal });
