import { NRowsType, SortType } from "../../../shared/types/SearchResult";
import { client } from "../common/client";

// Search for products in search page
export const getSearchResults = async (
  searchQuery: string,
  page: number,
  sort: SortType,
  nRows: NRowsType
) => await client("/search", { query: searchQuery, page, sort, nRows });
