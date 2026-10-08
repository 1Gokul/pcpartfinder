import { MoveLeft, MoveRight } from "lucide-react";
import { PageSize } from "./constants";
import {
  paginationAndFilterContainerStyle,
  paginationButtonStyle,
  paginationGridStyle,
  paginationLabelStyle,
  stickySentinelStyle,
} from "./Pagination.css";
import { useSearchParams } from "wouter";
import { ResultFilter } from "../ResultFilter/ResultFilter";
import { useState, useRef, useEffect } from "react";

export function Pagination({
  totalResults,
  currentPage,
}: {
  totalResults: number;
  currentPage: number;
}) {
  const [_, setSearchParams] = useSearchParams();
  const totalPages = Math.ceil(totalResults / PageSize);

  let pages = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= totalPages);

  if (!pages.includes(1)) {
    pages = [1, ...pages];
  }
  if (!pages.includes(totalPages)) {
    pages = [...pages, totalPages];
  }

  function onPageButtonClick(newPage: number) {
    setSearchParams((prev) => {
      prev.set("page", newPage.toString());
      return prev;
    });
  }

  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: "-4px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={paginationLabelStyle}>
        {totalResults > 0
          ? `${(currentPage - 1) * PageSize}-${Math.min(currentPage * PageSize, totalResults)} of
        ${totalResults} results`
          : "Sorry, no results were found. Try another search string."}
      </div>

      <div className={stickySentinelStyle} ref={sentinelRef} aria-hidden="true" />

      <div className={paginationAndFilterContainerStyle[isSticky ? "sticky" : "default"]}>
        <div className={paginationGridStyle[totalResults ? "default" : "invisible"]}>
          {currentPage <= 1 ? null : (
            <button
              type="button"
              className={paginationButtonStyle["arrow"]}
              onClick={() => onPageButtonClick(currentPage - 1)}
            >
              <MoveLeft fontWeight={400} height={20} />
            </button>
          )}
          {pages.map((page) => (
            <button
              type="button"
              key={`pagination-page-${page}`}
              className={paginationButtonStyle[page === currentPage ? "active" : "default"]}
              onClick={() => onPageButtonClick(page)}
            >
              {page}
            </button>
          ))}
          {currentPage === totalPages ? null : (
            <button
              type="button"
              className={paginationButtonStyle["arrow"]}
              onClick={() => onPageButtonClick(currentPage + 1)}
            >
              <MoveRight fontWeight={300} height={20} />
            </button>
          )}
        </div>
        <ResultFilter totalResults={totalResults} />
      </div>
    </>
  );
}
