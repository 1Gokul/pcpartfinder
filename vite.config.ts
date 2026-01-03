import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [react(), vanillaExtractPlugin()],
});

