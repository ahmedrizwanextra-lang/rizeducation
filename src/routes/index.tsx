import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/")({
  component: Home,
});

function ProfileButton() {
  const [user, setUser] = useState<any>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  if (!user) {
    return (
      <a href="/login" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#1a2744] transition hover:bg-gray-200">
        <i className="fas fa-user"></i>
      </a>
    );
  }

  return (
    <div className="relative">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#1a2744] text-white transition hover:bg-[#141e36]">
        {user.user_metadata?.avatar_url ? (
          <img src={user.user_metadata.avatar_url} alt="Profile" className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold">{user.email?.charAt(0).toUpperCase()}</span>
        )}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-xl z-50">
          <a href="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-[#1a2744] hover:bg-gray-50">
            <i className="fas fa-user mr-2"></i> My Profile
          </a>
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = "/"; }} className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50">
            <i className="fas fa-sign-out-alt mr-2"></i> Logout
          </button>
        </div>
      )}
    </div>
  );
}

const trustBadges = [
  { icon: "user", label: "Personalized Counseling" },
  { icon: "shield-halved", label: "100% Honest Guidance" },
  { icon: "globe", label: "Top Universities Worldwide" },
  { icon: "file-lines", label: "Visa Assistance & Beyond" },
];

const features = [
  { icon: "graduation-cap", title: "Career Counselling", desc: "We help you choose the right course and career path based on your goals and interests." },
  { icon: "building-columns", title: "University Selection", desc: "Gain admission to top-ranked universities in your preferred country." },
  { icon: "file-lines", title: "Visa Guidance", desc: "Expert visa application support to help you get approved smoothly." },
  { icon: "plane", title: "Pre-Departure Support", desc: "From accommodation to travel, we prepare you for a confident journey." },
];

