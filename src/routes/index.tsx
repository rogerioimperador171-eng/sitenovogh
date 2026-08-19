import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steel Max – Instrumentos Odontológicos" },
      {
        name: "description",
        content:
          "Steel Max: instrumentos odontológicos de alta precisão. Fale conosco pelo WhatsApp 35 99763-6366.",
      },
      { property: "og:title", content: "Steel Max – Instrumentos Odontológicos" },
      {
        property: "og:description",
        content:
          "Instrumentos odontológicos de alta precisão. Atendimento pelo WhatsApp 35 99763-6366.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Carregando Steel Max…</p>
    </div>
  );
}
