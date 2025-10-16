import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import tailwindcss from "@tailwindcss/vite";

const alsoExternal = ["tailwind-merge", "tailwind-variants", "lucide-react"];
const peer = Object.keys(peerDependencies ?? []);

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
    sourcemap: true,
    lib: {
      entry: "./src/index.ts",
      name: "ui-library",
      fileName: (format) => `ui-library.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [...peer, ...alsoExternal],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
