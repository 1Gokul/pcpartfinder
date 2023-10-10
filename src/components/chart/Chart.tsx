import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries} from "@visx/xychart";

import { PriceRecord } from "../../types/itemDetail";
import { chartTheme } from "../../styles/chart";
import React from "react";

const data1 = [
  { date: "2022-10-29", price: 45370 },
  { date: "2022-11-26", price: 40690 },
  { date: "2023-01-23", price: 38225 },
  { date: "2023-03-18", price: 37240 },
  { date: "2023-04-18", price: 37240 },
  { date: "2023-05-18", price: 37240 },
  { date: "2023-06-08", price: 37240 },
  { date: "2023-07-18", price: 37240 },
] satisfies PriceRecord[];

const accessors = {
  xAccessor: (d: PriceRecord) => d.date,
  yAccessor: (d: PriceRecord) => d.price
};

export const Chart = ({
  height = 250,
  width = 500
}: {
  height?: number;
  width?: number;
}) => (
  <div
    style={{
      backgroundColor: "#DCF9E6",
      border: "2px solid #73E79E",
      backgroundImage:
        "linear-gradient(rgba(203, 246, 218, .7) .1em, transparent .1em), linear-gradient(90deg, rgba(203, 246, 218, .7) .1em, transparent .1em)",
      backgroundSize: "1.5em 1.5em"
    }}
  >
    <XYChart
      height={height}
      width={width}
      xScale={{ type: "band" }}
      yScale={{ type: "linear", domain: [36000, 47000], zero: false }}
      theme={chartTheme}
    >
      <AnimatedAxis
        orientation="bottom"
        hideAxisLine
        hideTicks
        axisLineClassName="axis-line"
      />
      <AnimatedAxis
        orientation="left"
        numTicks={4}
        hideAxisLine
        hideTicks
        labelClassName="chart-label"
      />
      <AnimatedGrid columns={false} offset={200} numTicks={4} />

      <AnimatedGlyphSeries dataKey="Line 1" data={data1} {...accessors} />
      <AnimatedLineSeries dataKey="Line 1" data={data1} {...accessors} />

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
              {tooltipData.nearestDatum.key}
            </div>
            {accessors.xAccessor(tooltipData.nearestDatum.datum as PriceRecord)}
            {", "}
            {accessors.yAccessor(tooltipData.nearestDatum.datum as PriceRecord)}
          </div>
        )}
      />
    </XYChart>
  </div>
);
