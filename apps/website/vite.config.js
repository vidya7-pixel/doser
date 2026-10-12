import { fileURLToPath } from "node:url";
import { defineConfig } from "vite-plus";

/** @param {import("vite-plus").ViteDevServer | import("vite-plus").PreviewServer} server */
function configureDoserRoute(server) {
  server.middlewares.use((request, _response, next) => {
    if (request.url === "/products/doser" || request.url?.startsWith("/products/doser?")) {
      request.url = request.url.replace("/products/doser", "/products/doser/");
    }
    next();
  });
}

export default defineConfig({
  plugins: [
    {
      name: "doser-route",
      configureServer: configureDoserRoute,
      configurePreviewServer: configureDoserRoute,
    },
  ],
  build: {
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        doser: fileURLToPath(new URL("./products/doser/index.html", import.meta.url)),
      },
    },
  },
});
