import { style, styleVariants } from "@vanilla-extract/css";
import { colours } from "../../../../styles/theme.css";

export const paginationLabelStyle = style({
  margin: "1rem 0",
  fontWeight: 500,
});

export const paginationGridStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  columnGap: "0.25rem",
  marginTop: "0.75rem",
  marginBottom: "2rem",
  height: "2.5rem",
  width: "40%",
});

const baseButtonStyle = style({
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: colours.green200,
  transition: "background-color 0.25s ease-in-out",
  ":hover": {
    backgroundColor: colours.green500,
  },
});

export const paginationButtonStyle = styleVariants({
  default: [baseButtonStyle],
  arrow: [
    baseButtonStyle,
    { display: "flex", alignItems: "center", justifyContent: "center" },
  ],
  active: [
    baseButtonStyle,
    {
      backgroundColor: colours.green500,
      border: "2px solid",
      borderColor: colours.green1100,
      fontWeight: 500,
    },
  ],
});
