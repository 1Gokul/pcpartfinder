export type SearchResultItem = {
  name: string;
  price: number;
  url: string;
  store: string;
  price_history: { [historyDate: string]: number };
};

export type SearchResultObject = {
  n_results: number;
  content: SearchResultItem[];
};

export type SortType = "rel" | "asc" | "dsc";

export const NRowsOptions = [10, 20, 30, 40, 50] as const;
export type NRowsType = (typeof NRowsOptions)[number];

export type SearchParams = {
  page: number;
  sort: SortType;
  nRows: NRowsType;
};
