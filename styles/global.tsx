import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body[data-theme="light"] {
        --color-bg-primary: #f3f4f7;
        --color-bg-primary-translucent: rgba(243, 244, 247, 0.9);
        --color-text-primary: #1a202c;
        --color-border-gray: #cbd5e0;
      }

      body[data-theme="dark"] {
        --color-bg-primary: #001114;
        --color-bg-primary-translucent: rgba(0, 17, 20, 0.8);
        --color-text-primary: #fcf7f8;
        --color-border-gray: #4a5568;
      }

      body {
        background-color: var(--color-bg-primary);
        color: var(--color-text-primary);
        margin: 0;
        font-family: InterVariable, -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        transition: all 0.2s linear;
      }
    `}
  />
);
