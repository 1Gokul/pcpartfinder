import { useSearchParams } from "wouter";
import { useGetSearchResults } from "../../hooks/useGetSearchResults";
import type { SearchParams } from "../../types/searchResult";
import { ResultItem } from "./ResultItem/ResultItem";
import { resultListContainerStyles } from "./ResultsList.css";
import { Pagination } from "../Pagination/Pagination";

export function ResultsList() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");
  const sort = searchParams.get("sort") as SearchParams["sort"];
  const page = Number(searchParams.get("page") ?? 1);

  const { data, isLoading } = useGetSearchResults({
    query: searchParams.get("query"),
    sort,
    page,
  });


  if (!query && !data && !isLoading) {
    return null;
  }

  return (
    <>
      <Pagination currentPage={page} totalResults={data?.n_results ?? 0} />
      <div className={resultListContainerStyles}>
        {data?.n_results ? (
          data.content.map((item) => <ResultItem data={item} />)
        ) : (
          <span>Sorry, no results were found. Try another search string,</span>
        )}
      </div>
    </>
  );
}
