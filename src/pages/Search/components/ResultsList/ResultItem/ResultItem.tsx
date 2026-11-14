import { Check, Plus, XIcon } from "lucide-react";
import type { SearchResultItem } from "../../../types/searchResult";
import {
  resultItemAddToBuildButtonStyle,
  ResultItemContainerStyle,
  ResultItemDetailGridStyle,
  ResultItemLinkStyle,
  resultItemPriceStyle,
  ResultItemReplacementText,
} from "./ResultItem.css";
import { useAtom } from "jotai";
import { buildAtom, newBuildItemIdAtom } from "../../../../../atoms/build";
import { useLocation } from "wouter";
import { categoryLimits } from "../../../../../constants/categories";

export function ResultItem({ data }: { data: SearchResultItem }) {
  const [build, setBuild] = useAtom(buildAtom);
  const [incomingBuildItemId, setIncomingBuildItemId] = useAtom(newBuildItemIdAtom);

  const [_, navigate] = useLocation();

  const itemsOfCurrentCategoryInBuild = build[data.category];

  /**
   * If the max number of items for this
   * category have been reached, the first
   * item of that category will be removed.
   * (FIFO)
   */
  const buildItemToBeReplacedFirst =
    itemsOfCurrentCategoryInBuild.length >= categoryLimits[data.category]
      ? (itemsOfCurrentCategoryInBuild?.[0] ?? null)
      : null;

  const handleAddToBuild = () => {
    if (buildItemToBeReplacedFirst?.id) {
      /**
       * And the user confirms they want the existing
       * item to be replaced.
       */
      if (incomingBuildItemId === data.id) {
        // Replace the first item
        setBuild({
          ...build,
          [data.category]: itemsOfCurrentCategoryInBuild.with(0, data),
        });

        setIncomingBuildItemId(null);
      } else {
        setIncomingBuildItemId(data.id);
      }
    } else {
      setBuild({
        ...build,
        [data.category]: [...itemsOfCurrentCategoryInBuild, data],
      });
    }
  };

  const getContainerVariant = (): keyof typeof ResultItemContainerStyle => {
    if (incomingBuildItemId && incomingBuildItemId !== data.id) {
      return "disableDuringReplacementPrompt";
    }
    if (itemsOfCurrentCategoryInBuild.includes(data)) {
      return "alreadyInBuild";
    }
    return "base";
  };

  const Button = () => {
    /** If this item exists in the build, show them a button to
     * view the build instead
     */

    const instancesOfCurrentItemInBuild = build[data.category].filter(
      (buildItem) => buildItem.id === data.id,
    ).length;
    if (instancesOfCurrentItemInBuild) {
      return (
        <button
          type="button"
          onClick={() =>
            instancesOfCurrentItemInBuild < categoryLimits[data.category]
              ? handleAddToBuild()
              : navigate("/build")
          }
        >
          <Check size={16} />
          Added
          {instancesOfCurrentItemInBuild > 1 ? ` (${instancesOfCurrentItemInBuild})` : ""}
        </button>
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

        <div className={ResultItemDetailGridStyle}>
          <span className="result-store">{data.store}</span>

          <span className={resultItemPriceStyle}>
            {data.price <= 0 ? "N/A" : `₹${data.price.toLocaleString("en-IN")}`}
          </span>

          <Button />
        </div>
      </div>

      {/* Red box that appears below when the user tries to overwrite
      an item that already exists in the build */}
      {incomingBuildItemId === data.id && !!buildItemToBeReplacedFirst && (
        <>
          <div className={ResultItemContainerStyle["itemBeingReplaced"]}>
            <a
              href={buildItemToBeReplacedFirst.link}
              target="_blank"
              rel="noopener"
              className={ResultItemLinkStyle}
            >
              {buildItemToBeReplacedFirst.name}
            </a>
            <div className={ResultItemDetailGridStyle}>
              <span className="result-store">{buildItemToBeReplacedFirst.store}</span>
              <span className={resultItemPriceStyle}>
                {buildItemToBeReplacedFirst.price <= 0
                  ? "N/A"
                  : `₹${buildItemToBeReplacedFirst.price.toLocaleString("en-IN")}`}
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
