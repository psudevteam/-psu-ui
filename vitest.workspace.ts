import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/*",
  "tests/*/vitest.config.{e2e,unit}.ts",
  {
    test: {
      name: "happy-dom",
      root: "./src",
      environment: "happy-dom",
      setupFiles: ["./setup.happy-dom.ts"],
    },
  },
  {
    test: {
      name: "node",
      root: "./src",
      environment: "node",
      setupFiles: ["./setup.node.ts"],
    },
  },
]);
