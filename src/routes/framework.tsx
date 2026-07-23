import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/framework")({
  head: () => ({ meta: [{ title: "Our Framework — Pathway Education Counselling" }] }),
  component: Framework,
});

const processSteps = [
  { n: 1, icon: "comment-dots", title: "Understand", desc: "We learn about your goals, interests and academic background." },
  { n: 2, icon: "magnifying-glass", title: "Explore", desc: "We research and shortlist the best options tailored to your profile." },
  { n: 3, icon: "file-invoice", title: "Plan", desc: "We build a personalized roadmap and application strategy." },
  { n: 4, icon: "paper-plane", title: "Apply", desc: "We assist you through the entire application and visa process." },
  { n: 5, icon: "medal", title: "Achieve", desc: "We support you until you reach your dream university and beyond." },
];

function Framework() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a2744]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`* { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="/" className="text-gray-700 hover:text-[#1a2744]">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-[#1a2744]">About</a></li>
            <li><a href="/framework" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>
          <a href="/contact" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">Book a Free Consultation</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><i className="fas fa-bars text-2xl"></i></button>
        </nav>
        {menuOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col gap-2 px-6 py-4">
              <li><a href="/" className="block py-2">Home</a></li>
              <li><a href="/about" className="block py-2">About</a></li>
              <li><a href="/framework" className="block py-2">Framework</a></li>
              <li><a href="/universities" className="block py-2">Universities</a></li>
              <li><a href="/contact" className="block py-2">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      <section className="px-6 py-16 md:py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Our Framework</div>
          <h1 className="mt-3 text-5xl font-black leading-tight text-[#1a2744] md:text-6xl">Your Journey to Success,<br />Step by Step.</h1>
          <div className="mx-auto my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="text-lg text-gray-600 leading-relaxed">We've refined our approach over years of helping students. Here's exactly how we'll guide you from start to finish.</p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative mt-16 grid gap-10 md:grid-cols-5">
            <div className="absolute top-6 left-0 right-0 hidden h-[2px] border-t-2 border-dashed border-gray-300 md:block"></div>
            {processSteps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2744] text-sm font-bold text-white shadow-lg">{s.n}</div>
                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 shadow-md"><i className={`fas fa-${s.icon} text-3xl text-[#1a2744]`}></i></div>
                <h3 className="mt-4 text-xl font-bold text-[#1a2744]">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed text-center">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold text-[#1a2744]">What to Expect</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <div className="mt-12 space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.n} className={`flex flex-col gap-6 md:flex-row md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2744] text-lg font-bold text-white">{step.n}</div>
                    <h3 className="text-2xl font-bold text-[#1a2744]">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">{step.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[#f0b429]"></i> Personalized attention</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[#f0b429]"></i> Expert guidance</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-[#f0b429]"></i> Regular updates</li>
                  </ul>
                </div>
                <div className="flex-1"><div className="flex h-48 items-center justify-center rounded-2xl bg-white p-8 shadow-lg"><i className={`fas fa-${step.icon} text-6xl text-[#f0b429]/30`}></i></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1a2744] px-6 py-16 text-white">
        <i className="fas fa-plane absolute right-10 top-6 text-6xl text-white/10 rotate-[-20deg]"></i>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white"><i className="fas fa-graduation-cap text-4xl text-[#1a2744]"></i></div>
            <div><h2 className="text-3xl font-extrabold">Ready to start your journey?</h2><div className="my-3 h-1 w-12 rounded bg-[#f0b429]"></div><p className="max-w-md text-gray-300">Book a free consultation and let's map out your path to success.</p></div>
          </div>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#f0b429] px-8 py-4 text-base font-bold text-[#1a2744] transition hover:bg-[#d9a020]">Book a Free Consultation <i className="fas fa-arrow-right"></i></a>
        </div>
      </section>

      <footer className="bg-[#1a2744] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white"><i className="fas fa-graduation-cap text-xl text-[#1a2744]"></i></div>
              <div className="flex flex-col"><span className="text-lg font-extrabold text-white">Pathway</span><span className="text-[10px] text-gray-300">Education Counselling</span></div>
            </a>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">Guiding O/A Level students in Pakistan to top universities worldwide.</p>
            <div className="mt-5 flex gap-3">
              {["facebook-f", "instagram", "linkedin-in", "youtube"].map((ic) => (
                <a key={ic} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f0b429] hover:text-[#1a2744]"><i className={`fab fa-${ic}`}></i></a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-[#f0b429]">Home</a></li>
              <li><a href="/about" className="hover:text-[#f0b429]">About Us</a></li>
              <li><a href="/framework" className="hover:text-[#f0b429]">Framework</a></li>
              <li><a href="/universities" className="hover:text-[#f0b429]">Universities</a></li>
              <li><a href="/contact" className="hover:text-[#f0b429]">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">Our Services</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {["Career Counselling", "University Shortlisting", "Application Support", "Visa Guidance", "Pre-Departure Support", "Post-Arrival Support"].map((l) => (
                <li key={l}><a href="#" className="hover:text-[#f0b429]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">Contact Us</div>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><i className="fas fa-phone text-[#f0b429]"></i> +92 300 1234567</li>
              <li className="flex items-center gap-2"><i className="fas fa-envelope text-[#f0b429]"></i> info@pathwaycounselling.pk</li>
              <li className="flex items-center gap-2"><i className="fas fa-location-dot text-[#f0b429]"></i> Lahore, Pakistan</li>
              <li className="flex items-center gap-2"><i className="fas fa-clock text-[#f0b429]"></i> Mon - Sat | 10:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-[#f0b429]">Subscribe to Our Newsletter</div>
            <p className="mt-4 text-sm text-gray-300">Get tips, updates and resources straight to your inbox.</p>
            <input type="email" placeholder="Enter your email" className="mt-4 w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#f0b429]" />
            <button className="mt-3 w-full rounded-lg bg-[#f0b429] px-4 py-3 text-sm font-bold text-[#1a2744] transition hover:bg-[#d9a020]">Subscribe</button>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">© 2024 Pathway Education Counselling. All rights reserved.</div>
      </footer>
    </div>
  );
}
