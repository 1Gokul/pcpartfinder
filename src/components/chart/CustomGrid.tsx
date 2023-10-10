import { GridRows } from "@visx/grid";
import { DataContext } from "@visx/xychart";
import React from "react";

export const CustomGrid = () => {
  const { xScale, yScale, innerWidth, margin } = React.useContext(DataContext);
  if (!xScale || !yScale) {
    return null;
  }
  return (
    <>
      <GridRows
        left={margin.left}
        width={innerWidth}
        scale={yScale}
        stroke="black"
        numTicks={4}
      />
    </>
  );
};
