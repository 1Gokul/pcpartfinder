import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries
} from "@visx/xychart";
import React from "react";

import { chartTheme } from "../../styles/chart";
import { PriceRecord } from "../../types/itemDetail";

const accessors = {
  xAccessor: (d: PriceRecord) => new Date(`${d.date}T00:00:00`),
  yAccessor: (d: PriceRecord) => d.price
};

export const Chart = ({
  height = 200,
  width = 400,
  data
}: {
  height?: number;
  width?: number;
  data: Record<string, PriceRecord[]>;
}) => (
  <div
    style={{
      backgroundColor: "#DCF9E6",
      border: "2px solid #73E79E",
      backgroundImage:
        "linear-gradient(rgba(203, 246, 218, .7) .1em, transparent .1em)," +
        " linear-gradient(90deg, rgba(203, 246, 218, .7) .1em, transparent .1em)",
      backgroundSize: "1.5em 1.5em"
    }}
  >
    <XYChart
      height={height}
      width={width}
      xScale={{ type: "time" }}
      yScale={{ type: "linear", domain: [36000, 47000], zero: false }}
      theme={chartTheme}
      margin={{ top: 10, right: 20, bottom: 40, left: 45 }}
    >
      <AnimatedAxis
        orientation="bottom"
        hideAxisLine
        hideZero
        hideTicks
        left={15}
        numTicks={4}
        tickFormat={(d: Date) =>
          d.toLocaleString("en-us", {
            year: "2-digit",
            month: "short"
          })
        }
      />
      <AnimatedAxis
        orientation="left"
        numTicks={4}
        hideAxisLine
        hideTicks
        tickFormat={(t: number) =>
          Intl.NumberFormat("en", { notation: "compact" }).format(t)
        }
      />
      <AnimatedGrid columns={false} offset={100} numTicks={4} />
      {Object.entries(data).map(([label, chartData]) => (
        <>
          <AnimatedGlyphSeries
            dataKey={label}
            data={chartData}
            {...accessors}
          />
          <AnimatedLineSeries dataKey={label} data={chartData} {...accessors} />
        </>
      ))}

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) => (
          <div>
            <div
              style={{
                color: colorScale
                  ? colorScale(tooltipData?.nearestDatum?.key ?? "unknown")
                  : "green"
              }}
            >
              {tooltipData?.nearestDatum?.key}
            </div>
            {accessors
              .xAccessor(tooltipData?.nearestDatum?.datum as PriceRecord)
              .toLocaleString("en-in", {
                year: "2-digit",
                month: "short",
                day: "2-digit"
              })}
            , ₹
            {accessors.yAccessor(tooltipData?.nearestDatum?.datum as PriceRecord)}
          </div>
        )}
      />
    </XYChart>
  </div>
);
