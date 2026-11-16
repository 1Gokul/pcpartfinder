import { style } from "@vanilla-extract/css";
import { breakpoints, colours, fonts } from "../../styles/theme.css";

export const buildViewStatusStyle = style({
  fontFamily: fonts.mono,
  fontSize: "1.125rem",
  textAlign: "center",
  marginBlock: "4rem",
});

export const buildViewCategoryStyle = style({
  marginBlock: "1.5rem",
  "@media": {
    [breakpoints.tablet]: {
      paddingInline: "3rem",
    },
  },
});

export const buildViewCategoryHeadingStyle = style({
  fontFamily: fonts.mono,
  fontSize: "1.125rem",
  fontWeight: 700,
  marginBottom: "0.5rem",
});

export const buildViewItemStyle = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "0.25rem 1rem",
  paddingBlock: "0.75rem",
  borderTop: `3px solid ${colours.green1200}`,
});

export const buildViewItemNameStyle = style({
  fontWeight: 600,
  lineHeight: 1.35,
});

export const buildViewItemMetaStyle = style({
  color: colours.gray,
  fontFamily: fonts.mono,
  fontSize: "0.875rem",
});

export const buildViewPriceStyle = style({
  fontFamily: fonts.mono,
  fontWeight: 600,
});

export const buildViewEmptyStyle = style({
  color: colours.gray,
  fontStyle: "italic",
});

export const buildViewBackLinkStyle = style({
  display: "inline-block",
  marginTop: "2rem",
  fontFamily: fonts.mono,
  textDecoration: "underline",
  textUnderlineOffset: "0.5rem",
  ":hover": {
    color: colours.green800,
    textUnderlineOffset: "0.75rem",
  },
});
