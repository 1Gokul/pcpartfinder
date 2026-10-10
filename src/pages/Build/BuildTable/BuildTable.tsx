import { Dot, XIcon, CheckIcon } from "lucide-react";
import {
  buildTableHeading,
  barcode,
  buildLargePriceStyle,
} from "../Build.css";
import {
  buildItemRowStyle,
  buildItemNameStyle,
  buildItemDetailsStyle,
  hideOnMobileStyle,
  dotsStyle,
  buildSmallPriceStyle,
  deleteButtonContainerStyle,
  deleteButtonStyle,
} from "./BuildTable.css";
import { useAtom } from "jotai";
import { useState } from "react";
import { buildAtom } from "../../../atoms/build";


const dots = " . ".repeat(200);
const iconSizeProps = { size: 20, style: { padding: 0 } };

export function BuildTable() {
  const [build, setBuild] = useAtom(buildAtom);

  const [buildCategoryToBeCleared, setBuildCategoryToBeCleared] = useState<string | null>(null);

  const handleDeleteClick = (category: string) => {
    if (category === buildCategoryToBeCleared) {
      setBuild({ ...build, [category]: null });
    } else {
      setBuildCategoryToBeCleared(category);
    }
  };
  return (
    <>
      {Object.entries(build).map(([category, item]) => {
        if (item) {
          const price = item.price <= 0 ? "N/A" : `₹${item.price.toLocaleString("en-IN")}`;
          return (
            <div className={buildItemRowStyle["itemExists"]}>
              <div>
                <div className={buildItemNameStyle}>{item.name}</div>

                <div className={buildItemDetailsStyle}>
                  <span className="category">{category}</span>

                  <Dot className={hideOnMobileStyle} />

                  <span>{item.store}</span>
                  <div className={dotsStyle}>{dots}</div>

                  <div className={buildSmallPriceStyle}>{price}</div>

                  <div className={deleteButtonContainerStyle}>
                    {category === buildCategoryToBeCleared && (
                      <button
                        type="button"
                        className={deleteButtonStyle["cancel"]}
                        onClick={() => setBuildCategoryToBeCleared(null)}
                      >
                        <XIcon {...iconSizeProps} />
                      </button>
                    )}
                    <button
                      type="button"
                      className={
                        deleteButtonStyle[
                          category === buildCategoryToBeCleared ? "confirm" : "delete"
                        ]
                      }
                      onClick={() => handleDeleteClick(category)}
                    >
                      {category === buildCategoryToBeCleared ? (
                        <CheckIcon {...iconSizeProps} />
                      ) : (
                        <XIcon {...iconSizeProps} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className={buildLargePriceStyle}>{price}</div>
            </div>
          );
        }
        return <div className={buildItemRowStyle["empty"]}>Click to add</div>;
      })}
    </>
  );
}
