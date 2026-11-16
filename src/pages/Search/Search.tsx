import { useSearchParams } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import {
  formHeading,
  formStyle,
  inputFieldStyle,
  logoStyle,
  submitButtonStyle,
} from "./Search.css";
import { useState, type SyntheticEvent } from "react";
import { ArrowRight } from "lucide-react";
import { ResultsList } from "./components/ResultsList/ResultsList";
import logo from "../../assets/logo.svg";
import { visuallyHidden } from "../../styles/common.css";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const hasQuery = !!searchParams.get("query");

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
      {!hasQuery && (
        <>
          <img src={logo} alt="PC Part Finder" className={logoStyle} />
          <h1 className={formHeading}>Your search engine for components in major Indian stores.</h1>
        </>
      )}

      <form onSubmit={onSubmit}>
        <label htmlFor="query" className={visuallyHidden}>
          Search for a product
        </label>
        <div className={formStyle}>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            required
            name="query"
            id="query"
            className={inputFieldStyle}
          />
          <button type="submit" className={submitButtonStyle}>
            Search
            <ArrowRight strokeWidth={1.5} />
          </button>
        </div>
      </form>

      <ResultsList />
    </>
  );
}
