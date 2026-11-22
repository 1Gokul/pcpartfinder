import { array, entriesFromList, nonNullable, object, type InferOutput } from "valibot";
import { SearchResultItemSchema } from "../pages/Search/types/searchResult";
import { Categories } from "../constants/categories";

export const BuildAtomSchema = object(
  entriesFromList(Categories, nonNullable(array(SearchResultItemSchema))),
);

export type BuildAtomType = InferOutput<typeof BuildAtomSchema>;
