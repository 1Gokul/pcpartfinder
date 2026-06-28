import { useAtom } from "jotai";
import { formHeading } from "../Search/Search.css";
import { buildAtom } from "../../atoms/build";

export function Build() {
  const [build, setBuild] = useAtom(buildAtom);

  console.log("atom", build);

  return (
    <div>
      <h1 className={formHeading}>Build</h1>
    </div>
  );
}
