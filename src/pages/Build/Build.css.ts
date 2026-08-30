import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours, fonts } from "../../styles/theme.css";
import { formHeading } from "../Search/Search.css";

export const buildTableContainerStyle = style({
  WebkitFilter: "drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.4))",
});

export const buildTableHeading = style([
  formHeading,
  {
    fontFamily: fonts.mono,
    textAlign: "center",
  },
]);
export const buildTableStyle = style({
  backgroundColor: colours.green50,
  padding: "1rem 1rem 4rem",
  filter: "drop-shadow(8px 8px 8px rgb(0, 0, 0))",
  fontWeight: "500",
  vars: {
    "--angle": "80px",
    "--size": "90deg",
    "--m": "conic-gradient(from -45deg at bottom,#0000,#000 1deg 89deg,#0000 90deg) 50%/60px 100%",
  },

  WebkitMask: "var(--m)",
  mask: "var(--m)",
});

const buildItemRowStyleBase = style({
  padding: "1rem",
  fontSize: "1.125rem",
});

export const buildItemRowStyle = styleVariants({
  empty: [buildItemRowStyleBase],
  itemExists: [
    buildItemRowStyleBase,
    {
      display: "grid",
      gridTemplateColumns: "9fr 3fr",
      position: "relative",
      columnGap: "2rem",
    },
  ],
});

export const buildItemNameStyle = style({
  fontSize: "1.25rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  marginBottom: "0.5rem",
});

export const deleteButtonStyle = style({
  position: "absolute",
  top: 0,
  right: '0.5rem',
});

export const buildPriceStyle = style({
  fontFamily: fonts.mono,
  fontSize: "2rem",
});

export const buildItemDetailsStyle = style({
  display: "grid",
  gridTemplateColumns: "3fr 3fr 6fr",
});

globalStyle(`${buildItemDetailsStyle} > .category`, {
  fontFamily: fonts.mono,
});

export const emptyBuildItemPlaceholderStyle = style({
  padding: "1.5rem",
  fontStyle: "italic",
  "@media": {
    [breakpoints.desktop]: {
      padding: "1.25rem",
    },
    [breakpoints.wide]: {
      padding: "1.5rem",
    },
  },
});
