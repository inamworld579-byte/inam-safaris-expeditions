import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getDestination, destinations } from "@/lib/destinations";
type Destination = NonNullable<ReturnType<typeof getDestination>>;
import { Reveal } from "@/components/Reveal";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Mountain,
  Waves,
  Building2,
  Crown,
  Trees,
  Check,
  MessageCircle,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TYPE_ICON: Record<string, typeof Mountain> = {
  park: Mountain,
  city: Building2,
  lake: Waves,
  heritage: Crown,
  forest: Trees,
};

export const Route = createFileRoute("/destinations/$slug")({
  head: ({ params }) => {
    const d = getDestination(params.slug);
    return {
      meta: [
        { title: `${d?.name ?? "Destination"}  INAM WORLD` },
        { name: "description", content: d?.intro ?? "" },
        { property: "og:title", content: `${d?.name}  INAM WORLD` },
        { property: "og:description", content: d?.intro ?? "" },
        { property: "og:image", content: d?.img ?? "" },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
    };
  },
  loader: ({ params }) => {
    const d = getDestination(params.slug);
    if (!d) throw notFound();
    return d;
  },
  notFoundComponent: () => (
    <div className="pt-40 px-6 text-center">
      <h1 className="font-display text-4xl text-forest">Destination not found</h1>
      <Link to="/destinations" className="cine-link text-chocolate mt-4 inline-block">
        Back to all destinations
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }: { error: Error; reset: () => void }) => (
    <div className="pt-40 px-6 text-center">
      <h1 className="font-display text-4xl text-forest">Something went wrong</h1>
      <p className="text-stone-warm mt-2">{error.message}</p>
      <button onClick={reset} className="cine-link text-chocolate mt-4">
        Try again
      </button>
    </div>
  ),
  component: DetailPage,
});

function DetailPage() {
  const d = Route.useLoaderData();
  if (!d) throw notFound();
  const Icon = TYPE_ICON[d.type];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[90vh] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/50 via-transparent to-forest-deep" />
        </motion.div>
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 md:px-16 max-w-[1400px] mx-auto text-cream">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-kaki mb-8 w-fit"
          >
            <ArrowLeft size={16} /> All Destinations
          </Link>
          <div className="eyebrow text-kaki mb-3 inline-flex items-center gap-2">
            <Icon size={14} /> {d.region} · {d.coords}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl"
          >
            {d.name}
          </motion.h1>
          <p className="text-cream/80 mt-6 max-w-2xl text-lg">{d.tag}</p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 md:px-16 max-w-[1100px] mx-auto">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl text-forest leading-snug text-balance">
            {d.story}
          </p>
        </Reveal>
      </section>

      {/* META BAR */}
      <section className="bg-cream py-12 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Calendar, label: "Best Time", value: d.bestTime },
            { icon: Clock, label: "Suggested Duration", value: d.duration },
            { icon: MapPin, label: "Region", value: d.region },
          ].map((m) => (
            <div key={m.label} className="flex items-start gap-4">
              <m.icon className="text-chocolate mt-1" size={22} strokeWidth={1.2} />
              <div>
                <div className="eyebrow text-chocolate mb-1">{m.label}</div>
                <div className="font-display text-xl text-forest">{m.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <div>
            <div className="eyebrow text-chocolate mb-3">Experiences</div>
            <h2 className="font-display text-4xl md:text-5xl text-forest leading-tight">
              What you can do, slowly and well.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {d.experiences.map((e: string) => (
              <li key={e} className="flex items-start gap-3 border-b border-forest/15 pb-4">
                <Check className="text-chocolate mt-1" size={18} />
                <span className="text-stone-warm text-lg">{e}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-forest text-cream py-24 px-6 md:px-16">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Build your journey to {d.name}.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-cream/80 mt-6 text-lg">
              Tell us when you'd like to travel, who you're travelling with, and we'll craft a
              journey just for you.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-kaki text-forest-deep px-8 py-4 text-sm tracking-widest uppercase hover:bg-cream transition"
              >
                Enquire Now
              </Link>
              <a
                href="https://wa.me/250788806824"
                className="border border-cream/40 text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-cream/10 transition inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp John
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-24 px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-3">Continue Exploring</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-forest mb-10">
            Other destinations
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {destinations
            .filter((x) => x.slug !== d.slug)
            .slice(0, 3)
            .map((o) => (
              <Link
                key={o.slug}
                to="/destinations/$slug"
                params={{ slug: o.slug }}
                className="group block relative aspect-[4/5] overflow-hidden bg-forest"
              >
                <img
                  src={o.img}
                  alt={o.name}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <h3 className="font-display text-2xl">{o.name}</h3>
                  <p className="text-cream/70 text-sm">{o.tag}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
