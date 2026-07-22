import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/universities")({
  head: () => ({
    meta: [
      { title: "Universities — Pathway Education Counselling" },
      {
        name: "description",
        content: "Explore world-class universities across Canada, UK, USA and Australia.",
      },
    ],
  }),
  component: Universities,
});

const universities = [
  {
    name: "University of Toronto",
    country: "Canada",
    flag: "🇨🇦",
    ranking: 21,
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    flag: "🇨",
    ranking: 34,
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  },
  {
    name: "University of Oxford",
    country: "UK",
    flag: "🇬🇧",
    ranking: 3,
    img: "https://images.unsplash.com/photo-1548504769-900b70ed122e?w=400&h=250&fit=crop",
  },
  {
    name: "Stanford University",
    country: "USA",
    flag: "🇺🇸",
    ranking: 5,
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
  },
  {
    name: "Massachusetts Institute of Technology",
    country: "USA",
    flag: "🇺",
    ranking: 1,
    img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    ranking: 14,
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    ranking: 8,
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
  },
];

const countries = [
  {
    name: "Canada",
    flag: "🇦",
    desc: "Top universities. Quality education. Bright future.",
    img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    desc: "World-renowned institutions. Global recognition. Endless possibilities.",
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&h=400&fit=crop",
  },
  {
    name: "United States",
    flag: "🇺🇸",
    desc: "Innovation. Leadership. Top-ranked universities. Limitless potential.",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=600&h=400&fit=crop",
  },
  {
    name: "Australia",
    flag: "🇺",
    desc: "World-class education. Vibrant lifestyle. Global exposure.",
    img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
  },
];

const stats = [
  { icon: "university", value: "250+", label: "Partner Universities" },
  { icon: "globe", value: "4", label: "Top Countries" },
  { icon: "user-friends", value: "500+", label: "Students Placed" },
  { icon: "star", value: "98%", label: "Success Rate" },
  { icon: "shield-check", value: "100%", label: "Confidential & Trusted" },
];

function Universities() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setScrollIndex((prev) => Math.min(universities.length - 4, prev + 1));
  };

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
  <li><Link to="/" className="text-gray-700 hover:text-[#1a2744]">Home</Link></li>
  <li><Link to="/about" className="text-gray-700 hover:text-[#1a2744]">About</Link></li>
  <li><Link to="/process" className="text-gray-700 hover:text-[#1a2744]">Framework</Link></li>
  <li><Link to="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</Link></li>
  <li><Link to="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</Link></li>
</ul>
          <a
            href="/contact"
            className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block"
          >
            Book a Free Consultation
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=800&fit=crop"
            alt="University campus"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">
              Universities
            </div>
            <h1 className="mt-3 text-5xl font-black leading-tight text-[#1a2744] md:text-6xl">
              Your Future.
              <br />
              Top Universities.
              <br />
              Endless Opportunities.
            </h1>
            <p className="mt-6 max-w-lg text-gray-600 leading-relaxed">
              Explore world-class universities across Canada, UK, USA and Australia and take the first step towards your dream future.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#141e36]"
            >
              <i className="fas fa-calendar"></i> Book a Free Consultation <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute right-0 top-0 w-full max-w-md space-y-4">
              <div className="rounded-xl bg-white p-5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2744]">
                    <i className="fas fa-graduation-cap text-xl text-[#f0b429]"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a2744] leading-snug">
                      Guiding O/A Level students to world-class universities worldwide.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2744]">
                    <i className="fas fa-globe text-xl text-[#f0b429]"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a2744] leading-snug">
                      Personalized guidance for the right choices and better future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Top Universities</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            Discover some of the best universities in the world.
          </p>

          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-100"
            >
              <i className="fas fa-chevron-left text-[#1a2744]"></i>
            </button>
            <button
              onClick={scrollRight}
              className="absolute -right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-100"
            >
              <i className="fas fa-chevron-right text-[#1a2744]"></i>
            </button>

            {/* University Cards */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-300"
                style={{ transform: `translateX(-${scrollIndex * 25}%)` }}
              >
                {universities.map((uni) => (
                  <div
                    key={uni.name}
                    className="min-w-[280px] flex-shrink-0 rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={uni.img}
                        alt={uni.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5 text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                          <i className="fas fa-university text-[#1a2744]"></i>
                        </div>
                        <h3 className="text-base font-bold text-[#1a2744] leading-tight">
                          {uni.name}
                        </h3>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                        <span>{uni.country}</span>
                        <span className="text-lg">{uni.flag}</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                        <span className="text-xs text-gray-500">QS World Ranking</span>
                        <span className="text-lg font-black text-[#1a2744]">#{uni.ranking}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === scrollIndex ? "bg-[#1a2744]" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#f0b429]"
            >
              View All Universities <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* EXPLORE BY COUNTRY */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Explore by Country</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="h-64 w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <h3 className="text-xl font-bold">{c.name}</h3>
                  </div>
                  <p className="mt-2 text-sm opacity-90 leading-snug">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-[#1a2744] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <i className={`fas fa-${stat.icon} text-3xl text-[#f0b429]`}></i>
              <div>
                <div className="text-2xl font-black">{stat.value}</div>
                <div className="text-xs opacity-80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a2744] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <i className="fas fa-graduation-cap text-xl text-[#1a2744]"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white">Pathway</span>
                <span className="text-[10px] text-gray-300">Education Counselling</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Guiding O/A Level students in Pakistan to top universities worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {["facebook-f", "instagram", "linkedin-in", "youtube"].map((ic) => (
                <a
                  key={ic}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f0b429] hover:text-[#1a2744]"
                >
                  <i className={`fab fa-${ic}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {["Home", "About Us", "Services", "Universities", "Resources", "Success Stories", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#f0b429]">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">
              Our Services
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {[
                "Career Counselling",
                "University Shortlisting",
                "Application Support",
                "Visa Guidance",
                "Pre-Departure Support",
                "Post-Arrival Support",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#f0b429]">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">
              Contact Us
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-[#f0b429]"></i> +92 300 1234567
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-[#f0b429]"></i> info@pathwaycounselling.pk
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-location-dot text-[#f0b429]"></i> Lahore, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-clock text-[#f0b429]"></i> Mon - Sat | 10:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">
              Subscribe to Our Newsletter
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Get tips, updates and resources straight to your inbox.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-4 w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#f0b429]"
            />
            <button className="mt-3 w-full rounded-lg bg-[#f0b429] px-4 py-3 text-sm font-bold text-[#1a2744] transition hover:bg-[#d9a020]">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2024 Pathway Education Counselling. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
