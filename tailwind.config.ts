import type { Config } from "tailwindcss";
import { colors } from "./design-token";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors,
  },
  plugins: [],
};

export default config;
