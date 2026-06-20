import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import akageraImg from "@/assets/akagera.jpg";
import kigaliNight from "@/assets/kigali-night.jpg.asset.json";

export const Route = createFileRoute("/regions")({
  head: () => ({
    meta: [
      { title: "Regions — INAM WORLD" },
      {
        name: "description",
        content:
          "Rwanda's four provinces and beyond — geographic storytelling layer of our INAM collection.",
      },
    ],
    links: [{ rel: "canonical", href: "/regions" }],
  }),
  component: RegionsPage,
});

const regions = [
  {
    name: "Northern Province",
    sub: "Volcanoes & Virunga",
    img: volcanoesImg,
    body: "The Virunga volcanoes rise here in a chain of green giants — Karisimbi, Bisoke, Sabyinyo — sheltering the mountain gorillas and golden monkeys. This is Rwanda's most cinematic landscape, wrapped in cloud and farm terraces.",
  },
  {
    name: "Eastern Province",
    sub: "Savannah & Lakes",
    img: akageraImg,
    body: "Open plains of Akagera, the long Akagera river system, and a chain of papyrus-fringed lakes. This is Rwanda's Big Five country — and one of Africa's quiet conservation triumphs.",
  },
  {
    name: "Western Province",
    sub: "Lake Kivu & Nyungwe",
    img: lakeKivuImg,
    body: "The slow, silvered shore of Lake Kivu and the ancient rainforest of Nyungwe. A region for long boat rides, canopy walks and tea estates that go on like the sea.",
  },
  {
    name: "Southern Province",
    sub: "Heritage & Hills",
    img: nyungweImg,
    body: "The cultural heart of Rwanda — Nyanza's royal palace, Butare's ethnographic museums, terraced hills that hold the country's deepest stories.",
  },
  {
    name: "Kigali · Capital",
    sub: "City of Hills",
    img: kigaliNight.url,
    body: "A capital draped across a thousand ridges. Galleries, jazz, memorials, cooperatives, and a coffee culture quietly leading the world.",
  },
];

function RegionsPage() {
  return (
    <div>
      <section className="pt-40 pb-16 px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Regions of Rwanda</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            A small country, told province by province.
          </h1>
        </Reveal>
      </section>

      <div className="space-y-0">
        {regions.map((r, i) => (
          <section key={r.name} className="relative">
            <div
              className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[80vh] overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover ken-burns" />
              </div>
              <div className="flex items-center bg-cream px-8 md:px-16 py-16 md:py-0">
                <Reveal>
                  <div>
                    <div className="eyebrow text-chocolate mb-3">{r.sub}</div>
                    <h2 className="font-display text-4xl md:text-6xl text-forest leading-tight mb-6">
                      {r.name}
                    </h2>
                    <p className="text-stone-warm text-lg leading-relaxed max-w-lg">{r.body}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
