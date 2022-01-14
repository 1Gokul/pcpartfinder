import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }
      body[data-theme="light"] {
        --color-bg-primary: #f3f4f7;
        --color-bg-primary-translucent: rgba(243, 244, 247, 0.9);
        --color-text-primary: #212121;
        --color-text-secondary: #1d2431;
        --color-text-gray: #4d5155;
        --color-border-gray: #cbd5e0;
        --color-theme-primary: #86e6e1;
      }

      body[data-theme="dark"] {
        --color-bg-primary: #001114;
        --color-bg-primary-translucent: rgba(0, 17, 20, 0.8);
        --color-text-primary: #fcf7f8;
        --color-text-secondary: #d7dce4;
        --color-text-gray: #a3b3ca;
        --color-border-gray: #4a5568;
        --color-theme-primary: #005d6b;
      }

      body {
        background-color: var(--color-bg-primary);
        color: var(--color-text-primary);
        margin: 0;
        border-radius: 0;
        font-family: InterVariable, -apple-system, BlinkMacSystemFont, Segoe UI,
          Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
          Segoe UI Symbol;
        transition: all 0.2s linear;
      }

      a {
        color: var(--color-text-primary);
        text-decoration: none;
      }
    `}
  />
);
