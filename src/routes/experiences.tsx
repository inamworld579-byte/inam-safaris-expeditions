import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Mountain, Coffee, Bird, Sailboat, Crown, Camera, Trees, Heart } from "lucide-react";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import akageraImg from "@/assets/akagera.jpg";
import coffeePicking from "@/assets/coffee-picking.jpg";
import coffeePound from "@/assets/coffee-pound.jpg";
import coffeeProcess from "@/assets/coffee-process.jpg";
import heroRwandaImg from "@/assets/hero-rwanda.jpg";
import kingsPalaceImg from "@/assets/kings-palace.jpg";
import communityGivingImg from "@/assets/Community-givingback.jpg";
import nyungweCanopyImg from "@/assets/Nyungwe-canopy.jpg";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences  INAM WORLD" },
      {
        name: "description",
        content:
          "Gorilla trekking, coffee farms, canopy walks, boat rides, Intore dances and more — the activities that make a journey.",
      },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

const exps = [
  { icon: Mountain, title: "Mountain Gorilla Trekking", region: "Volcanoes NP", img: volcanoesImg },
  { icon: Trees, title: "Chimpanzee Trekking", region: "Nyungwe NP", img: nyungweImg },
  { icon: Camera, title: "Big Five Game Drives", region: "Akagera NP", img: akageraImg },
  {
    icon: Sailboat,
    title: "Lake Kivu Sunset Cruise",
    region: "Karongi · Rubavu",
    img: lakeKivuImg,
  },
  {
    icon: Coffee,
    title: "Cherry to Cup Coffee Tour",
    region: "Volcanic Hillsides",
    img: coffeeProcess,
  },
  { icon: Crown, title: "King's Palace & Inyambo Cattle", region: "Nyanza", img: kingsPalaceImg },
  { icon: Bird, title: "Canopy Walk · 70m High", region: "Nyungwe NP", img: nyungweCanopyImg },
  {
    icon: Heart,
    title: "Community & Cooperative Visit",
    region: "All Provinces",
    img: communityGivingImg,
  },
];

function ExperiencesPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Experiences</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Activities that become memory.
          </h1>
        </Reveal>
      </section>

      <section className="mt-16 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exps.map((e, i) => (
          <Reveal key={e.title} delay={(i % 4) * 0.08}>
            <div className="group relative aspect-[3/4] overflow-hidden bg-forest">
              <img
                src={e.img}
                alt={e.title}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />
              <e.icon className="absolute top-5 left-5 text-kaki" size={22} strokeWidth={1.2} />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <div className="eyebrow text-kaki mb-1">{e.region}</div>
                <h3 className="font-display text-xl">{e.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Coffee deep section */}
      <section className="mt-32 bg-chocolate text-cream py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="eyebrow text-kaki mb-3">INAM Coffee · The Slow Walk</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
              Cherry · Pulp · Ferment · Wash · Sun · Roast · Cup.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: coffeePicking, t: "Cherry", b: "Hand-picked at altitude on volcanic soil." },
              {
                img: coffeePound,
                t: "Process",
                b: "Washed and sun-dried at cooperatives owned by women farmers.",
              },
              {
                img: coffeeProcess,
                t: "Roast",
                b: "Slow-roasted in small batches, packed for your journey home.",
              },
            ].map((c) => (
              <div key={c.t}>
                <img src={c.img} alt={c.t} className="aspect-[4/5] w-full object-cover" />
                <div className="mt-4">
                  <div className="eyebrow text-kaki mb-1">{c.t}</div>
                  <p className="text-cream/80">{c.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
