import { Plus } from "lucide-react";
import type { SearchResultItem } from "../../../types/searchResult";
import {
  resultItemAddToBuildButtonStyle,
  ResultItemContainerStyle,
  ResultItemDetailGridStyle,
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
      <div className={ResultItemDetailGridStyle}>
        <span>{data.store}</span>
        <span className={resultItemPriceStyle}>
          {data.price <= 0 ? "N/A" : `₹${data.price.toLocaleString("en-IN")}`}
        </span>
        <button type="button" className={resultItemAddToBuildButtonStyle}>
          <Plus size={16} /> build
        </button>
      </div>
    </div>
  );
}
