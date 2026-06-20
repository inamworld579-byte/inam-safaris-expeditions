import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { MessageCircle, Mail, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Enquire — INAM WORLD" },
      {
        name: "description",
        content:
          "Tell us about your dream Rwandan journey and John the Guide will write back personally.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    travellers: "2",
    duration: "7-10 days",
    month: "",
    budget: "",
    interests: [] as string[],
    message: "",
  });

  const interestsList = [
    "Mountain Gorillas",
    "Big Five Safari",
    "Nyungwe & Chimps",
    "Lake Kivu",
    "Coffee Experiences",
    "Cultural & Heritage",
    "Honeymoon",
    "Photography",
    "Conservation Focus",
  ];

  function toggle(i: string) {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(i) ? f.interests.filter((x) => x !== i) : [...f.interests, i],
    }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Hello John,%0A%0AMy name is ${form.name} from ${form.country}.%0A%0ATravellers: ${form.travellers}%0ADuration: ${form.duration}%0ATravel month: ${form.month}%0ABudget: ${form.budget}%0A%0AI'm interested in: ${form.interests.join(", ")}%0A%0A${form.message}%0A%0APhone: ${form.phone}%0AEmail: ${form.email}`;
    window.location.href = `mailto:inamworld579@gmail.com?subject=INAM Enquiry — ${form.name}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto">
        <Reveal>
          <div className="eyebrow text-chocolate mb-4">Enquire</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-5xl md:text-8xl text-forest leading-[0.95] max-w-5xl">
            Tell us your story. We'll write the journey.
          </h1>
        </Reveal>
      </section>

      <section className="mt-16 px-6 md:px-16 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4 space-y-8">
          <Reveal>
            <div>
              <div className="eyebrow text-chocolate mb-2">Speak with John directly</div>
              <a
                href="https://wa.me/250788806824"
                className="font-display text-2xl text-forest cine-link inline-flex items-center gap-3"
              >
                <MessageCircle size={20} /> +250 788 806 824
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="eyebrow text-chocolate mb-2">Write</div>
              <a
                href="mailto:inamworld579@gmail.com"
                className="font-display text-2xl text-forest cine-link inline-flex items-center gap-3"
              >
                <Mail size={20} /> inamworld579@gmail.com
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bg-cream p-6 border-l-2 border-chocolate">
              <p className="font-display text-xl text-forest leading-snug">
                Jean de Dieu Manishimwe
              </p>
              <p className="text-stone-warm text-sm mt-1">John the Guide · Founder, INAM WORLD</p>
              <p className="text-stone-warm text-sm mt-3 italic">
                "I usually reply within a few hours. It's never about me — it's about your journey."
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          {sent ? (
            <div className="bg-cream p-10 text-center">
              <CheckCircle2 className="mx-auto text-chocolate mb-4" size={48} strokeWidth={1.2} />
              <h2 className="font-display text-3xl text-forest">Murakoze · Thank you.</h2>
              <p className="text-stone-warm mt-3">
                Your message has opened in your mail app. John will respond personally within a day.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="Full name"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <Field
                  label="Phone / WhatsApp"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <Field
                  label="Country of residence"
                  value={form.country}
                  onChange={(v) => setForm({ ...form, country: v })}
                />
                <Field
                  label="Number of travellers"
                  value={form.travellers}
                  onChange={(v) => setForm({ ...form, travellers: v })}
                />
                <Field
                  label="Travel month / year"
                  value={form.month}
                  onChange={(v) => setForm({ ...form, month: v })}
                  placeholder="e.g. August 2026"
                />
                <Select
                  label="Trip duration"
                  value={form.duration}
                  onChange={(v) => setForm({ ...form, duration: v })}
                  options={["2-4 days", "5-7 days", "7-10 days", "10-14 days", "14+ days"]}
                />
                <Select
                  label="Approx. budget per person"
                  value={form.budget}
                  onChange={(v) => setForm({ ...form, budget: v })}
                  options={[
                    "Under $2,000",
                    "$2,000 – $5,000",
                    "$5,000 – $10,000",
                    "$10,000+",
                    "Open / unsure",
                  ]}
                />
              </div>

              <div>
                <label className="eyebrow text-chocolate mb-3 block">
                  Interests · pick as many as you like
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => toggle(i)}
                      className={`px-4 py-2 text-xs tracking-widest uppercase border transition cursor-pointer ${
                        form.interests.includes(i)
                          ? "bg-forest text-cream border-forest"
                          : "border-forest/30 text-forest hover:bg-forest/5"
                      }`}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="eyebrow text-chocolate mb-2 block">
                  Tell us about your dream journey
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-forest/30 px-4 py-3 focus:outline-none focus:border-forest"
                  placeholder="Honeymoon, anniversary, photography, family with kids… anything that helps us shape it for you."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-forest text-cream px-8 py-4 text-sm tracking-widest uppercase hover:bg-forest-deep transition"
              >
                Send Enquiry <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-chocolate mb-2 block">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-forest/30 px-1 py-2 focus:outline-none focus:border-forest"
      />
    </label>
  );
}
function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="eyebrow text-chocolate mb-2 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-forest/30 px-1 py-2 focus:outline-none focus:border-forest"
      >
        <option value="">—</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
