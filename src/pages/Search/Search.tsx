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

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );

  const onSubmit = () => {
    setSearchParams({ query: searchQuery });
  };
  return (
    <div className={formContainerStyle}>
      <h1 className={formHeading}>
        Find computer components available in major Indian stores.
      </h1>
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
    </div>
  );
}
