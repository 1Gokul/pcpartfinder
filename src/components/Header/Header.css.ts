import { style } from "@vanilla-extract/css";
import { breakpoints, colors } from "../../styles/theme.css";

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
  backgroundColor: "green.200",
  borderColor: "green.1200",
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
  color: "gray.900",
  height: "100%",
  fontSize: "xl",
  fontWeight: "500",
  textAlign: "center",
  width: "100px",
  cursor: "pointer",
  transition: "0.2s ease-in-out background-color",
  borderWidth: "0",
  borderColor: "black",
  borderStyle: "solid",
  selectors: {
    "&:last-child:hover": {
      borderRightWidth: "0",
    },
  },
  ":hover": {
    backgroundColor: colors.green400,
    borderWidth: "0 2px",
  },
});
