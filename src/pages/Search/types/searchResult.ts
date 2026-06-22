import type { Categories } from "../../../constants/categories";

export type SearchResultItem = {
  name: string;
  category: (typeof Categories)[number];
  price: number;
  link: string;
  store: string;
  id: string;
};

export type SearchResultObject = {
  total: number;
  results: SearchResultItem[];
  stores: string[];
};

export type SortType = "asc" | "dsc";

export type SearchParams = {
  query: string;
  page: number;
  sort: SortType;
};
