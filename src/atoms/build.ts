import { atomWithStorage } from "jotai/utils";
import { Categories } from "../constants/categories";
import type { SearchResultItem } from "../pages/Search/types/searchResult";
import { atom } from "jotai";

type BuildAtomType = Record<(typeof Categories)[number], SearchResultItem | null>;

export const buildAtom = atomWithStorage<BuildAtomType>(
  "build",
  {
    GPU: null,
    CPU: null,
    MOTHERBOARD: null,
    RAM: null,
    STORAGE: null,
    PSU: null,
    COOLING: null,
    CASE: null,
  },
  undefined,
  { getOnInit: true },
);

export const newBuildItemIdAtom = atom<string | null>(null);
