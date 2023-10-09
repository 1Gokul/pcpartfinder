import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
  AnimatedGlyphSeries
} from "@visx/xychart";

import { PriceRecord } from "../types/SearchResult";

const data1 = [
  { date: "2022-10-29", price: 45370 },
  { date: "2022-11-26", price: 40690 },
  { date: "2023-01-23", price: 38225 },
  { date: "2023-03-18", price: 37240 }
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
  <XYChart
    height={height}
    width={width}
    xScale={{ type: "band" }}
    yScale={{ type: "linear", domain: [36000, 47000], zero: false }}
  >
    <AnimatedAxis orientation="bottom" hideAxisLine />
    <AnimatedAxis orientation="left" rangePadding={40000} numTicks={5} />
    <AnimatedGrid columns={false} numTicks={4} />

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
          {accessors.xAccessor(tooltipData.nearestDatum.datum)}
          {", "}
          {accessors.yAccessor(tooltipData.nearestDatum.datum)}
        </div>
      )}
    />
  </XYChart>
);
