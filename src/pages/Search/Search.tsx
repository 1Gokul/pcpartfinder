import { useSearchParams } from "wouter";
import {
  formContainerStyle,
  formHeading,
  formStyle,
  inputFieldStyle,
  submitButtonStyle,
} from "./Search.css";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ResultsList } from "./components/ResultsList/ResultsList";
import { Select } from "../../components/Select/Select";

const stores = {
  "Clarion Computers": "Clarion_Computers",
  "SMC International": "SMC_International",
  "Elite Hubs": "Elite_Hubs",
  "The IT Depot": "IT_Depot",
};

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") ?? "");
  const [newStoresList, setNewStoresList] = useState<string[]>([]);

  const onSubmit = () => {
    setSearchParams({ query: searchQuery });
  };

  const storesList = searchParams.getAll("store");

  console.log("stores list", storesList);

  const handleSetStoresList = (open: boolean) => {
    if (!open && newStoresList.length) {
      setSearchParams((prev) => {
        prev.delete("store");
        newStoresList.forEach((newStore) => prev.append("store", newStore));
        return prev;
      });

      setNewStoresList([]);
    }
  };

  return (
    <div className={formContainerStyle}>
      <h1 className={formHeading}>Find computer components available in major Indian stores.</h1>
      <form onSubmit={onSubmit} className={formStyle}>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          required
          name="query"
          placeholder="Search..."
          className={inputFieldStyle}
        />
        <button type="submit" className={submitButtonStyle}>
          Search
          <ArrowRight strokeWidth={1.5} />
        </button>
      </form>

      <Select
        multiple
        value={newStoresList}
        onOpenChange={handleSetStoresList}
        onValueChange={setNewStoresList}
        items={stores}
      />
      <ResultsList />
    </div>
  );
}
