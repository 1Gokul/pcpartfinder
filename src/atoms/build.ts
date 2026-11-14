import { atomWithStorage } from "jotai/utils";
import { Categories, categoryLimits } from "../constants/categories";
import { atom } from "jotai";
import { BuildAtomSchema, type BuildAtomType } from "../types/build";

import { safeParse } from "valibot";

export const buildAtom = atomWithStorage<BuildAtomType>(
  "build",
  {
    GPU: [],
    CPU: [],
    MOBO: [],
    RAM: [],
    STORAGE: [],
    PSU: [],
    COOLING: [],
    CASE: [],
  },
  {
    getItem(key, initialValue) {
      console.log("[buildStorage] getItem", { key });
      const storedValue = localStorage.getItem(key);

      if (storedValue === null) {
        console.log("[buildStorage] No saved build; using initial value");
        return initialValue;
      }

      try {
        const result = safeParse(BuildAtomSchema, JSON.parse(storedValue));
        console.log("[buildStorage] Validation result", {
          success: result.success,
          storedValue,
          ...(result.success ? { parsedBuild: result.output } : { issues: result.issues }),
        });

        if (result.success) {
          return Categories.reduce<BuildAtomType>((acc, cat) => {
            acc[cat] = (result.output[cat] ?? []).slice(0, categoryLimits[cat]);
            return acc;
          }, {} as BuildAtomType);
        }
      } catch (error) {
        console.error("[buildStorage] Failed to parse saved build", error);
      }

      console.warn("[buildStorage] Resetting invalid saved build");
      localStorage.setItem(key, JSON.stringify(initialValue));

      return initialValue;
    },
    setItem(key: string, value: BuildAtomType) {
      localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem(key: string) {
      console.log("[buildStorage] removeItem", { key });
      localStorage.removeItem(key);
    },
  },
  {
    getOnInit: true,
  },
);

export const newBuildItemIdAtom = atom<string | null>(null);
