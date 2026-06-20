import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Tent, Star, MapPin } from "lucide-react";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import akageraImg from "@/assets/akagera.jpg";
import kigaliNight from "@/assets/kigali-night.jpg.asset.json";
import kingsPalaceImg from "@/assets/kings-palace.jpg";

export const Route = createFileRoute("/camps")({
  head: () => ({
    meta: [
      { title: "Camps & Lodges — INAM WORLD" },
      {
        name: "description",
        content:
          "Hand-picked lodges, eco-camps and boutique hotels across Rwanda — from gorilla-forest retreats to lakeside sanctuaries.",
      },
    ],
    links: [{ rel: "canonical", href: "/camps" }],
  }),
  component: CampsPage,
});

const camps = [
  {
    name: "Bisate Lodge",
    region: "Volcanoes NP",
    type: "Forest Lodge",
    img: volcanoesImg,
    stars: 5,
    blurb: "Wilderness-style cocooned villas at the gates of the gorilla forest.",
  },
  {
    name: "One&Only Gorilla's Nest",
    region: "Volcanoes NP",
    type: "Luxury Lodge",
    img: nyungweImg,
    stars: 5,
    blurb: "Eucalyptus-canopied luxury at the foot of the Virunga.",
  },
  {
    name: "Magashi Camp",
    region: "Akagera NP",
    type: "Tented Camp",
    img: akageraImg,
    stars: 5,
    blurb: "Tented luxury overlooking Lake Rwanyakazinga.",
  },
  {
    name: "One&Only Nyungwe House",
    region: "Nyungwe NP",
    type: "Tea Estate Lodge",
    img: nyungweImg,
    stars: 5,
    blurb: "Sleeping beside a working tea estate, beside the rainforest.",
  },
  {
    name: "Cleo Lake Kivu",
    region: "Lake Kivu · Karongi",
    type: "Lake Hotel",
    img: lakeKivuImg,
    stars: 4,
    blurb: "Quiet shores, hammocks over water, fresh lake tilapia.",
  },
  {
    name: "The Retreat by Heaven",
    region: "Kigali",
    type: "Boutique Hotel",
    img: kigaliNight.url,
    stars: 5,
    blurb: "Solar-powered Kigali sanctuary with rooftop pool.",
  },
  {
    name: "Karenge Bush Camp",
    region: "Akagera NP",
    type: "Seasonal Bush Camp",
    img: akageraImg,
    stars: 4,
    blurb: "Mobile, low-impact camp moving with the seasons.",
  },
  {
    name: "Hôtel des Mille Collines",
    region: "Kigali",
    type: "Iconic City Hotel",
    img: kigaliNight.url,
    stars: 4,
    blurb: "The hotel that became history.",
  },
  {
    name: "Nyanza Heritage Inn",
    region: "Southern Province",
    type: "Boutique Heritage",
    img: kingsPalaceImg,
    stars: 4,
    blurb: "Stay beside the King's palace, breakfast with the Inyambo.",
  },
];

function CampsPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Camps & Lodges</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Every camp, a doorway into the wild.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-stone-warm text-lg">
            We work only with lodges that match our standard: low impact, locally rooted,
            beautifully made.
          </p>
        </Reveal>
      </section>

      <section className="mt-16 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {camps.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.1}>
            <div className="group block relative aspect-[4/5] overflow-hidden bg-forest">
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
              <div className="absolute top-5 left-5 inline-flex items-center gap-1 text-kaki eyebrow">
                <Tent size={14} /> {c.type}
              </div>
              <div className="absolute top-5 right-5 inline-flex items-center gap-1 text-kaki">
                {Array.from({ length: c.stars }).map((_, j) => (
                  <Star key={j} size={12} fill="currentColor" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                <div className="eyebrow text-kaki mb-2 inline-flex items-center gap-1">
                  <MapPin size={12} /> {c.region}
                </div>
                <h2 className="font-display text-2xl mb-2">{c.name}</h2>
                <p className="text-cream/70 text-sm">{c.blurb}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-24 px-6 md:px-16 max-w-[1100px] mx-auto text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl text-forest leading-snug">
            Don't see your taste? Tell us how you sleep best — we'll find your camp.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            to="/contact"
            className="mt-8 inline-flex bg-forest text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-forest-deep transition"
          >
            Enquire
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
