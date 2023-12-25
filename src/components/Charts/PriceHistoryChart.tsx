import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries
} from "@visx/xychart";
import React from "react";

import {
  MaxPriceChartBuffer,
  MinPriceChartBuffer
} from "../../constants/searchResult";
import { chartTheme } from "../../styles/chart";
import { PriceHistoryPoint } from "../../types/itemDetail";
import { getPriceLimits } from "../../utils/common/price";

const accessors = {
  xAccessor: (point: PriceHistoryPoint) => new Date(`${point.date}T00:00:00`),
  yAccessor: (point: PriceHistoryPoint) => point.price
};

export const PriceHistoryChart = ({
  height = 200,
  width = 400,
  name,
  data
}: {
  height?: number;
  width?: number;
} & (
  | {
      data: PriceHistoryPoint[];
      name: string;
    }
  | {
      data: Record<string, PriceHistoryPoint[]>;
      name: never;
    }
)) => {
  const { max, min } = getPriceLimits(data);

  return (
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
        yScale={{
          type: "linear",
          domain: [min + MinPriceChartBuffer, max + MaxPriceChartBuffer],
          zero: false
        }}
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
        {Array.isArray(data) ? (
          <>
            <AnimatedGlyphSeries dataKey={name} data={data} {...accessors} />
            <AnimatedLineSeries dataKey={name} data={data} {...accessors} />
          </>
        ) : (
          <>
            {Object.entries(data).map(([productName, history]) => (
              <React.Fragment key={productName}>
                <AnimatedGlyphSeries
                  dataKey={productName}
                  data={history}
                  {...accessors}
                />
                <AnimatedLineSeries
                  dataKey={name}
                  data={history}
                  {...accessors}
                />
              </React.Fragment>
            ))}
          </>
        )}

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
                .xAccessor(
                  tooltipData?.nearestDatum?.datum as PriceHistoryPoint
                )
                .toLocaleString("en-in", {
                  year: "2-digit",
                  month: "short",
                  day: "2-digit"
                })}
              , ₹
              {accessors.yAccessor(
                tooltipData?.nearestDatum?.datum as PriceHistoryPoint
              )}
            </div>
          )}
        />
      </XYChart>
    </div>
  );
};
