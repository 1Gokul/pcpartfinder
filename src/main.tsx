import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/theme.css.ts";
import { applyTheme, getPreferredTheme } from "./utils/theme";

// Set before the first render so the correct token set is already on <html>.
applyTheme(getPreferredTheme());

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, unicorn/prefer-query-selector
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
