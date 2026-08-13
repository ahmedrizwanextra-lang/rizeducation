import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Pathway Education Counselling" }] }),
  component: About,
});

function ProfileButton() {
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => { checkUser(); }, []);
  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };
  if (!user) {
    return <a href="/login" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#1a2744] transition hover:bg-gray-200"><i className="fas fa-user"></i></a>;
  }
  return (
    <div className="relative">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#1a2744] text-white transition hover:bg-[#141e36]">
        {user.user_metadata?.avatar_url ? <img src={user.user_metadata.avatar_url} alt="Profile" className="h-full w-full object-cover" /> : <span className="text-sm font-bold">{user.email?.charAt(0).toUpperCase()}</span>}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl z-50">
          <a href="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-[#1a2744] hover:bg-gray-50"><i className="fas fa-user mr-2"></i> My Profile</a>
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }} className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"><i className="fas fa-sign-out-alt mr-2"></i> Logout</button>
        </div>
      )}
    </div>
  );
}

const heroBadges = [
  { icon: "user-friends", title: "Teacher-Led", desc: "27 years of teaching experience" },
  { icon: "shield-check", title: "Honest Guidance", desc: "Mentorship over salesmanship" },
  { icon: "globe", title: "Every Destination", desc: "Full-spectrum support worldwide" },
  { icon: "heart", title: "Every Budget", desc: "Quality guidance, accessible to all" },
];

const whatWeDo = [
  { icon: "graduation-cap", title: "Counselling & University Matching", desc: "Honest, personal guidance to find the country, course and university that fit your goals and budget." },
  { icon: "file-alt", title: "Admissions & Applications", desc: "Careful, thorough support with applications, SOPs and documents, so nothing costs you an offer." },
  { icon: "dollar-sign", title: "Scholarships & Affordable Options", desc: "Matching your profile to scholarships and value destinations, because studying abroad shouldn't be only for the few." },
  { icon: "passport", title: "Visa Guidance", desc: "Clear, up-to-date support through the visa process from start to finish." },
  { icon: "headset", title: "Test Preparation (Coming Soon)", desc: "IELTS, PTE and admissions test preparation to get you ready and confident." },
];

const ourValues = [
  { icon: "user-friends", title: "Mentorship over Salesmanship", desc: "We advise in your best interest — even when it earns us less." },
  { icon: "shield-check", title: "Honesty & Transparency", desc: "Clear costs, realistic chances, and no promises we can't keep." },
  { icon: "arrow-trend-up", title: "Ambition", desc: "We help students aim higher — and we help them get there." },
  { icon: "globe", title: "Access for All", desc: "Full-spectrum guidance for every destination and every budget, not just the elite few." },
  { icon: "file-lines", title: "Diligence", desc: "Careful, thorough work on every application, deadline and document — a teacher's discipline." },
];

