import { style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const formHeading = style({
  fontSize: "2.25rem",
  lineHeight: "2.25rem",
  fontWeight: 800,
  color: colours.green1100,
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "3rem",
      lineHeight: "3rem",
    },
  },
});

export const formStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "0.5rem",
  marginTop: "2rem",
  height: "5rem",
  marginBottom: "5rem",
  width: "100%",
  flexDirection: "column",
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "6fr 1fr",
      gap: "1rem",
      marginBottom: 0,
    },
  },
});

export const inputFieldStyle = style({
  fontSize: "1.5rem",
  padding: "1rem 1.25rem",
  border: "3px solid",
  color: "inherit",
  transition: "all 0.2s",
  "::placeholder": {
    color: "#718096",
  },
  ":hover": {
    backgroundColor: colours.green100,
  },
  ":focus": {
    backgroundColor: "#F0FFF4",
    borderColor: colours.green400,
    boxShadow: "0 0 0 1px #2F855A",
    outline: "1px solid #2F855A",
  },
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "2rem",
    },
  },
});

export const submitButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: colours.green400,
  border: "3px solid",
  borderColor: colours.green1200,
  ":hover": {
    backgroundColor: colours.green500,
  },
  selectors: {
    "svg &:hover": { transform: "translateX(42px)" },
  },
  padding: "1rem 1.25rem",
  fontSize: "1.25rem",
  boxShadow: `0.4rem 0.4rem 0 ${colours.green1200}`,
  fontWeight: "600",
  transition: "background-color 0.1s ease-in-out",
  ":active": {
    transform: "translate(4px, 4px)",
    boxShadow: "none",
  },

  "@media": {
    [breakpoints.desktop]: {
      padding: "0rem 2rem",
    },
  },
});

export const buttonIcon = style({
  fontSize: "24px",
  marginLeft: "0.5rem",
});
