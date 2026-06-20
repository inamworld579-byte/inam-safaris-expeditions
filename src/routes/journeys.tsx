import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Calendar } from "lucide-react";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import akageraImg from "@/assets/akagera.jpg";
import kigaliNight from "@/assets/kigali-night.jpg.asset.json";
import coffeePicking from "@/assets/coffee-picking.jpg";
import coffeeProcess from "@/assets/coffee-process.jpg";

export const Route = createFileRoute("/journeys")({
  head: () => ({
    meta: [
      { title: "Journeys — INAM WORLD" },
      {
        name: "description",
        content:
          "Multi-day curated itineraries across Rwanda — gorillas, coffee, lakes and culture, stitched into one unforgettable journey.",
      },
    ],
    links: [{ rel: "canonical", href: "/journeys" }],
  }),
  component: JourneysPage,
});

const journeys = [
  {
    slug: "land-of-mist",
    title: "Land of Mist · 7 Days",
    img: volcanoesImg,
    nights: "6 nights",
    flow: [
      "Kigali arrival & memorial",
      "Volcanoes · Gorillas",
      "Volcanoes · Golden monkeys",
      "Lake Kivu drive",
      "Lake Kivu · Boats & coffee island",
      "Lake Kivu · Rest day",
      "Return Kigali",
    ],
  },
  {
    slug: "rwanda-grand-tour",
    title: "Rwanda Grand Tour · 12 Days",
    img: lakeKivuImg,
    nights: "11 nights",
    flow: [
      "Kigali",
      "Akagera · Big Five",
      "Akagera · Boat safari",
      "Akagera → Kigali → Nyanza",
      "Nyanza heritage",
      "Nyungwe rainforest",
      "Nyungwe canopy & chimps",
      "Lake Kivu drive",
      "Lake Kivu",
      "Volcanoes",
      "Volcanoes · Gorillas",
      "Return Kigali",
    ],
  },
  {
    slug: "coffee-trail",
    title: "The Coffee Trail · 5 Days",
    img: coffeeProcess,
    nights: "4 nights",
    flow: [
      "Kigali roasters",
      "Drive to Lake Kivu coffee island",
      "Cooperative visit & cupping",
      "Volcanic hill farms",
      "Return Kigali",
    ],
  },
  {
    slug: "wild-and-quiet",
    title: "Wild & Quiet · 9 Days",
    img: nyungweImg,
    nights: "8 nights",
    flow: [
      "Kigali",
      "Nyungwe",
      "Nyungwe canopy",
      "Drive Kivu",
      "Kivu rest",
      "Drive Volcanoes",
      "Gorillas",
      "Bisoke hike",
      "Return",
    ],
  },
  {
    slug: "kigali-essentials",
    title: "Kigali in 48 Hours",
    img: kigaliNight.url,
    nights: "2 nights",
    flow: ["Arrival · Memorial · dinner Heaven", "City walking tour · markets · galleries · jazz"],
  },
  {
    slug: "big-five-weekend",
    title: "Akagera Big Five Weekend",
    img: akageraImg,
    nights: "3 nights",
    flow: [
      "Kigali → Akagera",
      "Morning & sunset game drives",
      "Boat safari & behind-the-scenes",
      "Return Kigali",
    ],
  },
];

function JourneysPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Journeys</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Itineraries written like episodes.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-stone-warm text-lg">
            Pick a journey or use it as a starting point — every itinerary is then tailored to you,
            day by day, lodge by lodge.
          </p>
        </Reveal>
      </section>

      <section className="mt-16 px-6 md:px-16 max-w-[1400px] mx-auto space-y-16">
        {journeys.map((j, i) => (
          <Reveal key={j.slug}>
            <div className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 ? "" : ""}`}>
              <div className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-forest">
                  <img src={j.img} alt={j.title} className="w-full h-full object-cover ken-burns" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="eyebrow text-chocolate mb-2 inline-flex items-center gap-2">
                  <Calendar size={14} /> {j.nights}
                </div>
                <h2 className="font-display text-3xl md:text-5xl text-forest leading-tight mb-6">
                  {j.title}
                </h2>
                <ol className="space-y-2 mb-8">
                  {j.flow.map((step, k) => (
                    <li key={k} className="flex gap-4 text-stone-warm">
                      <span className="text-chocolate font-display text-lg w-8">Day {k + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 cine-link text-forest text-sm tracking-widest uppercase"
                >
                  Enquire about this journey <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
