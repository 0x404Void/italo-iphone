import { createFileRoute } from "@tanstack/react-router";
import { ItaloHome } from "@/components/italo-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ítalo iPhone | Seu próximo iPhone" },
      {
        name: "description",
        content: "iPhones novos e seminovos com procedência, garantia e atendimento humano. Fale com a equipe Ítalo iPhone.",
      },
      { property: "og:title", content: "Ítalo iPhone | Seu próximo iPhone" },
      {
        property: "og:description",
        content: "Procedência, preço justo e atendimento que fala a sua língua.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ItaloHome,
});
