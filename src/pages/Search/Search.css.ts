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

export const buttonStyle = style({
  textAlign: "center",
  backgroundColor: colours.green300,
  boxShadow: `0.2rem 0.2rem 0 ${colours.green1200}`,
  border: `3px solid ${colours.green1200}`,
  ":active": {
    transform: "translate(2px, 2px)",
    boxShadow: "none",
  },
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.25rem 0.25rem 0 ${colours.green1200}`,
    backgroundColor: colours.green500,
  },
});

export const submitButtonStyle = style([
  buttonStyle,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.25rem",
    boxShadow: `0.4rem 0.4rem 0 ${colours.green1200}`,
    padding: "1rem 1.25rem",
    fontWeight: 600,
    ":hover": {
      boxShadow: `0.5rem 0.5rem 0 ${colours.green1200}`,
    },
    "@media": {
      [breakpoints.desktop]: {
        padding: "0rem 2rem",
      },
    },
  },
]);

export const buttonIcon = style({
  fontSize: "24px",
  marginLeft: "0.5rem",
});
