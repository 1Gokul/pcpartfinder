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

export const fontSizes: { [index: string]: string } = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  x2l: "1.5rem",
  x3l: "1.875rem",
  x4l: "2.25rem",
  x5l: "3rem"
};

export const headingSizes: {
  [size: string]: { mobile: string; desktop: string };
} = {
  x2l: {
    mobile: "x4l",
    desktop: "x5l"
  },
  xl: {
    mobile: "x3l",
    desktop: "x4l"
  },
  lg: {
    mobile: "x2l",
    desktop: "x3l"
  },
  md: {
    mobile: "xl",
    desktop: "xl"
  },
  sm: {
    mobile: "md",
    desktop: "md"
  },
  xs: {
    mobile: "sm",
    desktop: "sm"
  }
};
