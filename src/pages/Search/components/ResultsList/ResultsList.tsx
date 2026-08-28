import { useLocation, useSearchParams } from "wouter";
import { useGetSearchResults } from "../../hooks/useGetSearchResults";
import type { SearchParams } from "../../types/searchResult";
import { ResultItem } from "./ResultItem/ResultItem";
import {
  resultFilterSkeletonStyle,
  resultListContainerStyles,
  resultsItemSkeletonStyle,
  resultsTextSkeletonStyle,
} from "./ResultsList.css";
import { Pagination } from "../Pagination/Pagination";
import {
  paginationAndFilterContainerStyle,
  paginationGridStyle,
} from "../Pagination/Pagination.css";
import { skeletonStyle } from "../../../../styles/skeleton.css";
import { getToNArray } from "../../../../utils/common";
import { StoreFilterContainerStyle } from "../ResultFilter/ResultFilter.css";

export function ResultsList() {
  const [searchParams] = useSearchParams();

  const [location, navigate] = useLocation();

  const query = searchParams.get("query");
  const category = searchParams.get("category") as SearchParams["category"] | null;
  const sort = searchParams.get("sort") as SearchParams["sort"];
  const page = Number(searchParams.get("page") ?? 1);
  const stores = searchParams.getAll("store") ?? [];

  const { data, isLoading } = useGetSearchResults({
    query,
    category,
    sort,
    page,
    stores,
  });

  console.log("location", location);

  if (!query && !category) {
    return null;
  }

  if (location === "/search" && !!category) {
    navigate("/search");
  }

  if (!data || isLoading) {
    return (
      <>
        <div className={resultsTextSkeletonStyle} />
        <div className={paginationAndFilterContainerStyle}>
          <div className={paginationGridStyle["default"]}>
            {getToNArray(5).map((num) => (
              <span key={`skeleton-loader-pagination-${num}`} className={skeletonStyle} />
            ))}
          </div>
          <div className={StoreFilterContainerStyle}>
            <div className={resultFilterSkeletonStyle} />
            <div className={resultFilterSkeletonStyle} />
          </div>
        </div>
        <>
          {getToNArray(6).map((num) => (
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
        {data?.total > 0 && data.results.map((item) => <ResultItem key={item.id} data={item} />)}
      </div>
    </>
  );
}
