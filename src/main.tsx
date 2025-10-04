import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/theme.css.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}

    <App />
    {/* </QueryClientProvider> */}
  </StrictMode>
);