const whyChoose = [
  { icon: "chalkboard-user", title: "Teacher-led, not broker-led", desc: "Founded and led by a 27-year educator." },
  { icon: "shield-check", title: "Honest advice, realistic expectations", desc: "We'll tell you the truth, kindly and clearly." },
  { icon: "heart", title: "Every destination, every budget", desc: "From top-ranked universities to smart, affordable options." },
  { icon: "user-friends", title: "End-to-end support", desc: "From first conversation to landing at your new campus." },
];

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a2744]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`*:not(.fa):not(.fas):not(.far):not(.fab):not(.fal):not(.fad) { font-family: 'Montserrat', sans-serif !important; } header ul a, header ul button { font-family: 'Poppins', sans-serif !important; }`}</style>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="/" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
            <li><a href="/about" className="relative text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">About</a></li>
            <li><a href="/framework" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Framework</a></li>
            <li><a href="/universities" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Universities</a></li>
            <li><a href="/contact" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
          </ul>
          <a href="/qualification" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">Start Application Process</a>
          <ProfileButton />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><i className="fas fa-bars text-2xl"></i></button>
        </nav>
        {menuOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col gap-2 px-6 py-4">
              <li><a href="/" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Home</a></li>
              <li><a href="/about" className="block rounded-lg px-3 py-2 text-[#1a2744] transition-colors duration-200 hover:bg-gray-50">About</a></li>
              <li><a href="/framework" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Framework</a></li>
              <li><a href="/universities" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Universities</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Contact</a></li>
              <li><a href="/qualification" className="mt-2 block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020]">Start Application Process</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a2744] px-6 pb-20 pt-8 text-white md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <a href="/" className="hover:text-[#f0b429]">Home</a>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="text-[#f0b429]">About Us</span>
          </div>
          <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-black leading-tight md:text-6xl">
                About Pathway<br /><span className="text-[#f0b429]">Education Counselling</span>
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-200">Built by a teacher, for every student's future.</p>
              <div className="my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
              <p className="max-w-lg text-gray-300 leading-relaxed">
                We are a Lahore-based study-abroad consultancy, guiding students to universities worldwide — every destination, every budget — with honesty, care and a teacher's guidance.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {heroBadges.map((b) => (
                  <div key={b.title} className="flex flex-col items-start gap-2">
                    <i className={`fas fa-${b.icon} text-xl text-[#f0b429]`}></i>
                    <div className="text-sm font-bold">{b.title}</div>
                    <div className="text-xs text-gray-300">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto hidden max-w-sm md:block">
              <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-full bg-[#f0b429]/20"></div>
              <img src="/src/assets/student-portrait.jpg" alt="Student guided by Pathway Education Counselling" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-xl bg-[#0f1830] p-4 shadow-xl">
                <i className="fas fa-quote-left text-[#f0b429]"></i>
                <p className="mt-2 text-sm font-semibold text-white">Guided by a teacher. Built on trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative z-10 px-6">
        <div className="mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-10 rounded-2xl bg-white p-10 shadow-xl md:grid-cols-2">
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100"><i className="fas fa-bullseye text-xl text-[#1a2744]"></i></div>
            <div>
              <h3 className="text-xl font-bold text-[#1a2744]">Our Mission</h3>
              <div className="my-2 h-1 w-10 rounded bg-[#f0b429]"></div>
              <p className="text-sm leading-relaxed text-gray-600">To guide students across Pakistan to the right university and country for their ambitions and their means — with the trust, honesty and care of a teacher.</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100"><i className="fas fa-eye text-xl text-[#1a2744]"></i></div>
            <div>
              <h3 className="text-xl font-bold text-[#1a2744]">Our Vision</h3>
              <div className="my-2 h-1 w-10 rounded bg-[#f0b429]"></div>
              <p className="text-sm leading-relaxed text-gray-600">To become Pakistan's most trusted name in international education — the first place a family turns when a student dreams of studying abroad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Our Story</span>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1a2744]">Guiding Dreams.<br />Creating <span className="text-[#f0b429]">Futures.</span></h2>
            <p className="mt-6 text-gray-600 leading-relaxed">Pathway Education Counselling was founded on a simple belief: that guiding a student abroad is an act of teaching, not selling.</p>
            <p className="mt-4 text-gray-600 leading-relaxed">Our founding partner spent 27 years teaching O &amp; A Levels — a career built on helping young people find their footing and reach higher than they thought possible. Time and again, he saw brilliant students talk themselves out of big dreams, and ordinary students achieve extraordinary things with the right guidance. Pathway exists to give every student that guidance.</p>
            <p className="mt-4 text-gray-600 leading-relaxed">Where many agencies chase commissions, we start with the student. We help students and families across Lahore and beyond navigate every destination and every budget — matching each student to the right country, the right university and the right pathway, and walking with them from the first conversation all the way to the boarding gate.</p>
            <p className="mt-4 text-gray-600 leading-relaxed">That teaching heritage is our promise. It means honest counsel, patient support and a genuine stake in where our students end up — not just whether they sign.</p>
            <a href="/qualification" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#141e36]"><i className="fas fa-calendar"></i> Book Free Appointment</a>
          </div>
          <div className="relative rounded-2xl bg-gray-50 p-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=800&fit=crop&crop=face"
              alt="Founder & Partner"
              className="aspect-[4/5] w-full rounded-xl object-cover shadow-lg"
            />
            <div className="mt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">Founder &amp; Partner</span>
              <h3 className="mt-1 text-2xl font-black text-[#1a2744]">Rizwan</h3>
              <div className="text-sm font-semibold text-gray-500">27 Years in Teaching</div>
              <div className="my-3 h-1 w-10 rounded bg-[#f0b429]"></div>
              <p className="text-sm text-gray-600 leading-relaxed">A teacher for 27 years. A mentor for life. Guiding students to universities worldwide.</p>
              <div className="mt-4 font-serif text-2xl italic text-[#1a2744]">Rizwan</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">What We Do</span>
          <h2 className="mt-3 text-4xl font-black text-[#1a2744]">Comprehensive Support, Every Step of the Way</h2>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {whatWeDo.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a2744]"><i className={`fas fa-${item.icon} text-xl text-[#f0b429]`}></i></div>
                <h3 className="mt-5 text-base font-bold text-[#1a2744]">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-10 shadow-sm">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Our Values</span>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#1a2744]">The Principles That Guide Us</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:col-span-2">
              {ourValues.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <i className={`fas fa-${v.icon} mt-1 text-xl text-[#f0b429]`}></i>
                  <div>
                    <h3 className="text-base font-bold text-[#1a2744]">{v.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#1a2744] p-10 text-white">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Why Choose Pathway</span>
              <h2 className="mt-3 text-3xl font-black leading-tight">Experience. Integrity.<br />A Teacher's Promise.</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {whyChoose.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <i className={`fas fa-${w.icon} mt-1 text-xl text-[#f0b429]`}></i>
                  <div>
                    <h3 className="text-sm font-bold">{w.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
