import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mountain, Coffee, Heart, Compass } from "lucide-react";
import heroVideo from "@/assets/inam-hero.mp4.asset.json";
import volcanoesImg from "@/assets/volcanoes-gorilla.jpg";
import akageraImg from "@/assets/akagera.jpg";
import nyungweImg from "@/assets/nyungwe.jpg";
import lakeKivuImg from "@/assets/lake-kivu.jpg";
import kigaliTourImg from "@/assets/kigali-tour.jpg";
import kingsPalaceImg from "@/assets/kings-palace.jpg";
import coffeePicking from "@/assets/coffee-picking.jpg";
import coffeeProcess from "@/assets/coffee-process.jpg";
import coffeePound from "@/assets/coffee-pound.jpg";
import heroRwandaImg from "@/assets/hero-rwanda.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INAM WORLD — It's Never About Me · Rwanda Safaris, Gorillas & Coffee" },
      {
        name: "description",
        content:
          "Step into Rwanda with INAM WORLD. Mountain gorillas, Big Five safaris, Lake Kivu sunsets, Nyungwe rainforest canopies and the world's finest coffee  curated by John the Guide.",
      },
      { property: "og:title", content: "INAM WORLD Discover Rwanda" },
      {
        property: "og:description",
        content: "Tailor-made Rwandan journeys. Nature. Coffee. Culture.",
      },
      { property: "og:image", content: "/og.jpg" },
    ],
  }),
  component: Home,
});

