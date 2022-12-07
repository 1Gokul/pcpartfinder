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
