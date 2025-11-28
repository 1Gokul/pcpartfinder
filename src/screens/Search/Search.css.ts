import { style } from "@vanilla-extract/css";
import { breakpoints, colors } from "../../styles/theme.css";

export const formContainerStyle = style({
  padding: "0 2rem",
  marginTop: "3.5rem",
});

export const formHeading = style({
  fontSize: "2rem",
  lineHeight: "3rem",
  fontWeight: 800,
  color: colors.green1100,
  "@media": {
    [breakpoints.tablet]: {
      fontSize: "3rem",
    },
  },
});

export const formStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "0.5rem",
  marginTop: "2rem",
  height: "5rem",
  marginBottom: "1.25rem",
  width: "100%",
  flexDirection: "column",
  "@media": {
    [breakpoints.tablet]: {
      gridTemplateColumns: "5fr 1fr",
    },
  },
});

export const inputFieldStyle = style({
  fontSize: "2rem",
  padding: "1rem 1.25rem",
  marginRight: 0,
  border: "2px solid",
  color: "inherit",
  transition: "all 0.2s",
  "::placeholder": {
    color: "#718096",
  },
  ":hover": {
    backgroundColor: colors.green100,
  },
  ":focus": {
    backgroundColor: "#F0FFF4",
    borderColor: "#2F855A",
    boxShadow: "0 0 0 1px #2F855A",
    outline: "1px solid #2F855A",
  },
  "@media": {
    "screen and (min-width: 768px)": {
      marginRight: "1.25rem",
    },
  },
});

export const submitButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: colors.green400,
  padding: "0 2rem",
  fontSize: "1.25rem",
  cursor: "pointer",
  border: "none",
  borderRadius: "0.375rem",
  transition: "background-color,padding 0.2s ease-in-out",

  "@media": {
    [breakpoints.tablet]: {
      marginTop: 0,
    },
  },
});

export const buttonIcon = style({
  fontSize: "24px",
  marginLeft: "0.5rem",
});
