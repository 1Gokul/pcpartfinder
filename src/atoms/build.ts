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
    PSU: null,
    COOLING: null,
    STORAGE: null,
    RAM: null,
    MOTHERBOARD: null,
    CASE: null,
  },
  undefined,
  { getOnInit: true },
);

export const newBuildItemIdAtom = atom<string | null>(null);
