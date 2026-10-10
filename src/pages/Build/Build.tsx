import { useAtom } from "jotai";
import { buildAtom } from "../../atoms/build";
import {
  buildTableStyle,
  buildTableContainerStyle,
  buildLargePriceStyle,
  starSeparator,
  totalCostStyle,
  compatibilityDisclaimerStyle,
  barcode,
  buildTableHeading,
} from "./Build.css";
import { ArrowUpRight } from "lucide-react";
import { BuildTable } from "./BuildTable/BuildTable";

const stars = " * ".repeat(200);

export function Build() {
  const [build] = useAtom(buildAtom);

  return (
    <>
      <section className={buildTableContainerStyle}>
        <div className={buildTableStyle}>
          <h1 className={buildTableHeading}>{"<name's>"} build</h1>

          <p className={barcode}>basic-good-person</p>
          <BuildTable />

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