const FEATURED = [
  {
    slug: "volcanoes",
    name: "Volcanoes National Park",
    coords: "1.48° S, 29.50° E",
    img: volcanoesImg,
    tag: "Gorillas in the mist",
  },
  {
    slug: "akagera",
    name: "Akagera National Park",
    coords: "1.88° S, 30.71° E",
    img: akageraImg,
    tag: "Rwanda's Big Five savannah",
  },
  {
    slug: "nyungwe",
    name: "Nyungwe Forest",
    coords: "2.50° S, 29.20° E",
    img: nyungweImg,
    tag: "Canopy of ancient rainforest",
  },
  {
    slug: "lake-kivu",
    name: "Lake Kivu",
    coords: "2.04° S, 29.22° E",
    img: lakeKivuImg,
    tag: "Inland sea of silver light",
  },
  {
    slug: "kigali",
    name: "Kigali",
    coords: "1.95° S, 30.06° E",
    img: kigaliTourImg,
    tag: "A capital that remembers, and rises",
  },
  {
    slug: "nyanza",
    name: "King's Palace · Nyanza",
    coords: "2.35° S, 29.74° E",
    img: kingsPalaceImg,
    tag: "Heritage of the Rwandan monarchy",
  },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="bg-background text-foreground">
      {/* HERO VIDEO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          {videoFailed ? (
            <img
              src={heroRwandaImg}
              alt="Rwanda landscape"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={heroVideo.url}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroRwandaImg}
              onError={() => setVideoFailed(true)}
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 6;
              }}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-transparent to-forest-deep/80" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-16 max-w-[1400px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="eyebrow text-kaki mb-5"
          >
            1.9577° S, 30.1127° E · Rwanda
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display text-cream text-5xl md:text-8xl leading-[0.95] max-w-5xl text-balance"
          ></motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1.4 }}
            className="text-cream/80 mt-6 max-w-xl text-lg font-light"
          >
            Step into Rwanda the land of a thousand hills, mountain gorillas, ancient rainforests
            and the world's most patient coffee.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/journeys"
              className="group inline-flex items-center gap-3 bg-kaki text-forest-deep px-7 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition"
            >
              Begin a Journey{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-3 border border-cream/40 text-cream px-7 py-4 text-sm tracking-widest uppercase hover:bg-cream/10 transition"
            >
              Explore Destinations
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-xs eyebrow"
        >
          ↓ Scroll
        </motion.div>
      </section>

      {/* STATEMENT */}
      <section className="py-32 px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-6">We Are INAM</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-7xl leading-tight text-forest max-w-5xl text-balance">
            It's never about <em className="text-chocolate">me</em> it's about the land, the people,
            and the traveller who arrives a stranger and leaves a story.
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl">
            <p className="text-stone-warm text-lg leading-relaxed">
              INAM WORLD is a Rwandan luxury travel house and coffee brand, born from a lifetime of
              guiding travellers through East Africa's wildest, kindest places.
            </p>
            <p className="text-stone-warm text-lg leading-relaxed">
              Every itinerary is hand-crafted by John the Guide woven with conservation, community
              uplift, and quiet, cinematic moments you cannot Google.
            </p>
            <p className="text-stone-warm text-lg leading-relaxed">
              We work small, slow, and intentional. Nature first. People always.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-28 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="eyebrow text-chocolate mb-4">What We Do</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-forest max-w-3xl mb-16">
              Four pillars. One philosophy.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Compass,
                title: "Tailor-Made Itineraries",
                body: "Every journey is hand-crafted around your pace, curiosity and dreams  from gorilla permits to private boat sunsets on Lake Kivu.",
              },
              {
                icon: Mountain,
                title: "Guided Experiences",
                body: "Walk with John the Guide. Trek volcanoes, canopy-walk in Nyungwe, track the Big Five in Akagera always with a local storyteller beside you.",
              },
              {
                icon: Heart,
                title: "Conservation & Impact",
                body: "A portion of every booking funds anti-poaching units, women cooperatives, and gorilla habitat protection across the region.",
              },
              {
                icon: Coffee,
                title: "Travel With Purpose",
                body: "From cherry to cup  visit our coffee partners, learn the craft, and carry home beans that fund the farmers who grew them.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group border-t border-forest/20 pt-6 h-full">
                  <s.icon className="text-chocolate mb-6" size={32} strokeWidth={1.2} />
                  <h3 className="font-display text-2xl text-forest mb-3">{s.title}</h3>
                  <p className="text-stone-warm text-sm leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATION */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 ken-burns">
          <img
            src={volcanoesImg}
            alt="Volcanoes National Park"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-[1400px] mx-auto text-cream">
          <Reveal>
            <div className="eyebrow text-kaki mb-4">Feature Destination · 1.48° S, 29.50° E</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-8xl max-w-4xl leading-[0.95]">
              Where giants walk among the mist.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream/80 mt-6 max-w-xl">
              Volcanoes National Park home of the mountain gorilla A morning here will redraw the
              way you understand wildness.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/destinations/$slug"
              params={{ slug: "volcanoes" }}
              className="mt-8 inline-flex items-center gap-3 cine-link text-kaki text-sm tracking-widest uppercase"
            >
              Discover Volcanoes <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DESTINATIONS GRID */}
      <section className="py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Reveal>
              <div className="eyebrow text-chocolate mb-3">The Collection</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-6xl text-forest">
                Six worlds. One country.
              </h2>
            </Reveal>
          </div>
          <Link
            to="/destinations"
            className="cine-link text-forest text-sm tracking-widest uppercase hidden md:inline"
          >
            All Destinations
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 0.1}>
              <Link
                to="/destinations/$slug"
                params={{ slug: d.slug }}
                className="group block relative aspect-[4/5] overflow-hidden bg-forest"
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <div className="eyebrow text-kaki mb-2">{d.coords}</div>
                  <h3 className="font-display text-2xl md:text-3xl">{d.name}</h3>
                  <p className="text-cream/70 text-sm mt-1">{d.tag}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COFFEE */}
      <section className="py-28 px-6 md:px-16 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
              src={coffeePound}
              alt="Rwandan coffee preparation"
              className="w-full aspect-[4/5] object-cover"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <div className="eyebrow text-chocolate mb-4">INAM Coffee</div>
              <h2 className="font-display text-4xl md:text-6xl text-forest leading-tight mb-6">
                From cherry to cup the long, patient walk.
              </h2>
              <p className="text-stone-warm leading-relaxed">
                Our coffee is grown on the volcanic slopes of the Virunga, picked by hand, washed in
                mountain water, and roasted by cooperatives whose families have farmed these hills
                for generations.
              </p>
              <Link
                to="/experiences"
                className="mt-8 inline-flex items-center gap-3 cine-link text-forest text-sm tracking-widest uppercase"
              >
                Coffee Experiences <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNAL TEASE */}
      <section className="bg-cream py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="eyebrow text-chocolate mb-3">Journal</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl text-forest mb-12 max-w-3xl">
              Field notes from the hills.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                t: "A morning with the Susa gorilla family",
                k: "Field Note · Volcanoes",
                img: volcanoesImg,
              },
              {
                t: "Why Rwandan coffee tastes like the rain",
                k: "Coffee · Origin",
                img: coffeeProcess,
              },
              {
                t: "The boats of Lake Kivu at golden hour",
                k: "Journey · Kivu",
                img: heroRwandaImg,
              },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.1}>
                <Link to="/journal" className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-forest/10">
                    <img
                      src={p.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1400ms]"
                    />
                  </div>
                  <div className="eyebrow text-chocolate mb-2">{p.k}</div>
                  <h3 className="font-display text-2xl text-forest cine-link">{p.t}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
