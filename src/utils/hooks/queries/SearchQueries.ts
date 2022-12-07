import { client } from "../common/client";

// Search for products in search page
export const getSearchResults = async (searchQuery: string) =>
  await client("/search", { query: searchQuery });
