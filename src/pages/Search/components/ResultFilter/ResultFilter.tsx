import { useSearchParams } from "wouter";
import { Select } from "../../../../components/Select/Select";
import { useEffect, useState } from "react";
import { useGetActiveStores } from "../../hooks/useGetActiveStores";
import { SortButtonStyle, StoreFilterContainerStyle } from "./ResultFilter.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export function StoreFilter({ totalResults }: { totalResults: number }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [newStoresList, setNewStoresList] = useState<string[]>([]);

  const storesList = searchParams.getAll("store");
  const storesListKey = storesList.join(",");
  const ascendingSort = (searchParams.get("sort") ?? "asc") === "asc";

  const { data, isLoading } = useGetActiveStores();

  useEffect(() => {
    setNewStoresList((currentStores) =>
      currentStores.length === storesList.length &&
      currentStores.every((store, index) => store === storesList[index])
        ? currentStores
        : storesList,
    );
  }, [storesListKey]);

  const handleSetStoresList = (open: boolean) => {
    if (!open && newStoresList.length) {
      setSearchParams((prev) => {
        prev.set("page", "1");
        prev.delete("store");
        newStoresList.forEach((newStore) => prev.append("store", newStore));
        return prev;
      });

      setNewStoresList([]);
    }
  };
  return (
    <div className={StoreFilterContainerStyle}>
      <Select
        multiple
        value={newStoresList}
        onOpenChange={handleSetStoresList}
        onValueChange={setNewStoresList}
        items={!data || isLoading ? {} : data}
        disabled={!data || isLoading}
      />
      {!!totalResults && (
        <button
          className={SortButtonStyle}
          onClick={() =>
            setSearchParams((prev) => {
              prev.set("sort", ascendingSort ? "dsc" : "asc");
              return prev;
            })
          }
        >
          Price
          {ascendingSort ? (
            <ChevronUp strokeWidth={1.5} size={20} />
          ) : (
            <ChevronDown strokeWidth={1.5} size={20} />
          )}
        </button>
      )}
    </div>
  );
}
