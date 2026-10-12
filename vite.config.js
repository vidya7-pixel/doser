import { fileURLToPath } from "node:url";
import { defineConfig } from "vite-plus";
import websiteConfig from "./apps/website/vite.config.js";

export default defineConfig({
  ...websiteConfig,
  root: fileURLToPath(new URL("./apps/website", import.meta.url)),
  defaultPackage: "./apps/website",
  test: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  run: {
    cache: true,
  },
});
