const breakpoints: { [index: string]: string } = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em"
};

export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, string])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media screen and (min-width: ${breakpoint})`;
    return prev;
  }, {} as { [index: string]: string });
