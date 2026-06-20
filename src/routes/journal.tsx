import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import akageraImg from "@/assets/akagera.jpg";
import kigaliTour from "@/assets/kigali-tour.jpg.asset.json";
import coffeePicking from "@/assets/coffee-picking.jpg";
import coffeePound from "@/assets/coffee-pound.jpg";
import coffeeProcess from "@/assets/coffee-process.jpg";
import heroRwandaImg from "@/assets/hero-rwanda.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — INAM WORLD" },
      {
        name: "description",
        content: "Field notes, essays and dispatches from Rwanda — the INAM editorial layer.",
      },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

const posts = [
  {
    t: "A morning with the Susa gorilla family",
    k: "Field Note · Volcanoes",
    img: heroRwandaImg,
    date: "May 2026",
  },
  {
    t: "Why Rwandan coffee tastes like the rain",
    k: "Coffee · Origin",
    img: coffeePound,
    date: "April 2026",
  },
  {
    t: "The boats of Lake Kivu at golden hour",
    k: "Journey · Kivu",
    img: coffeeProcess,
    date: "March 2026",
  },
  {
    t: "What Akagera teaches us about coming back",
    k: "Conservation · Akagera",
    img: akageraImg,
    date: "February 2026",
  },
  {
    t: "Kigali, by night and by memory",
    k: "City · Kigali",
    img: kigaliTour.url,
    date: "January 2026",
  },
  { t: "Listening to Nyungwe", k: "Field Note · Nyungwe", img: nyungweImg, date: "December 2025" },
];

function JournalPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">The Journal</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Field notes from the hills.
          </h1>
        </Reveal>
      </section>

      <section className="mt-20 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10">
        {posts.map((p, i) => (
          <Reveal key={p.t} delay={(i % 3) * 0.1}>
            <article className="group">
              <div className="aspect-[4/5] overflow-hidden bg-forest mb-5">
                <img
                  src={p.img}
                  alt={p.t}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
              </div>
              <div className="eyebrow text-chocolate mb-2">
                {p.k} · {p.date}
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-forest cine-link leading-snug">
                {p.t}
              </h2>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
