export type SearchResultItem = {
  name: string;
  category: string;
  price: number;
  url: string;
  store: string;
  id: string;
};

export type SearchResultObject = {
  n_results: number;
  content: SearchResultItem[];
};

export type SortType = "rel" | "asc" | "dsc";

export type SearchParams = {
  page: number;
  sort: SortType;
};
