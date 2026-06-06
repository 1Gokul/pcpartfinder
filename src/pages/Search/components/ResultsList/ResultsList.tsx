import { useSearchParams } from "wouter";
import { useGetSearchResults } from "../../hooks/useGetSearchResults";
import type { SearchParams } from "../../types/searchResult";
import { ResultItem } from "./ResultItem/ResultItem";
import {
  resultListContainerStyles,
  resultsItemSkeletonStyle,
  resultsTextSkeletonStyle,
} from "./ResultsList.css";
import { Pagination } from "../Pagination/Pagination";
import { paginationGridStyle } from "../Pagination/Pagination.css";
import { skeletonStyle } from "../../../../styles/skeleton.css";
import { getToNArray } from "../../../../utils/common";

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

  if (!query) {
    return null;
  }

  if (!data && isLoading) {
    return (
      <>
        <div className={resultsTextSkeletonStyle} />

        <div className={paginationGridStyle}>
          {getToNArray(5).map((num) => (
            <span key={`skeleton-loader-pagination-${num}`} className={skeletonStyle} />
          ))}
        </div>
        <>
          {getToNArray(3).map((num) => (
            <span key={`skeleton-loader-result-${num}`} className={resultsItemSkeletonStyle} />
          ))}
        </>
      </>
    );
  }

  return (
    <>
      <Pagination currentPage={page} totalResults={data?.total ?? 0} />
      <div className={resultListContainerStyles}>
        {data?.total ? (
          data.results.map((item) => <ResultItem key={item.id} data={item} />)
        ) : (
          <span>Sorry, no results were found. Try another search string,</span>
        )}
      </div>
    </>
  );
}
