import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { destinations } from "@/lib/destinations";
import { Reveal } from "@/components/Reveal";
import { MapPin, Tent, Mountain, Waves, Building2, Crown, Trees } from "lucide-react";
import { useState } from "react";

const TYPE_ICON = {
  park: Mountain,
  city: Building2,
  lake: Waves,
  heritage: Crown,
  forest: Trees,
};

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations  INAM WORLD" },
      {
        name: "description",
        content:
          "Every corner of Rwanda  Volcanoes, Akagera, Nyungwe, Lake Kivu, Kigali, Nyanza and the lake shores. Explore the INAM collection.",
      },
      { property: "og:title", content: "Destinations  INAM WORLD" },
      { property: "og:description", content: "Explore Rwanda's iconic places." },
    ],
    links: [{ rel: "canonical", href: "/destinations" }],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const [filter, setFilter] = useState<string>("all");
  const isIndexPage = useRouterState({
    select: (state) => state.location.pathname === "/destinations",
  });
  const filtered = filter === "all" ? destinations : destinations.filter((d) => d.type === filter);

  if (!isIndexPage) {
    return <Outlet />;
  }

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Global Map · Rwanda</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Geography is our navigation.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-stone-warm text-lg">
            Eight destinations, one country. Filter by terrain, hover for a glimpse, click for the
            deep journey.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {[
            ["all", "All"],
            ["park", "Parks"],
            ["forest", "Forests"],
            ["lake", "Lakes"],
            ["city", "Cities"],
            ["heritage", "Heritage"],
          ].map(([k, l]) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition cursor-pointer ${
                filter === k
                  ? "bg-forest text-cream border-forest"
                  : "border-forest/30 text-forest hover:bg-forest/5"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-16 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6">
        {filtered.map((d, i) => {
          const Icon = TYPE_ICON[d.type];
          return (
            <Reveal key={d.slug} delay={(i % 2) * 0.1}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group block relative aspect-[3/4] md:aspect-[16/10] overflow-hidden bg-forest"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 text-kaki eyebrow">
                  <Icon size={14} /> {d.type}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
                  <div className="eyebrow text-kaki mb-2 inline-flex items-center gap-1">
                    <MapPin size={12} /> {d.coords}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl mb-2">{d.name}</h2>
                  <p className="text-cream/70 max-w-md">{d.tag}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}
