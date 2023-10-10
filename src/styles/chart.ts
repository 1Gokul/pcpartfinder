import { buildChartTheme } from "@visx/xychart";

export const chartTheme = buildChartTheme({
  // colors
  backgroundColor: " #f9fafb", // used by Tooltip, Annotation
  colors: ["black"], // categorical colors, mapped to series via `dataKey`s
  gridColor: "var(--chakra-colors-green-400)",
  gridColorDark: "var(--chakra-colors-green-1000)",
  tickLength: 5,
  htmlLabel: { fontFamily: "var(--font-base)" },

  // htmlLabel: { fontFamily: "var(--font-base)" },
  // // labels
  // svgLabelBig?: SVGTextProps;
  // svgLabelSmall?: SVGTextProps;
  // htmlLabel?: HTMLTextStyles;

  // // lines
  xAxisLineStyles: { color: "pink" }
  // yAxisLineStyles?: LineStyles;
  // xTickLineStyles?: LineStyles;
  // yTickLineStyles?: LineStyles;
  // tickLength: number;

  // // grid

  // gridColorDark: string; // used for axis baseline if x/yxAxisLineStyles not set
});