const destinations = [
  { flag: "🇨🇦", country: "Canada", img: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=500&h=400&fit=crop" },
  { flag: "🇬🇧", country: "United Kingdom", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=500&h=400&fit=crop" },
  { flag: "🇺🇸", country: "United States", img: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&h=400&fit=crop" },
  { flag: "🇦🇺", country: "Australia", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&h=400&fit=crop" },
];

const steps = [
  { num: "01", icon: "comment-dots", title: "Free Consultation", desc: "Book a free appointment and share your academic and career goals." },
  { num: "02", icon: "bullseye", title: "Profile Evaluation", desc: "We evaluate your profile and suggest the best countries and universities." },
  { num: "03", icon: "list-check", title: "Application Support", desc: "We assist you in university applications and document preparation." },
  { num: "04", icon: "passport", title: "Visa Processing", desc: "Our experts guide you through the visa process step-by-step." },
  { num: "05", icon: "plane-departure", title: "Fly to Your Future", desc: "Pack your bags! We support you even after you reach your destination." },
];

const stats = [
  { icon: "user-group", value: "500+", label: "Students Guided" },
  { icon: "clipboard-check", value: "98%", label: "Visa Success Rate" },
  { icon: "building-columns", value: "100+", label: "Partner Universities" },
  { icon: "earth-americas", value: "15+", label: "Countries Covered" },
];

const testimonials = [
  { name: "Ahmed R.", school: "Humber College, Canada", flag: "🇨🇦", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces", quote: "Pathway made my dream of studying in Canada a reality. Their guidance was exceptional!" },
  { name: "Ayesha Khan", school: "University of Manchester, UK", flag: "🇬🇧", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces", quote: "From university selection to visa approval, the team was with me at every step. Highly recommended!" },
  { name: "Bilal Moiz", school: "Monash University, Australia", flag: "🇦🇺", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces", quote: "Professional, honest, and supportive team. They helped me secure admission in my dream university." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`*:not(.fa):not(.fas):not(.far):not(.fab):not(.fal):not(.fad) { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            <li><a href="/" className="relative text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Home</a></li>
            <li><a href="/about" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">About</a></li>
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
              <li><a href="/" className="block rounded-lg px-3 py-2 text-[#1a2744] transition-colors duration-200 hover:bg-gray-50">Home</a></li>
              <li><a href="/about" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">About</a></li>
              <li><a href="/framework" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Framework</a></li>
              <li><a href="/universities" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Universities</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Contact</a></li>
              <li><a href="/qualification" className="mt-2 block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020]">Start Application Process</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a2744]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">Your Journey. Our Expertise.</div>
            <h1 className="mt-4 text-5xl font-black leading-tight text-white md:text-6xl">
              Study Abroad.<br />Build Your <span className="text-[#f0b429]">Future.</span>
            </h1>
            <p className="mt-5 max-w-md text-gray-300 leading-relaxed">
              Pathway Education Counselling helps students achieve their global education dreams with expert guidance, university placements, visa support, and career counseling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/qualification" className="inline-flex items-center gap-2 rounded-lg bg-[#f0b429] px-6 py-4 text-sm font-bold text-[#1a2744] shadow-md transition hover:-translate-y-1 hover:bg-[#d9a020]">
                <i className="fas fa-calendar"></i> Book Free Appointment
              </a>
              <a href="/universities" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Explore Universities
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex flex-col items-start gap-2">
                  <i className={`fas fa-${b.icon} text-lg text-[#f0b429]`}></i>
                  <span className="text-xs leading-tight text-gray-300">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-white/10 md:block">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&h=700&fit=crop&crop=faces" alt="Student ready to study abroad" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 -mt-1 bg-white px-6 pb-16 pt-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2744]"><i className={`fas fa-${f.icon} text-[#f0b429]`}></i></div>
              <h3 className="mt-5 text-lg font-bold text-[#1a2744]">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              <a href="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1a2744] hover:text-[#f0b429]">
                Learn More <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">Study at Top Universities</div>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] md:text-4xl">Your Future, Top Destinations</h2>
          <p className="mt-3 text-gray-600">Explore world-class universities across the globe.</p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <a href="/universities" key={d.country} className="group overflow-hidden rounded-2xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={d.img} alt={d.country} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow">{d.flag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#1a2744]">{d.country}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gray-500 group-hover:text-[#f0b429]">
                    View Universities <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <a href="/universities" className="mt-12 inline-block rounded-lg bg-[#1a2744] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#141e36]">
            View All Universities
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">How It Works</div>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] md:text-4xl">Simple Steps, Big Dreams</h2>
          <p className="mt-3 text-gray-600">We make your study abroad journey smooth and stress-free.</p>

          <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full border-t-2 border-dashed border-[#f0b429]/50 lg:block"></div>
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <i className={`fas fa-${s.icon} text-xl text-[#1a2744]`}></i>
                  <span className="absolute -bottom-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f0b429] text-[10px] font-bold text-[#1a2744]">{s.num}</span>
                </div>
                <h3 className="mt-5 text-base font-bold text-[#1a2744]">{s.title}</h3>
                <p className="mt-2 max-w-[200px] text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1a2744] px-6 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">Why Choose Pathway</div>
            <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">Trusted by Hundreds of Students</h2>
            <p className="mt-3 text-gray-300">We are committed to your success at every step.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <i className={`fas fa-${s.icon} mb-2 text-xl text-[#f0b429]`}></i>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-gray-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-[#f0b429]">Success Stories</div>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1a2744] md:text-4xl">Hear from Our Students</h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-7 text-left shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-bold text-[#1a2744]">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.school}</div>
                    </div>
                  </div>
                  <span className="text-lg">{t.flag}</span>
                </div>
                <div className="mt-4 text-[#f0b429]">
                  {Array.from({ length: 5 }).map((_, i) => <i key={i} className="fas fa-star mr-0.5 text-xs"></i>)}
                </div>
                <p className="mt-3 text-sm italic leading-relaxed text-gray-600">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1a2744] px-6 py-14">
        <i className="fas fa-plane absolute right-10 top-8 text-6xl text-white/10 rotate-[-20deg]"></i>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:flex">
              <i className="fas fa-calendar-check text-2xl text-[#f0b429]"></i>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Ready to Start Your Journey?</h2>
              <p className="mt-1 text-gray-300">Book your free consultation today and take the first step towards your global education.</p>
            </div>
          </div>
          <a href="/qualification" className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-[#f0b429] px-8 py-4 text-sm font-bold text-[#1a2744] transition hover:-translate-y-1 hover:bg-[#d9a020]">
            <i className="fas fa-calendar"></i> Book Free Appointment
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
