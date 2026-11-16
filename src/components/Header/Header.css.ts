import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const headerWrapperStyle = style({
  marginBlock: "2rem",
  "@media": {
    [breakpoints.desktop]: {},
  },
});

const headerContainerStyleBase = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  height: "5rem",
  width: "100%",
  borderWidth: "3px",
  backgroundColor: colours.green200,
  borderColor: colours.green1200,
  borderStyle: "solid",

  "@media": {
    [breakpoints.desktop]: {
      height: "5.625rem",
    },
  },
});

export const headerContainerStyle = styleVariants({
  default: [headerContainerStyleBase],
  /**
   * Used on the /search page when no search has been made yet.
   * the logo is removed and the header is centered.
   */
  compact: [headerContainerStyleBase, { width: "fit-content", marginInline: "auto" }],
});

export const mobileMenuButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "4rem",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  borderLeft: `2px solid ${colours.green1200}`,

  ":hover": {
    backgroundColor: colours.green400,
  },

  "@media": {
    [breakpoints.tablet]: {
      display: "none",
    },
  },
  selectors: {
    [`${headerContainerStyle["compact"]} &`]: {
      display: "none",
    },
  },
});

const mobileNavContainerStyleBase = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  width: "100%",
  maxHeight: "0",
  backgroundColor: colours.green200,
  borderColor: colours.green1200,
  borderStyle: "solid",
  borderWidth: "0 2px",

  "@media": {
    [breakpoints.tablet]: {
      display: "none",
    },
  },

  selectors: {
    [`${headerContainerStyle["compact"]} &`]: {
      display: "none",
    },
  },
});

export const mobileNavContainerStyle = styleVariants({
  default: [mobileNavContainerStyleBase],
  open: [mobileNavContainerStyleBase, { maxHeight: "20rem", borderWidth: "0 2px 2px 2px" }],
});

export const mobileNavLinkStyle = style({
  display: "block",
  color: colours.green1200,
  fontSize: "large",
  fontWeight: "500",
  textAlign: "center",
  padding: "1rem",

  ":hover": {
    backgroundColor: colours.green400,
  },
});

export const headerLogoStyle = style({
  margin: "0 1.5rem",
  width: "100%",
  maxWidth: "12.5rem",
  "@media": {
    [breakpoints.tablet]: {
      maxWidth: "15rem",
    },
    [breakpoints.desktop]: {
      maxWidth: "20rem",
    },
  },
});

export const desktopNavStyle = style({
  display: "flex",
  height: "100%",
});

export const desktopNavLinkStyle = style({
  display: "none",
  color: colours.green1200,
  height: "100%",
  fontSize: "large",
  fontWeight: "500",
  textAlign: "center",
  width: "7rem",
  borderColor: colours.green200,
  borderStyle: "solid",
  borderWidth: "0 3px",
  ":last-child": {
    borderRight: "0",
  },
  ":hover": {
    backgroundColor: colours.green400,
    borderColor: colours.green1200,
  },
  "@media": {
    [breakpoints.tablet]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  selectors: {
    [`${headerContainerStyle["compact"]} &`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "auto",
      padding: "0 1rem",
      "@media": {
        [breakpoints.tablet]: {
          width: "7rem",
          padding: 0,
        },
      },
    },
    [`${headerContainerStyle["compact"]} &:first-child:hover`]: {
      borderLeftColor: "transparent",
    },
  },
});
