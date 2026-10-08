import { useAtom } from "jotai";
import { buildAtom } from "../../atoms/build";
import {
  buildItemRowStyle,
  buildItemNameStyle,
  buildItemDetailsStyle,
  buildTableStyle,
  buildTableContainerStyle,
  buildTableHeading,
  deleteButtonStyle,
  buildLargePriceStyle,
  dotsStyle,
  starSeparator,
  totalCostStyle,
  barcode,
  compatibilityDisclaimerStyle,
  buildSmallPriceStyle,
  hideOnMobileStyle,
  deleteButtonContainerStyle,
} from "./Build.css";
import { ArrowUpRight, CheckIcon, Dot, XIcon } from "lucide-react";
import { useState } from "react";

const dots = " . ".repeat(200);
const stars = " * ".repeat(200);
const iconSizeProps = { size: 20, style: { padding: 0 } };

export function Build() {
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
      <section className={buildTableContainerStyle}>
        <div className={buildTableStyle}>
          <h1 className={buildTableHeading}>{"<name's>"} build</h1>

          <p className={barcode}>basic-good-person</p>
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
          <div className={starSeparator}>{stars}</div>

          <section className={totalCostStyle}>
            <span>Total:</span>

            <span className={buildLargePriceStyle}>
              {"₹" +
                Object.values(build)
                  .reduce((acc, curr) => acc + (curr?.price ?? 0), 0)
                  .toLocaleString("en-IN")}
            </span>
          </section>
          <p className={compatibilityDisclaimerStyle}>
            Please read about compatibility of motherboards and CPUs before finalizing your build.
            First check the type of CPU socket that the motherboard supports for eg. AMD Socket AM5
            / Intel Socket 1851 and also check the "Supported CPUs" lists on the mobo manufacturers'
            website.{" "}
            <a
              href="https://www.gigabyte.com/Motherboard/B550M-C/support#Support-Cpu-Support"
              target="_blank"
              rel="noreferrer"
            >
              An example
              <ArrowUpRight size={20} strokeWidth={1} style={{ marginTop: "0.1rem" }} />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
