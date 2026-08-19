import { createFileRoute } from "@tanstack/react-router";

// All static Steel Max pages, inlined at build time
const pages = import.meta.glob("../../public/**/index.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function lookup(pathname: string): string | undefined {
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const key = slug ? `../../public/${slug}/index.html` : "../../public/index.html";
  return pages[key];
}

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const html = lookup(new URL(request.url).pathname);
        if (!html)
          return new Response("Página não encontrada", {
            status: 404,
            headers: { "content-type": "text/plain; charset=utf-8" },
          });
        return new Response(html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});
