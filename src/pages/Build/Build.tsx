import { useAtom } from "jotai";
import { buildAtom } from "../../atoms/build";
import {
  buildItemRowStyle,
  buildItemNameStyle,
  buildItemDetailsStyle,
  emptyBuildItemPlaceholderStyle,
  buildTableStyle,
  buildTableContainerStyle,
  buildTableHeading,
  deleteButtonStyle,
  buildPriceStyle,
} from "./Build.css";
import { Trash, XIcon } from "lucide-react";
import { resultItemPriceStyle } from "../Search/components/ResultsList/ResultItem/ResultItem.css";

export function Build() {
  const [build] = useAtom(buildAtom);

  return (
    <>
      <section className={buildTableContainerStyle}>
        <div className={buildTableStyle}>
          <h1 className={buildTableHeading}>YOUR BUILD</h1>
          {Object.entries(build).map(([category, item]) => {
            if (item) {
              return (
                <div className={buildItemRowStyle["itemExists"]}>
                  <div>
                    <div className={buildItemNameStyle}>
                      <span>{item.name}</span>
                      <button type="button" className={deleteButtonStyle}>
                        <Trash size={16} />
                      </button>
                    </div>
                    <div className={buildItemDetailsStyle}>
                      <span className="category">{category}</span>

                      <div>{item.store}</div>
                    </div>
                  </div>
                  <span className={buildPriceStyle}>
                    {item.price <= 0 ? "N/A" : `₹${item.price.toLocaleString("en-IN")}`}
                  </span>
                </div>
              );
            }
            return <div className={buildItemRowStyle["empty"]}>Click to add</div>;
          })}
        </div>
      </section>
    </>
  );
}
