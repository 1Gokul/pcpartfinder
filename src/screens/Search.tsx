import { useSearchParams } from "wouter";
import {
  formContainerStyle,
  formHeading,
  formStyle,
  inputFieldStyle,
  submitButtonStyle,
} from "./Search/Search.css";
import { useState } from "react";
import { ArrowRight, MoveRight } from "lucide-react";

export function Search() {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={formContainerStyle}>
      <h1 className={formHeading}>
        Find computer components available in major Indian stores.
      </h1>
      <form
        onSubmit={() => setSearchParams({ query: searchQuery })}
        className={formStyle}
      >
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
    </div>
  );
}
