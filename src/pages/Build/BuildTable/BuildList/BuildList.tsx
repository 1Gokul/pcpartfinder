import { Dot, XIcon, CheckIcon, BetweenHorizontalStart, SquareMousePointer } from "lucide-react";
import { buildLargePriceStyle } from "../BuildTable.css";
import {
  buildItemRowStyle,
  buildItemNameStyle,
  buildItemDetailsStyle,
  hideOnMobileStyle,
  dotsStyle,
  buildSmallPriceStyle,
  deleteButtonContainerStyle,
  deleteButtonStyle,
  buildIconStyle,
} from "./BuildList.css";
import { useAtom } from "jotai";
import { useState } from "react";
import { buildAtom } from "../../../../atoms/build";
import type { SearchResultItem } from "../../../Search/types/searchResult";
import { Categories, CategoryCopies, categoryLimits } from "../../../../constants/categories";
import { Link } from "wouter";

const dots = " . ".repeat(200);

export function BuildList() {
  const [build, setBuild] = useAtom(buildAtom);

  const [buildItemToBeRemoved, setBuildItemToBeRemoved] = useState<{
    category: SearchResultItem["category"];
    index: number;
  } | null>(null);

  const handleDeleteClick = (category: SearchResultItem["category"], index: number = 0) => {
    if (category === buildItemToBeRemoved?.category && index === buildItemToBeRemoved.index) {
      setBuild({ ...build, [category]: build[category].filter((_, itemIdx) => itemIdx !== index) });
      setBuildItemToBeRemoved(null);
    } else {
      setBuildItemToBeRemoved({ category, index });
    }
  };

  return (
    <>
      {Categories.map((category) => {
        const itemsInCategory = build[category];

        const numberOfAdditionalItemsThatCanBeAdded =
          categoryLimits[category] - itemsInCategory.length;

        return (
          <>
            {/* List of items in this category */}
            {itemsInCategory.length ? (
              itemsInCategory.map((item, index) => {
                const isItemGoingToBeRemoved =
                  category === buildItemToBeRemoved?.category &&
                  index === buildItemToBeRemoved.index;

                const price = item.price <= 0 ? "N/A" : `₹${item.price.toLocaleString("en-IN")}`;
                return (
                  <>
                    <div className={buildItemRowStyle["itemExists"]}>
                      <div>
                        <div className={buildItemNameStyle}>{item.name}</div>

                        <div className={buildItemDetailsStyle}>
                          <span className="category-label">{item.category}</span>

                          <Dot className={hideOnMobileStyle} />

                          <span>{item.store}</span>
                          <div className={dotsStyle}>{dots}</div>

                          <div className={buildSmallPriceStyle}>{price}</div>

                          <div className={deleteButtonContainerStyle}>
                            {isItemGoingToBeRemoved && (
                              <button
                                type="button"
                                className={deleteButtonStyle["cancel"]}
                                onClick={() => setBuildItemToBeRemoved(null)}
                              >
                                <XIcon className={buildIconStyle} />
                              </button>
                            )}
                            <button
                              type="button"
                              className={
                                deleteButtonStyle[isItemGoingToBeRemoved ? "confirm" : "delete"]
                              }
                              onClick={() => handleDeleteClick(category, index)}
                            >
                              {isItemGoingToBeRemoved ? (
                                <CheckIcon className={buildIconStyle} />
                              ) : (
                                <XIcon className={buildIconStyle} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className={buildLargePriceStyle}>{price}</div>
                    </div>

                    {numberOfAdditionalItemsThatCanBeAdded ? (
                      <Link
                        className={buildItemRowStyle["empty"]}
                        to={`/browse?category=${category.toLowerCase()}`}
                      >
                        <BetweenHorizontalStart className={buildIconStyle} />
                        <span>
                          You can also add additional{" "}
                          <span className="category-label"> {CategoryCopies[category].title}.</span>
                        </span>
                      </Link>
                    ) : null}
                  </>
                );
              })
            ) : (
              <Link
                className={buildItemRowStyle["empty"]}
                to={`/browse?category=${category.toLowerCase()}`}
              >
                <SquareMousePointer className={buildIconStyle} />
                <span>
                  Click here to browse{" "}
                  <span className="category-label">{CategoryCopies[category].title}.</span>
                </span>
              </Link>
            )}
          </>
        );
      })}
    </>
  );
}
