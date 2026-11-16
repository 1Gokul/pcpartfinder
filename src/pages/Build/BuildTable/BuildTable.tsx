import { useAtom } from "jotai";
import { buildAtom, buildNameAtom } from "../../../atoms/build";
import {
  buildTableStyle,
  buildTableContainerStyle,
  buildLargePriceStyle,
  starSeparator,
  totalCostStyle,
  compatibilityDisclaimerStyle,
  buildNameInputStyle,
} from "./BuildTable.css";
import { ArrowUpRight } from "lucide-react";
import { BuildList } from "./BuildList/BuildList";
import { visuallyHidden } from "../../../styles/common.css";
import { containsProfanity } from "../../../utils/profanity";

const stars = " * ".repeat(100);

export function BuildTable() {
  const [build] = useAtom(buildAtom);
  const [buildName, setBuildName] = useAtom(buildNameAtom);
  const buildNameContainsProfanity = containsProfanity(buildName);

  return (
    <section className={buildTableContainerStyle}>
      <div className={buildTableStyle}>
        <label htmlFor="build-name" className={visuallyHidden}>
          Build name
        </label>
        <input
          type="text"
          id="build-name"
          name="build-name"
          value={buildName}
          onChange={(event) => setBuildName(event.target.value)}
          placeholder="Name your build"
          maxLength={15}
          className={buildNameInputStyle[buildNameContainsProfanity ? "invalid" : "default"]}
          aria-invalid={buildNameContainsProfanity}
        />

        <BuildList />

        <div className={starSeparator}>{stars}</div>

        <section className={totalCostStyle}>
          <span className="total-title">Total:</span>

          <span className={buildLargePriceStyle}>
            {"₹" +
              Object.values(build)
                .flat()
                .reduce((acc, curr) => acc + (curr?.price ?? 0), 0)
                .toLocaleString("en-IN")}
          </span>
        </section>
        <p className={compatibilityDisclaimerStyle}>
          Please read about compatibility of motherboards and CPUs before finalizing your build.
          First check the type of CPU socket that the motherboard supports for eg. AMD Socket AM5 /
          Intel Socket 1851 and also check the "Supported CPUs" lists on the mobo manufacturers'
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
  );
}
