import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/theme.css.ts";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, unicorn/prefer-query-selector
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}

    <App />
    {/* </QueryClientProvider> */}
  </StrictMode>
);
