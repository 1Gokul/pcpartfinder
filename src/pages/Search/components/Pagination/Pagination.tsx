import { MoveLeft, MoveRight } from "lucide-react";
import { PageSize } from "./constants";
import {
  paginationButtonStyle,
  paginationGridStyle,
  paginationLabelStyle,
} from "./Pagination.css";
import { useSearchParams } from "wouter";

export function Pagination({
  totalResults,
  currentPage,
}: Record<"totalResults" | "currentPage", number>) {
  const [, setSearchParams] = useSearchParams();
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

  return (
    <div>
      <div className={paginationLabelStyle}>
        {(currentPage - 1) * PageSize}-
        {Math.min(currentPage * PageSize, totalResults)} of {totalResults}{" "}
        results
      </div>

      <div className={paginationGridStyle}>
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
            className={
              paginationButtonStyle[page === currentPage ? "active" : "default"]
            }
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
    </div>
  );
}
