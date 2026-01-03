import type { SearchResultItem } from "../../../types/searchResult";
import {
  resultItemAddToBuildButtonStyle,
  ResultItemContainerStyle,
  ResultItemLinkStyle,
  resultItemPriceStyle,
} from "./ResultItem.css";

export function ResultItem({ data }: { data: SearchResultItem }) {
  return (
    <div className={ResultItemContainerStyle}>
      <a
        href={data.url}
        target="_blank"
        rel="noopener"
        className={ResultItemLinkStyle}
      >
        {data.name}
      </a>
      <span>{data.store}</span>
      <span className={resultItemPriceStyle}>
        {data.price <= 0 ? "N/A" : `₹${data.price.toLocaleString("en-IN")}`}
      </span>
      <button type="button" className={resultItemAddToBuildButtonStyle}>
        Add to build
      </button>
    </div>
  );
}
