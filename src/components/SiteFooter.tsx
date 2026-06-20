import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Instagram, Facebook, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream pt-20 pb-10 mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="eyebrow text-kaki mb-3">INAM World</div>
          <h3 className="font-display text-3xl md:text-4xl leading-snug mb-4">
            It's Never About Me — it's about you, the land, and the people.
          </h3>
          <p className="text-cream/70 text-sm leading-relaxed mb-6">
            Tailor-made Rwandan journeys curated by Jean de Dieu Manishimwe — John the Guide.
            Safaris, gorillas, coffee farms, and cultural uplift across East Africa.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://wa.me/250788806824"
              className="cine-link inline-flex items-center gap-2 w-fit"
            >
              <MessageCircle size={16} className="text-kaki" /> +250 788 806 824 · WhatsApp
            </a>
            <a
              href="mailto:inamworld579@gmail.com"
              className="cine-link inline-flex items-center gap-2 w-fit"
            >
              <Mail size={16} className="text-kaki" /> inamworld579@gmail.com
            </a>
            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-kaki">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-kaki">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-kaki mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {[
              ["Destinations", "/destinations"],
              ["Camps", "/camps"],
              ["Regions", "/regions"],
              ["Experiences", "/experiences"],
              ["Journeys", "/journeys"],
              ["Impact", "/impact"],
              ["Journal", "/journal"],
              ["Enquire", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="cine-link">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="eyebrow text-kaki mb-4 inline-flex items-center gap-2">
            <MapPin size={14} /> Rwanda — The Land of a Thousand Hills
          </div>
          <div className="relative rounded-lg overflow-hidden border border-cream/10 bg-forest/40">
            <iframe
              title="Rwanda map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=28.85%2C-2.85%2C30.90%2C-1.05&amp;layer=mapnik&amp;marker=-1.9577%2C30.1127"
              className="w-full h-64"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-forest/20" />
          </div>
          <p className="text-xs text-cream/50 mt-2">
            Volcanoes · Akagera · Nyungwe · Lake Kivu · Kigali · Nyanza · Lake Kivu (Rwanda) ·
            Nyungwe NP
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between text-xs text-cream/50 gap-2">
        <span>© {new Date().getFullYear()} INAM WORLD. All journeys tailor-crafted in Kigali.</span>
        <span>Conservation · Coffee · Community</span>
      </div>
    </footer>
  );
}
