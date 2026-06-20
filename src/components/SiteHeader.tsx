import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-transparent.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/camps", label: "Camps" },
  { to: "/regions", label: "Regions" },
  { to: "/experiences", label: "Experiences" },
  { to: "/journeys", label: "Journeys" },
  { to: "/impact", label: "Impact" },
  { to: "/journal", label: "Journal" },
  { to: "/contact", label: "Enquire" },
];

function LetterHover({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {text.split("").map((c, i) => (
        <span key={i} className="menu-letter">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled || open ? "bg-forest-deep/90 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col items-start gap-2">
          <div className="w-full flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="INAM WORLD"
                className="h-12 md:h-14 w-auto mix-blend-screen brightness-200 contrast-150"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-cream text-xl md:text-2xl tracking-wide">
                  INAM
                </span>
                <span className="eyebrow text-kaki text-[0.55rem]">It's Never About Me</span>
              </span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="flex items-center gap-3 text-cream group cursor-pointer"
            >
              <span className="eyebrow hidden sm:inline">{open ? "Close" : "Menu"}</span>
              <span className="w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center group-hover:border-kaki group-hover:bg-kaki/10 transition">
                {open ? <X size={18} /> : <Menu size={18} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-forest-deep text-cream"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,var(--kaki),transparent_60%)]" />
            <div className="relative h-full flex flex-col pt-28 md:pt-32 px-6 md:px-16 overflow-y-auto">
              <div className="eyebrow text-kaki mb-8">The INAM Index</div>
              <nav className="flex flex-col gap-3 md:gap-5 pb-12">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="font-display text-4xl md:text-7xl leading-tight block hover:text-kaki transition-colors"
                    >
                      <span className="text-kaki/60 text-sm font-sans mr-4 align-middle">
                        0{i + 1}
                      </span>
                      <LetterHover text={item.label} />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pb-10 grid md:grid-cols-3 gap-6 text-sm text-cream/70 border-t border-cream/10 pt-6">
                <div>
                  <div className="eyebrow text-kaki mb-2">Speak with John</div>
                  <a href="https://wa.me/250788806824" className="cine-link">
                    WhatsApp +250 788 806 824
                  </a>
                </div>
                <div>
                  <div className="eyebrow text-kaki mb-2">Write</div>
                  <a href="mailto:inamworld579@gmail.com" className="cine-link">
                    inamworld579@gmail.com
                  </a>
                </div>
                <div>
                  <div className="eyebrow text-kaki mb-2">Follow</div>
                  <span>INAM WORLD · Instagram · Facebook · TikTok</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
