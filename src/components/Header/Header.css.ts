import { style } from "@vanilla-extract/css";
import { breakpoints, colours } from "../../styles/theme.css";

export const headerContainerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "12vh",
  marginLeft: "initial",
  marginRight: "initial",
  width: "100%",
  position: "initial",
  marginTop: "0",
  top: "0.25rem",
  zIndex: 9999,
  borderWidth: "0 0 1px 0",
  backgroundColor: colours.green200,
  borderColor: colours.green1200,
  borderStyle: "solid",

  "@media": {
    [breakpoints.tablet]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "75vw",
      position: "sticky",
      marginTop: "2rem",
      borderWidth: "2px",
    },
  },
});

export const headerLogoStyle = style({
  margin: "0 1.5rem",
  width: "250px",

  "@media": {
    [breakpoints.tablet]: {
      width: "300px",
    },
  },
});

export const desktopNavStyle = style({
  display: "flex",
  height: "100%",
});

export const desktopNavLinkStyle = style({
  color: colours.green1000,
  height: "100%",
  fontSize: "large",
  fontWeight: "500",
  textAlign: "center",
  width: "7rem",
  cursor: "pointer",
  transition: "background-color 0.1s linear",
  borderColor: colours.green200,
  borderStyle: "solid",
  borderWidth: "0 2px",
  ":last-child": {
    borderRight: "0",
  },
  ":hover": {
    backgroundColor: colours.green400,
    borderColor: colours.green1200,
  },
});
