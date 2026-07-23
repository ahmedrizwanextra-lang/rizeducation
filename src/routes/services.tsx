import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Pathway Education Counselling" },
      {
        name: "description",
        content: "Comprehensive guidance for O/A Level students — from career counselling to post-arrival support.",
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: "compass",
    title: "Career Counselling",
    desc: "Discover the right career path based on your interests, strengths and goals with our expert guidance.",
  },
  {
    icon: "university",
    title: "University Shortlisting",
    desc: "We help you find and shortlist the best universities that match your academic profile and career goals.",
  },
  {
    icon: "file-lines",
    title: "Application Support",
    desc: "End-to-end assistance with applications to ensure your profile stands out to admissions teams.",
  },
  {
    icon: "passport",
    title: "Visa Guidance",
    desc: "Expert support for visa applications including documentation, SOPs and interview preparation.",
  },
  {
    icon: "plane-departure",
    title: "Pre-Departure Support",
    desc: "From travel to accommodation and essentials, we help you prepare for a smooth journey abroad.",
  },
  {
    icon: "graduation-cap",
    title: "Post-Arrival Support",
    desc: "We stay with you even after you land. Get help with settling in, academics and everything in between.",
  },
];

const trustPoints = [
  { icon: "user-group", title: "Personalized One-to-One Guidance" },
  { icon: "award", title: "Experienced & Certified Counsellors" },
  { icon: "globe", title: "Strong University Partnerships" },
  { icon: "shield-halved", title: "Transparent Process, 100% Confidential" },
  { icon: "chart-simple", title: "Proven Track Record of Success" },
];
<button onClick={() => setModalOpen(true)} className="hidden rounded-lg bg-[#f0b429]...">Start Application Process</button>
function Services() {
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
  <li><Link to="/framework" className="text-gray-700 hover:text-[#1a2744]">Framework</Link></li>
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
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">
              Our Services
            </div>
            <h1 className="mt-3 text-5xl font-black leading-tight text-[#1a2744] md:text-6xl">
              Comprehensive Guidance.
              <br />
              Every Step of the Way.
            </h1>
            <div className="my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="max-w-lg text-gray-600 leading-relaxed">
              From choosing the right path to getting into your dream university, we provide end-to-end support for O/A Level students.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#141e36]"
            >
              Book a Free Consultation <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=500&fit=crop"
              alt="Counsellor meeting with student"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-white px-5 py-3 shadow-xl">
              <div className="text-xs font-bold uppercase text-[#1a2744]">Universities</div>
              <div className="text-sm text-[#1a2744]">World Guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Our Services</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mx-auto mb-12 max-w-2xl text-gray-600">
            Personalized support designed to help you make the right choices and achieve your goals.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-gray-200 bg-white p-8 text-left transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                  <i className={`fas fa-${s.icon} text-2xl text-[#1a2744]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#f0b429]"
                >
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="bg-[#1a2744] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold">Why Students & Parents Trust Us</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex flex-col items-center text-center">
                <i className={`fas fa-${t.icon} mb-4 text-4xl text-[#f0b429]`}></i>
                <div className="text-sm font-semibold leading-snug">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-[#fdf6e3] px-6 py-14">
        <i className="fas fa-plane absolute right-10 top-6 text-5xl text-[#f0b429]/30 rotate-[-20deg]"></i>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
              <i className="fas fa-calendar-check text-3xl text-[#1a2744]"></i>
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-extrabold text-[#1a2744]">
                Ready to take the first step?
              </h2>
              <p className="mt-1 text-gray-600">
                Let our experts guide you towards a successful future.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-8 py-4 text-base font-bold text-white transition hover:bg-[#141e36]"
          >
            Book a Free Consultation <i className="fas fa-arrow-right"></i>
          </a>
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
