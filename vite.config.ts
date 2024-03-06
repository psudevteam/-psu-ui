import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "@psu-ui",
      fileName: (format) => `psu-ui.${format}.tsx`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "tailwindcss",
        "autoprefixer",
        "postcss",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
