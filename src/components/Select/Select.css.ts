import { style } from "@vanilla-extract/css";
import { colours } from "../../styles/theme.css";

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
  cursor: "default",
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     color: "white",
  //   },
  // },
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
  border: "2px solid",
  borderColor: colours.green1200,
  backgroundColor: "white",
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: 1,
  whiteSpace: "nowrap",
  fontWeight: 400,
  color: colours.green1200,
  WebkitUserSelect: "none",
  userSelect: "none",
  minWidth: "10rem",
  selectors: {
    "&[data-popup-open]": {
      backgroundColor: colours.green100,
    },
    "&:active:not([data-disabled])": {
      backgroundColor: colours.green300,
      // "@media": {
      //   "(prefers-color-scheme: dark)": {
      //     backgroundColor: "oklch(37.1% 0 0deg)",
      //   },
      // },
    },
    "&[data-disabled]": {
      color: "oklch(55.6% 0 0deg)",
      borderColor: "oklch(55.6% 0 0deg)",
      // "@media": {
      //   "(prefers-color-scheme: dark)": {
      //     color: "oklch(70.8% 0 0deg)",
      //     borderColor: "oklch(70.8% 0 0deg)",
      //   },
      // },
    },
    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: colours.green500,
      outlineOffset: "-1px",
      // "@media": {
      //   "(prefers-color-scheme: dark)": {
      //     outlineColor: "white",
      //   },
      // },
    },
  },
});

export const SelectValueStyle = style({
  selectors: {
    "&[data-placeholder]": {
      color: "oklch(55.6% 0 0deg)",
      // "@media": {
      //   "(prefers-color-scheme: dark)": {
      //     color: "oklch(70.8% 0 0deg)",
      //   },
      // },
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
  border: "1px solid oklch(14.5% 0 0deg)",
  backgroundColor: "white",
  backgroundClip: "padding-box",
  color: colours.green1200,
  minWidth: "var(--anchor-width)",
  transformOrigin: "var(--transform-origin)",
  boxShadow: "0.25rem 0.25rem 0 rgb(0 0 0 / 12%)",
  transition: "transform 100ms ease-out, opacity 100ms ease-out",
  selectors: {
    "&[data-starting-style], &[data-ending-style]": {
      opacity: 0,
      transform: "scale(0.98)",
    },
    '&[data-side="none"]': {
      transition: "none",
      transform: "translateY(1px)",
      opacity: 1,
      minWidth: "calc(var(--anchor-width) + 1.75rem)",
    },
  },
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     border: "1px solid white",
  //     backgroundColor: "oklch(14.5% 0 0deg)",
  //     color: "white",
  //     boxShadow: "none",
  //   },
  // },
});

export const SelectScrollArrowStyle = style({
  width: "100%",
  backgroundColor: "white",
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
  // "@media": {
  //   "(prefers-color-scheme: dark)": {
  //     backgroundColor: "oklch(14.5% 0 0deg)",
  //   },
  // },
});

export const SelectListStyle = style({
  boxSizing: "border-box",
  position: "relative",
  paddingBlock: "0.25rem",
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
      backgroundColor: colours.green300,
      // "@media": {
      //   "(prefers-color-scheme: dark)": {
      //     backgroundColor: "white",
      //     color: "oklch(14.5% 0 0deg)",
      //   },
      // },
    },
  },
});

export const SelectItemIndicatorStyle = style({
  gridColumnStart: 1,
});

export const SelectItemTextStyle = style({
  gridColumnStart: 2,
});
