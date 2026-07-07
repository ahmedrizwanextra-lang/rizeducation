import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-students.jpg";
import studentImg from "@/assets/student-portrait.jpg";




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riz Education Consultants — Undergrad Admissions to USA, UK, Canada & Australia" },
      {
        name: "description",
        content:
          "Riz Education Consultants helps A-level students land undergraduate offers from top universities in the USA, UK, Canada and Australia. Expert guidance from application to visa.",
      },
      { property: "og:title", content: "Riz Education Consultants" },
      {
        property: "og:description",
        content:
          "From A-levels to your dream campus abroad. Personal mentors, proven playbook, offers you'll actually be proud of.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const countries = [
  { code: "US", name: "United States", stat: "Ivy League + Top 100", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", stat: "Russell Group ready", flag: "🇬🇧" },
  { code: "CA", name: "Canada", stat: "PR-friendly pathways", flag: "🇨🇦" },
  { code: "AU", name: "Australia", stat: "Group of Eight access", flag: "🇦🇺" },
];

const services = [
  { n: "01", t: "University Shortlisting", d: "A data-backed list matched to your grades, budget, and career direction — no wishful thinking." },
  { n: "02", t: "Personal Statement & Essays", d: "1-on-1 story-building. We turn your A-level journey into essays admissions officers actually remember." },
  { n: "03", t: "SAT / IELTS / TOEFL Prep", d: "Structured prep with mentors who scored in the top percentile. Real practice, real scores." },
  { n: "04", t: "Application & Documentation", d: "UCAS, Common App, OUAC, direct apply — we handle the paperwork, deadlines, and recommenders." },
  { n: "05", t: "Scholarships & Financial Aid", d: "Need-based, merit-based, country-specific. We hunt the money you didn't know existed." },
  { n: "06", t: "Visa & Pre-Departure", d: "F-1, Tier 4, study permit, subclass 500 — mock interviews, checklists, and airport-ready briefings." },
];

const stats = [
  { k: "1,200+", v: "Offers secured" },
  { k: "$18M", v: "In scholarships" },
  { k: "97%", v: "Visa success rate" },
  { k: "60+", v: "Partner universities" },
];

const steps = [
  { t: "Free Profile Review", d: "30-min call. We audit your grades, activities, and goals." },
  { t: "Build Your Shortlist", d: "8–12 universities across ambition, target, and safety tiers." },
  { t: "Craft the Application", d: "Essays, LORs, tests, documents — all mentor-reviewed." },
  { t: "Submit & Celebrate", d: "Offers roll in. We help you pick, negotiate aid, and pack." },
];

const testimonials = [
  { q: "Riz got me into UCL with a scholarship I didn't even know I could apply for. The essay sessions were brutal in the best way.", n: "Ayesha K.", w: "UCL, London — BSc Economics" },
  { q: "I went from clueless in AS to holding four offers including Toronto and UBC. My mentor literally texted me at 1am before the deadline.", n: "Bilal R.", w: "University of Toronto — Computer Science" },
  { q: "SAT jumped from 1290 to 1490. Purdue said yes. Enough said.", n: "Hania M.", w: "Purdue University — Engineering" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#destinations", label: "Destinations" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#wins", label: "Wins" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src="/logo.png" alt="Riz Education Consultants" className="h-9 w-auto md:h-11" />
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            Book free call →
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full border-2 border-primary"
          >
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-primary transition ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 bottom-0 h-0.5 w-5 bg-primary transition ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-base font-semibold">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMenuOpen(false)} className="block py-2 hover:text-accent">{l.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                >
                  Book free call →
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>


      {/* HERO */}
      <section id="top" className="relative overflow-hidden noise-bg">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-accent" /> A-Levels → World's Top Universities
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
              YOUR
              <br />
              A-LEVELS
              <br />
              <span className="bg-secondary px-3 py-1">DESERVE</span>
              <br />
              THE WORLD.
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Riz Education Consultants places A-level students into undergraduate programs across the <b className="text-foreground">USA, UK, Canada and Australia</b> — with the essays, scores, scholarships and visa strategy to actually get there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[6px_6px_0_var(--color-secondary)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-secondary)]">
                Start my application
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-base font-bold hover:bg-primary hover:text-primary-foreground">
                See how we work
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-accent">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary" />
            <img
              src={heroImg}
              alt="International students celebrating university admissions"
              width={1600}
              height={1200}
              className="h-full w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rotate-[-4deg] rounded-xl bg-primary px-5 py-3 text-primary-foreground shadow-xl">
              <div className="font-display text-2xl">97%</div>
              <div className="text-[10px] uppercase tracking-widest">visa success</div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y-2 border-primary bg-primary py-4 text-primary-foreground overflow-hidden">
          <div className="flex whitespace-nowrap marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-10 pr-10 font-display text-2xl">
                <span>HARVARD</span><span className="text-secondary">✦</span>
                <span>OXFORD</span><span className="text-secondary">✦</span>
                <span>UCL</span><span className="text-secondary">✦</span>
                <span>TORONTO</span><span className="text-secondary">✦</span>
                <span>MELBOURNE</span><span className="text-secondary">✦</span>
                <span>NYU</span><span className="text-secondary">✦</span>
                <span>KING'S COLLEGE</span><span className="text-secondary">✦</span>
                <span>UBC</span><span className="text-secondary">✦</span>
                <span>PURDUE</span><span className="text-secondary">✦</span>
                <span>WARWICK</span><span className="text-secondary">✦</span>
                <span>MCGILL</span><span className="text-secondary">✦</span>
                <span>SYDNEY</span><span className="text-secondary">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Four countries. Endless options.</div>
            <h2 className="font-display text-5xl md:text-6xl">Pick your <span className="text-accent">passport</span> to a degree.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">We specialise in undergraduate placements in four English-speaking powerhouses — each with its own admissions playbook, and we know all four cold.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {countries.map((c, i) => (
            <div
              key={c.code}
              className={`group relative overflow-hidden rounded-2xl border-2 border-primary p-6 transition hover:-translate-y-1 ${i % 2 ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              <div className="text-5xl">{c.flag}</div>
              <div className="mt-6 font-display text-2xl">{c.name}</div>
              <div className={`mt-2 text-sm ${i % 2 ? "text-secondary" : "text-muted-foreground"}`}>{c.stat}</div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest opacity-70">{c.code}</span>
                <span className={`text-2xl ${i % 2 ? "text-secondary" : "text-accent"}`}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-16 max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-secondary">What we actually do</div>
            <h2 className="font-display text-5xl md:text-6xl">Everything between <span className="text-secondary">"I'm considering"</span> and "I'm going."</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.n} className="group bg-primary p-8 transition hover:bg-secondary hover:text-primary">
                <div className="font-display text-4xl text-secondary group-hover:text-primary">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80 group-hover:opacity-100">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Riz method</div>
          <h2 className="font-display text-5xl md:text-6xl">Four steps. Zero <span className="bg-secondary px-3">chaos</span>.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="font-display text-7xl text-secondary">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-4 h-1 w-12 bg-accent" />
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WINS / TESTIMONIALS */}
      <section id="wins" className="bg-secondary text-primary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest">Student wins</div>
              <h2 className="font-display text-5xl md:text-6xl">Real names. Real offers. Real receipts.</h2>
              <div className="relative mt-10 w-full max-w-sm">
                <div className="absolute -inset-3 rotate-[-3deg] bg-primary" />
                <img
                  src={studentImg}
                  alt="Riz student holding acceptance letter"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="relative w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              {testimonials.map((t) => (
                <blockquote key={t.n} className="rounded-2xl border-2 border-primary bg-background p-8">
                  <p className="font-display text-2xl leading-tight">"{t.q}"</p>
                  <footer className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent" />
                    <div>
                      <div className="font-bold">{t.n}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.w}</div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Your move</div>
          <h2 className="font-display text-6xl md:text-8xl">
            LET'S GET YOU
            <br />
            <span className="bg-primary px-4 text-primary-foreground">ADMITTED.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
            Book a free 30-minute profile review. No pressure, no sales pitch — just an honest read on where your A-levels can take you.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! A Riz counsellor will reach out within 24 hours.");
            }}
            className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-2"
          >
            <input required placeholder="Your name" className="rounded-lg border-2 border-primary bg-background px-4 py-3 outline-none focus:border-accent" />
            <input required type="email" placeholder="Email" className="rounded-lg border-2 border-primary bg-background px-4 py-3 outline-none focus:border-accent" />
            <input required placeholder="WhatsApp / Phone" className="rounded-lg border-2 border-primary bg-background px-4 py-3 outline-none focus:border-accent" />
            <select className="rounded-lg border-2 border-primary bg-background px-4 py-3 outline-none focus:border-accent">
              <option>Interested in: USA</option>
              <option>Interested in: UK</option>
              <option>Interested in: Canada</option>
              <option>Interested in: Australia</option>
              <option>Not sure yet</option>
            </select>
            <textarea placeholder="Tell us about your grades & goals (optional)" rows={4} className="sm:col-span-2 rounded-lg border-2 border-primary bg-background px-4 py-3 outline-none focus:border-accent" />
            <button className="sm:col-span-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-[6px_6px_0_var(--color-secondary)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-secondary)]">
              Book my free call →
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-primary bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary font-display text-lg">R</span>
              <span className="font-display text-xl">RIZ EDUCATION CONSULTANTS</span>
            </div>
            <p className="mt-4 max-w-sm text-sm opacity-80">
              Undergraduate admissions consultancy for A-level students aiming at the USA, UK, Canada and Australia.
            </p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">Contact</div>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              <li>hello@rizeducation.com</li>
              <li>+92 300 000 0000</li>
              <li>Mon–Sat, 10am–8pm</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-secondary">Follow</div>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              <li>Instagram</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Riz Education Consultants. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
