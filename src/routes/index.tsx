import { createFileRoute } from "@tanstack/react-router";
// Serve the static Steel Max homepage directly at "/"
import homeHtml from "../../public/index.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(homeHtml, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
});
