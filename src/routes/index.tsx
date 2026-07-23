import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pathway Education Counselling — Study Abroad Experts" },
      { name: "description", content: "Expert counselling for O/A Level students to help you study at top universities worldwide." },
    ],
  }),
  component: Home,
});

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`* { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="/" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-[#1a2744]">About</a></li>
            <li><a href="/framework" className="text-gray-700 hover:text-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>
          <a href="/qualification" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">Start Application Process</a>
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
              <li><a href="/qualification" className="mt-2 block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-semibold text-[#1a2744]">Start Application Process</a></li>
            </ul>
          </div>
        )}
      </header>

      <section className="flex items-center gap-10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-black leading-tight text-[#1a2744] md:text-7xl">Your Future.<br />Our Guidance.</h1>
            <p className="mt-5 text-lg text-gray-600">Expert counselling for O/A Level students to help you study at top universities worldwide.</p>
            
            {/* UPDATED BUTTONS WITH ICONS AND HOVER EFFECTS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="/qualification"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#141e36] hover:shadow-xl"
              >
                <i className="fas fa-clipboard"></i>
                Start Application Process 
                <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
              
              <a 
                href="/universities" 
                className="group inline-flex items-center gap-3 rounded-lg border-2 border-[#1a2744] bg-white px-7 py-4 text-base font-semibold text-[#1a2744] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a2744] hover:text-white hover:shadow-xl"
              >
                <i className="fas fa-compass"></i>
                Explore Universities 
                <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>

            <div className="mt-10 flex gap-8">
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"><i className="fas fa-user-friends text-[#1a2744]"></i></div><span className="text-sm font-semibold">Personalized<br />Guidance</span></div>
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"><i className="fas fa-university text-[#1a2744]"></i></div><span className="text-sm font-semibold">Top University<br />Placements</span></div>
              <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"><i className="fas fa-clipboard-list text-[#1a2744]"></i></div><span className="text-sm font-semibold">End-to-End<br />Support</span></div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop" alt="Student" className="h-full w-full rounded-2xl object-cover" />
            <div className="absolute right-0 top-5 rounded-xl bg-[#1a2744] px-7 py-6 text-white shadow-xl">
              <div className="mb-2 flex items-center gap-2 text-sm"><i className="fas fa-users text-[#f0b429]"></i><span>Our Students</span></div>
              <div className="text-5xl font-black">500+</div>
              <div className="text-sm opacity-80">Successful<br />Placements</div>
              <div className="mt-3 flex text-[#f0b429]">{[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-sm"></i>)}</div>
              <div className="text-sm opacity-80">4.9/5 Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a2744] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold">How We Help</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mx-auto mb-12 max-w-2xl text-gray-300">We make your study abroad journey simple, clear and successful.</p>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {[
              { icon: "compass", title: "Career Counselling", desc: "We help you identify the right career and university based on your goals." },
              { icon: "university", title: "University Shortlisting", desc: "Personalized list of top universities that match your profile." },
              { icon: "file-alt", title: "Application Support", desc: "We guide you through each step of the application process." },
              { icon: "passport", title: "Visa Guidance", desc: "Expert support for visa applications and interviews." },
              { icon: "plane", title: "Pre-Departure Support", desc: "From accommodation to travel, we've got you covered." },
              { icon: "graduation-cap", title: "Post-Arrival Support", desc: "Assistance even after you reach your destination university." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl bg-white p-8 text-left text-[#1a2744] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center"><i className={`fas fa-${s.icon} text-3xl`}></i></div>
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-[#1a2744]">Popular Destinations</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "United Kingdom", desc: "Top universities. Diverse culture.", flag: "🇬🇧", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&h=250&fit=crop" },
              { name: "Canada", desc: "Quality education. PGWP opportunities.", flag: "🇨🇦", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop" },
              { name: "Australia", desc: "World-class education. Great lifestyle.", flag: "🇦🇺", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop" },
              { name: "United States", desc: "Endless opportunities.", flag: "🇺", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=400&h=250&fit=crop" },
              { name: "Europe", desc: "Affordable education.", flag: "🇪🇺", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop" },
            ].map((d) => (
              <div key={d.name} className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-40"><img src={d.img} alt={d.name} className="h-full w-full object-cover" /><div className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white text-xl shadow-lg">{d.flag}</div></div>
                <div className="p-5 text-left"><h3 className="text-base font-bold text-[#1a2744]">{d.name}</h3><p className="mt-1 text-sm text-gray-600">{d.desc}</p></div>
              </div>
            ))}
          </div>
          <a href="/universities" className="mt-10 inline-block rounded-lg border-2 border-[#1a2744] px-8 py-3.5 text-base font-semibold text-[#1a2744] transition hover:bg-[#1a2744] hover:text-white">Explore All Countries</a>
        </div>
      </section>

      <section className="bg-[#1a2744] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl font-extrabold">Let's Plan Your Future</h2>
            <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="text-gray-300">Book a free one-on-one session with our expert counsellor.</p>
            <a href="/qualification" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f0b429] px-8 py-4 text-base font-bold text-[#1a2744] transition hover:bg-[#d9a020]">Start Application Process <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="flex gap-10">
            <div className="text-center text-white"><div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20"><i className="fas fa-comments text-2xl text-[#f0b429]"></i></div><span className="text-sm font-medium">One-on-One<br />Expert Session</span></div>
            <div className="text-center text-white"><div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20"><i className="fas fa-calendar-alt text-2xl text-[#f0b429]"></i></div><span className="text-sm font-medium">Flexible<br />Scheduling</span></div>
            <div className="text-center text-white"><div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20"><i className="fas fa-shield-alt text-2xl text-[#f0b429]"></i></div><span className="text-sm font-medium">100% Confidential<br />& Trusted</span></div>
          </div>
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
