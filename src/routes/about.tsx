import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Pathway Education Counselling" },
      {
        name: "description",
        content: "Learn about Pathway Education Counselling — helping O/A Level students in Pakistan unlock global opportunities.",
      },
    ],
  }),
  component: About,
});

const missionValues = [
  {
    icon: "bullseye",
    title: "Our Mission",
    desc: "To empower students with personalized guidance and help them achieve admission to top universities worldwide.",
  },
  {
    icon: "handshake",
    title: "Our Commitment",
    desc: "We are committed to honest advice, transparent processes and student success at every step.",
  },
  {
    icon: "star",
    title: "Our Values",
    desc: "Integrity, excellence and empathy are at the core of everything we do.",
  },
  {
    icon: "users",
    title: "Student First",
    desc: "Every decision we make is centered around what's best for our students and their future.",
  },
];

const stats = [
  { icon: "user-friends", value: "500+", label: "Students Guided" },
  { icon: "university", value: "150+", label: "Universities Partnered" },
  { icon: "globe", value: "15+", label: "Countries" },
  { icon: "award", value: "98%", label: "Success Rate" },
];

const counsellors = [
  {
    name: "Ayesha Malik",
    role: "Lead Counsellor",
    desc: "6+ years of experience in international education and career guidance. Specializes in UK & Canada admissions.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Hassan Ali",
    role: "Senior Counsellor",
    desc: "Expert in university placements and application strategies. Specializes in Australia & NZ.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Zara Khan",
    role: "Counsellor",
    desc: "Passionate about helping students find the right path. Specializes in US admissions & scholarships.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Usman Ahmed",
    role: "Visa & Documentation Expert",
    desc: "Ensures a smooth visa process and provides end-to-end documentation support.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
];

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a2744]">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]">
              <i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-[#1a2744]">Pathway</span>
              <span className="text-[11px] text-gray-500">Education Counselling</span>
            </div>
          </a>

          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="/" className="text-gray-700 hover:text-[#1a2744]">Home</a></li>
            <li><a href="/about" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">About</a></li>
            <li><a href="/process" className="text-gray-700 hover:text-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>

          <a
            href="/contact"
            className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block"
          >
            Book a Free Consultation
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col gap-2 px-6 py-4">
              <li><a href="/" className="block py-2">Home</a></li>
              <li><a href="/about" className="block py-2">About</a></li>
              <li><a href="/process" className="block py-2">Framework</a></li>
              <li><a href="/universities" className="block py-2">Universities</a></li>
              <li><a href="/contact" className="block py-2">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO / ABOUT US */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">
              About Us
            </div>
            <h1 className="mt-3 text-5xl font-black leading-tight text-[#1a2744] md:text-6xl">
              We're here to guide you towards a brighter future.
            </h1>
            <div className="my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="max-w-lg text-gray-600 leading-relaxed">
              Pathway Education Counselling was founded with a simple mission: to help O/A Level students in Pakistan unlock global opportunities through the right guidance, support and resources.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2744]">
                <i className="fas fa-user-friends text-[#f0b429]"></i>
              </div>
              <span className="text-sm font-semibold text-[#1a2744]">
                Trusted by 500+ students across Pakistan
              </span>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=500&fit=crop"
              alt="Counsellor meeting with student"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-white px-6 py-16 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Our Mission & Values</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {missionValues.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a2744]">
                  <i className={`fas fa-${item.icon} text-xl text-[#f0b429]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1a2744]">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-[#1a2744] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <i className={`fas fa-${stat.icon} text-4xl text-[#f0b429]`}></i>
              <div>
                <div className="text-3xl font-black">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
              alt="Workspace"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#1a2744]/70">
              <div className="px-8 text-center text-white">
                <div className="text-2xl font-bold md:text-3xl leading-tight">
                  Opportunities don't happen.
                  <br />
                  You create them.
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-[#1a2744]">Our Story</h2>
            <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We started Pathway Education Counselling with a belief that every student deserves access to the world's best opportunities—regardless of their background or where they come from.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Having seen countless students struggle with confusing information, unclear processes and lack of personalized support, we knew there had to be a better way.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Today, we are proud to be one of Pakistan's trusted counselling platforms, helping O/A Level students build successful futures at top universities around the globe.
            </p>
            <div className="mt-8">
              <div className="font-serif italic text-xl text-[#1a2744]">— Founder</div>
              <div className="mt-1 text-sm font-bold text-[#1a2744]">Founder & Lead Counsellor</div>
              <div className="text-sm text-gray-500">Pathway Education Counselling</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COUNSELLORS */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Our Counsellors</h2>
          <p className="mt-3 text-gray-600">
            Experienced. Certified. Passionate about your success.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {counsellors.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-gray-200 bg-white p-6 text-left transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
                />
                <h3 className="text-base font-bold text-[#1a2744]">{c.name}</h3>
                <div className="text-sm font-semibold text-[#f0b429]">{c.role}</div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded bg-[#1a2744] text-white transition hover:bg-[#0ea5e9]"
                >
                  <i className="fab fa-linkedin-in text-sm"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-[#1a2744] px-6 py-16 text-white">
        <i className="fas fa-plane absolute right-10 top-10 text-6xl text-white/10 rotate-[-20deg]"></i>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <i className="fas fa-graduation-cap text-4xl text-[#1a2744]"></i>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">Let's build your future, together.</h2>
              <div className="my-3 h-1 w-12 rounded bg-[#f0b429]"></div>
              <p className="max-w-md text-gray-300">
                Book a free consultation and take the first step towards your dream university.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#f0b429] px-8 py-4 text-base font-bold text-[#1a2744] transition hover:bg-[#d9a020]"
          >
            Book a Free Consultation <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm font-semibold text-[#1a2744]">
            Trusted by Students Across Pakistan
          </div>
          <div className="flex items-center gap-10">
            <div className="rounded bg-[#c8102e] px-3 py-1 font-bold text-white text-lg">LSE</div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase text-[#1a2744]">
                University of<br />Toronto
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase text-[#1a2744]">
                University of<br />Melbourne
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-[#1a2744]">NUS</div>
              <div className="text-[9px] text-gray-500">National University of Singapore</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-[#1a2744]">UC</div>
              <div className="text-[9px] text-gray-500">University of Canterbury</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
