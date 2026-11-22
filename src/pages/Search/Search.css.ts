import { style } from "@vanilla-extract/css";
import { breakpoints, vars } from "../../styles/theme.css";

export const logoStyle = style({
  display: "block",
  width: "100%",
  maxWidth: "28rem",
  height: "auto",
  margin: "2rem auto 2rem",
  "@media": {
    [breakpoints.tablet]: {
      marginTop: "3.5rem",
      maxWidth: "36rem",
      marginBottom: 0,
    },
  },
});

export const formHeading = style({
  fontSize: "1.25rem",
  lineHeight: 1.5,
  fontWeight: 700,
  textAlign: "center",
  color: vars.colour.primary,
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "2rem",
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
  fontFamily: "inherit",
  padding: "1rem 1.25rem",
  border: "3px solid",
  borderColor: vars.colour.secondary,
  backgroundColor: vars.colour.inputBg,
  color: vars.colour.primary,
  "::placeholder": {
    color: vars.colour.muted,
  },
  ":hover": { borderColor: vars.colour.secondary },
  ":focus": {
    backgroundColor: vars.colour.inputBg,
    borderColor: vars.colour.secondary,
    boxShadow: `0 0 0 1px ${vars.colour.accentHover}`,
    outline: `1px solid ${vars.colour.accentHover}`,
  },
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "2rem",
    },
  },
});

export const buttonStyle = style({
  textAlign: "center",
  backgroundColor: vars.colour.inputBg,
  boxShadow: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
  border: `3px solid ${vars.colour.secondary}`,
  ":hover": {
    transform: "translate(-2px, -2px)",
    boxShadow: `0.25rem 0.25rem 0 ${vars.colour.shadow}`,
    backgroundColor: vars.colour.accentHover,
  },
  ":active": {
    transform: "translate(2px, 2px)",
    boxShadow: "none",
    backgroundColor: vars.colour.accentHover,
  },
});

export const submitButtonStyle = style([
  buttonStyle,
  {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.25rem",
    boxShadow: `0.4rem 0.4rem 0 ${vars.colour.shadow}`,
    padding: "1rem 1.25rem",
    fontWeight: 600,
    ":hover": {
      boxShadow: `0.5rem 0.5rem 0 ${vars.colour.shadow}`,
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
