import { useSearchParams } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import {
  formHeading,
  formStyle,
  inputFieldStyle,
  submitButtonStyle,
} from "./Search.css";
import { useState, type SyntheticEvent } from "react";
import { ArrowRight } from "lucide-react";
import { ResultsList } from "./components/ResultsList/ResultsList";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") ?? "");

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) {
      return;
    }

    if (searchParams.get("query") === query) {
      void queryClient.invalidateQueries({ queryKey: ["product-search"] });
      return;
    }

    setSearchParams({ query });
  };

  return (
    <>
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

      <ResultsList />
    </>
  );
}
