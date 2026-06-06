import { Check, Plus, XIcon } from "lucide-react";
import type { SearchResultItem } from "../../../types/searchResult";
import {
  resultItemAddToBuildButtonStyle,
  ResultItemContainerStyle,
  ResultItemDetailGridStyle as ResultItemDetailStyle,
  ResultItemLinkStyle,
  resultItemPriceStyle,
  ResultItemReplacementText,
} from "./ResultItem.css";
import { useAtom } from "jotai";
import { buildAtom, newBuildItemIdAtom } from "../../../../../atoms/build";
import { Link } from "wouter";

export function ResultItem({ data }: { data: SearchResultItem }) {
  const [build, setBuild] = useAtom(buildAtom);
  const [incomingBuildItemId, setIncomingBuildItemId] = useAtom(newBuildItemIdAtom);

  const buildItemInCurrentCategory = build[data.category];

  const handleAddToBuild = () => {
    if (buildItemInCurrentCategory?.id) {
      if (incomingBuildItemId === data.id) {
        setBuild({ ...build, [data.category]: data });
        setIncomingBuildItemId(null);
      } else {
        setIncomingBuildItemId(data.id);
      }
    } else {
      setBuild({ ...build, [data.category]: data });
    }
  };

  const getContainerVariant = (): keyof typeof ResultItemContainerStyle => {
    if (incomingBuildItemId && incomingBuildItemId !== data.id) {
      return "disableDuringReplacementPrompt";
    }
    if (buildItemInCurrentCategory?.id === data.id) {
      return "alreadyInBuild";
    }
    return "base";
  };

  const Button = () => {
    /** If this item exists in the build, show them a button to
     * view the build instead
     */
    if (buildItemInCurrentCategory?.id === data.id) {
      return (
        <Link to="/build" className={resultItemAddToBuildButtonStyle}>
          <button type="button">
            <Check size={16} />
            Added
          </button>
        </Link>
      );
    }

    return (
      <button type="button" onClick={handleAddToBuild} className={resultItemAddToBuildButtonStyle}>
        {incomingBuildItemId === data.id ? (
          <>
            <Check size={16} />
            Replace
          </>
        ) : (
          <>
            <Plus size={16} />
            Build
          </>
        )}
      </button>
    );
  };

  return (
    <>
      {incomingBuildItemId === data.id && (
        <div className={ResultItemReplacementText["incoming"]}>Incoming</div>
      )}
      <div className={ResultItemContainerStyle[getContainerVariant()]}>
        <a href={data.link} target="_blank" rel="noopener" className={ResultItemLinkStyle}>
          {data.name}
        </a>

        <div className={ResultItemDetailStyle}>
          <span>{data.store}</span>

          <span className={resultItemPriceStyle}>
            {data.price <= 0 ? "N/A" : `₹${data.price.toLocaleString("en-IN")}`}
          </span>

          <Button />
        </div>
      </div>

      {/* Red box that appears below when the user tries to overwrite
      an item that already exists in the build */}
      {incomingBuildItemId === data.id && !!buildItemInCurrentCategory && (
        <>
          <div className={ResultItemContainerStyle["itemBeingReplaced"]}>
            <a
              href={buildItemInCurrentCategory.link}
              target="_blank"
              rel="noopener"
              className={ResultItemLinkStyle}
            >
              {buildItemInCurrentCategory.name}
            </a>
            <div className={ResultItemDetailStyle}>
              <span>{buildItemInCurrentCategory.store}</span>
              <span className={resultItemPriceStyle}>
                {buildItemInCurrentCategory.price <= 0
                  ? "N/A"
                  : `₹${buildItemInCurrentCategory.price.toLocaleString("en-IN")}`}
              </span>

              <button
                type="button"
                onClick={() => setIncomingBuildItemId(null)}
                className={resultItemAddToBuildButtonStyle}
              >
                <XIcon size={16} /> Cancel
              </button>
            </div>
          </div>
          <div className={ResultItemReplacementText["outgoing"]}>Outgoing</div>
        </>
      )}
    </>
  );
}
