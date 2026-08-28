import { useAtom } from "jotai";
import { formHeading } from "../Search/Search.css";
import { buildAtom } from "../../atoms/build";
import {
  buildItemRowStyle,
  buildItemNameContainerStyle,
  buildItemDetailsStyle,
  emptyBuildItemPlaceholderStyle,
} from "./Build.css";
import { XIcon } from "lucide-react";

export function Build() {
  const [build] = useAtom(buildAtom);

  console.log("build", build);

  return (
    <>
      <h1 className={formHeading}>Build</h1>

      <section>
        {Object.entries(build).map(([category, item]) => {
          return (
            <div className={buildItemRowStyle}>
              {item ? (
                <>
                  <div className={buildItemNameContainerStyle}>
                    <div>{item.name}</div>
                    <div>
                      <XIcon />
                    </div>
                  </div>
                  <div className={buildItemDetailsStyle}>
                    <div className="category">{category}</div>
                    <div>{item.price}</div>
                    <div>{item.store}</div>
                  </div>
                </>
              ) : (
                <div className={emptyBuildItemPlaceholderStyle}>Click to add</div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
