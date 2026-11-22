import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const DropdownFieldStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
});

export const SelectLabelStyle = style({
  fontSize: "1rem",
  lineHeight: "1.25rem",
  fontWeight: 700,
});

export const SelectTriggerStyle = style({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.75rem",
  height: "2.5rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.5rem",
  margin: 0,
  outline: 0,
  border: "3px solid",
  borderColor: vars.colour.secondary,
  backgroundColor: vars.colour.inputBg,
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: 1,
  whiteSpace: "nowrap",
  fontWeight: 500,
  color: vars.colour.primary,
  WebkitUserSelect: "none",
  userSelect: "none",
  minWidth: "15rem",
  ":disabled": {
    filter: "brightness(70%)",
    cursor: "not-allowed",
  },
  selectors: {
    "&[data-popup-open]": {
      backgroundColor: vars.colour.accentHover,
    },
    "&:active:not([data-disabled])": {
      backgroundColor: vars.colour.accentHover,
    },
    "&[data-disabled]": {
      color: vars.colour.secondary,
      borderColor: vars.colour.secondary,
    },
    "&:focus-visible": {
      outline: "3px solid",
      outlineColor: vars.colour.accentHover,
      outlineOffset: "-1px",
    },
  },
});

export const SelectValueStyle = style({
  selectors: {
    "&[data-placeholder]": {
      color: vars.colour.secondary,
    },
  },
});

export const SelectPositionerStyle = style({
  outline: "none",
  zIndex: 10,
  WebkitUserSelect: "none",
  userSelect: "none",
});

export const SelectPopupStyle = style({
  boxSizing: "border-box",
  outline: 0,
  border: `3px solid ${vars.colour.secondary}`,
  backgroundColor: vars.colour.inputBg,
  backgroundClip: "padding-box",
  color: vars.colour.primary,
  minWidth: "var(--anchor-width)",
  transformOrigin: "var(--transform-origin)",
  boxShadow: `0.2rem 0.2rem 0 ${vars.colour.shadow}`,
  selectors: {
    "&[data-starting-style], &[data-ending-style]": {
      opacity: 0,
      transform: "scale(0.98)",
    },
    '&[data-side="none"]': {
      transform: "translateY(1px)",
      opacity: 1,
      minWidth: "calc(var(--anchor-width) + 1.75rem)",
    },
  },
});

export const SelectScrollArrowStyle = style({
  width: "100%",
  backgroundColor: vars.colour.inputBg,
  zIndex: 1,
  textAlign: "center",
  cursor: "default",
  height: "1rem",
  fontSize: "0.75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
    },
    '&[data-direction="up"]': {
      top: 0,
    },
    '&[data-direction="up"][data-side="none"]::before': {
      top: "-100%",
    },
    '&[data-direction="down"]': {
      bottom: 0,
    },
    '&[data-direction="down"][data-side="none"]::before': {
      bottom: "-100%",
    },
  },
});

export const SelectListStyle = style({
  boxSizing: "border-box",
  position: "relative",
  paddingBlock: "0.25rem",
  paddingRight: 0,
  overflowY: "auto",
  maxHeight: "var(--available-height)",
  scrollPaddingBlock: "1.5rem",
});

export const SelectItemStyle = style({
  boxSizing: "border-box",
  outline: 0,
  fontSize: "1rem",
  lineHeight: "1.25rem",
  paddingBlock: "0.375rem",
  paddingLeft: "0.625rem",
  paddingRight: "1rem",
  display: "grid",
  gap: "0.5rem",
  alignItems: "center",
  gridTemplateColumns: "1rem 1fr",
  cursor: "default",
  WebkitUserSelect: "none",
  userSelect: "none",
  selectors: {
    "&[data-highlighted]": {
      backgroundColor: vars.colour.accentHover,
    },
  },
});

export const SelectItemIndicatorStyle = style({
  gridColumnStart: 1,
  height: "1rem",
});

export const SelectItemTextStyle = style({
  gridColumnStart: 2,
});
