import { Categories } from "../../../constants/categories";
import * as v from "valibot";

export const SearchResultItemSchema = v.object({
  name: v.string(),
  category: v.picklist(Categories),
  price: v.number(),
  link: v.string(),
  store: v.string(),
  id: v.string(),
});

export type SearchResultItem = v.InferOutput<typeof SearchResultItemSchema>;

export type SearchResultObject = {
  total: number;
  results: SearchResultItem[];
};

export type SortType = "asc" | "dsc";

export type SearchParams = {
  query: string;
  category: (typeof Categories)[number];
  page: number;
  sort: SortType;
  stores: string[];
};
