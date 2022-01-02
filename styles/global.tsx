import { css, Global } from "@emotion/react";

export const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      body[data-theme="light"] {
        --color-bg-primary: "#F3F4F7";
        --color-text-primary: "#1A202C";
      }

      body[data-theme="dark"] {
        --color-bg-primary: "#001114";
        --color-text-primary: "#FCF7F8";
      }

      body {
        background-color: --color-bg-primary;
        color: --color-text-primary;
        font-family: InterVariable, -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        transition: "all 0.25s linear";
      }
    `}
  />
);
