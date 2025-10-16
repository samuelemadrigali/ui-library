import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts", "**/*.test.ts"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts", // Entry point for the library
      name: "ui-library", // Global variable name
      fileName: (format) => `ui-library.${format}.js`, // Output filenames
      formats: ["es", "cjs"], // Output both ESModule and CommonJS builds
    },
    rollupOptions: {
      // Externalise peer dependencies to avoid including React in the bundle
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
