import { keyframes, style } from "@vanilla-extract/css";
import { breakpoints, vars } from "../../styles/theme.css";
import { buttonStyle } from "../Search/Search.css";

export const buildActionsStyle = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1rem",
  marginTop: "2.5rem",
  paddingInline: "1rem",
  "@media": {
    [breakpoints.tablet]: {
      gap: "1.5rem",
    },
  },
});

const buildActionButtonStyle = style([
  buttonStyle,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.25rem",
    fontSize: "1.25rem",
    fontWeight: 600,
    ":disabled": {
      cursor: "not-allowed",
      opacity: 0.45,
      transform: "none",
      backgroundColor: vars.colour.accent,
      boxShadow: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
    },
    "@media": {
      [breakpoints.tablet]: {
        fontSize: "1.125rem",
        padding: "0.875rem 1.5rem",
      },
    },
  },
]);

/** Primary action: keeps the green search-button colour. */
export const publishButtonStyle = style([buildActionButtonStyle]);

/** Secondary action: same shape, no fill colour. */
export const copyMarkdownButtonStyle = style([
  buildActionButtonStyle,
  {
    color: vars.colour.primary,
    ":disabled": {
      cursor: "not-allowed",
      opacity: 0.45,
      transform: "none",
      backgroundColor: "transparent",
      boxShadow: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
    },
  },
]);

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinnerStyle = style({
  animation: `${spin} 1s linear infinite`,
});
