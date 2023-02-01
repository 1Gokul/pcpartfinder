import { client } from "../common/client";

// Search for products in search page
export const getSearchResults = async (
  searchQuery: string,
  page: number,
  sort: number
) => await client("/search", { query: searchQuery, page, sort });
