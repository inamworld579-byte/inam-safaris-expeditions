import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Heart, Trees, Users, Coffee, Shield } from "lucide-react";
import heroRwandaImg from "@/assets/hero-rwanda.jpg";
import coffeePound from "@/assets/coffee-pound.jpg";
import coffeePicking from "@/assets/coffee-picking.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — INAM WORLD" },
      {
        name: "description",
        content:
          "Conservation, community uplift and ethical travel — how INAM gives back to the hills, the gorillas and the people of Rwanda.",
      },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <div>
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={heroRwandaImg}
          alt="People in Rwanda"
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 to-forest-deep" />
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-[1400px] mx-auto text-cream">
          <Reveal>
            <div className="eyebrow text-kaki mb-4">Impact</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
              Luxury that earns its place in the land.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl text-forest max-w-4xl leading-snug">
            INAM stands for "It's Never About Me". It's not a slogan — it's an accounting principle.
            A portion of every booking funds conservation, community and craft.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            ["2,400+", "Travellers hosted since 2018"],
            ["18", "Community cooperative partners"],
            ["6", "Active conservation projects"],
            ["100%", "Local Rwandan guides"],
          ].map(([n, l]) => (
            <Reveal key={l}>
              <div className="border-t-2 border-chocolate pt-6">
                <div className="font-display text-6xl text-forest">{n}</div>
                <div className="text-stone-warm text-sm mt-2">{l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Shield,
              t: "Gorilla Habitat Protection",
              b: "We partner with rangers in Volcanoes NP to fund anti-poaching patrols and forest restoration along the Virunga corridor.",
            },
            {
              icon: Users,
              t: "Women's Coffee Cooperatives",
              b: "Our coffee partners are 4 women-led cooperatives across the western volcanic slopes.",
            },
            {
              icon: Trees,
              t: "Reforestation Volunteering",
              b: "Travellers join Umuganda — Rwanda's national community work day — planting indigenous trees beside locals.",
            },
            {
              icon: Coffee,
              t: "Youth Barista Training",
              b: "We sponsor barista and hospitality training for young people from Kigali's poorer hillside neighbourhoods.",
            },
            {
              icon: Heart,
              t: "Genocide Survivor Support",
              b: "A share of every Kigali Memorial visit is donated directly to survivor counselling programmes.",
            },
            {
              icon: Trees,
              t: "Plastic-Free Camps",
              b: "We only book lodges committed to zero single-use plastic.",
            },
          ].map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.1}>
              <div>
                <p.icon className="text-chocolate mb-4" size={28} strokeWidth={1.2} />
                <h3 className="font-display text-2xl text-forest mb-2">{p.t}</h3>
                <p className="text-stone-warm text-sm leading-relaxed">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <img
            src={coffeePound}
            alt="Coffee processing"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div>
            <div className="eyebrow text-chocolate mb-3">A Story from the Hills</div>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight mb-6">
              "My daughters now study in Musanze because of the coffee."
            </h2>
            <p className="text-stone-warm text-lg leading-relaxed">
              — Mukamana Beatrice, founder of one of our partner cooperatives in the Virunga
              foothills. Her cooperative employs 38 women and exports two tonnes of speciality
              coffee a year.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
