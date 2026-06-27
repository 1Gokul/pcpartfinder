import { style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const headerWrapperStyle = style({
  zIndex: 9999,
  position: "sticky",
  top: "0.25rem",
  marginTop: "2rem",
  "@media": {
    [breakpoints.desktop]: {},
  },
});

export const headerContainerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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

export const mobileMenuButtonStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3.5rem",
  height: "100%",
  padding: "0 1rem",
  cursor: "pointer",
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
});

export const hamburgerIconStyle = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "1.5rem",
  height: "1.125rem",
});

export const hamburgerLineStyle = style({
  width: "100%",
  height: "2px",
  backgroundColor: colours.green1200,
  transition: "transform 0.2s ease, opacity 0.2s ease",
});

export const mobileNavContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  maxHeight: "0",
  backgroundColor: colours.green200,
  borderColor: colours.green1200,
  borderStyle: "solid",
  borderWidth: "0 2px",
  transition: "max-height 0.3s ease, border-width 0.1s ease",

  "@media": {
    [breakpoints.tablet]: {
      display: "none",
    },
  },
});

export const mobileNavOpenStyle = style({
  maxHeight: "20rem",
  borderWidth: "0 2px 2px 2px",
});

export const mobileNavLinkStyle = style({
  display: "block",
  color: colours.green1200,
  fontSize: "large",
  fontWeight: "500",
  textAlign: "center",
  padding: "1rem",
  cursor: "pointer",
  transition: "background-color 0.1s linear",

  ":hover": {
    backgroundColor: colours.green400,
  },
});

export const headerLogoStyle = style({
  margin: "0 1.5rem",
  width: "250px",

  "@media": {
    [breakpoints.desktop]: {
      width: "300px",
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
  cursor: "pointer",
  transition: "background-color 0.1s ease-in-out",
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
      display: "block",
    },
  },
});
