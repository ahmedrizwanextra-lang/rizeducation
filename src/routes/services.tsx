import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/services")({
  component: Services,
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

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: "compass",
      title: "Career Counselling",
      description: "We help you identify the right career and university based on your goals, interests, and academic background.",
    },
    {
      icon: "university",
      title: "University Shortlisting",
      description: "Get a personalized list of top universities that match your profile and aspirations.",
    },
    {
      icon: "file-alt",
      title: "Application Support",
      description: "We guide you through each step of the application process, ensuring your applications are perfect.",
    },
    {
      icon: "passport",
      title: "Visa Guidance",
      description: "Expert support for visa applications and interviews to ensure a smooth process.",
    },
    {
      icon: "plane",
      title: "Pre-Departure Support",
      description: "From accommodation to travel arrangements, we've got you covered before you leave.",
    },
    {
      icon: "graduation-cap",
      title: "Post-Arrival Support",
      description: "We continue to assist you even after you reach your destination university.",
    },
  ];

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
            <li><a href="/about" className="text-gray-700 hover:text-[#1a2744]">About</a></li>
            <li><a href="/framework" className="text-gray-700 hover:text-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>
          <a href="/qualification" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">
            Start Application Process
          </a>
          <ProfileButton />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
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

      <section className="bg-[#1a2744] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">What We Offer</div>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-6xl">Our Services</h1>
          <div className="mx-auto my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            We provide comprehensive support to help you navigate your study abroad journey from start to finish.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a2744]">
                  <i className={`fas fa-${service.icon} text-3xl text-[#f0b429]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1a2744]">{service.title}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Ready to Get Started?</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Take the first step towards your dream university. Book a free consultation with our expert counsellors today.
          </p>
          <a href="/qualification" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-8 py-4 text-base font-bold text-white transition hover:bg-[#141e36]">
            Start Application Process <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <footer className="bg-[#1a2744] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <i className="fas fa-graduation-cap text-xl text-[#1a2744]"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white">Pathway</span>
                <span className="text-[10px] text-gray-300">Education Counselling</span>
              </div>
            </a>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">Guiding O/A Level students in Pakistan to top universities worldwide.</p>
            <div className="mt-5 flex gap-3">
              {["facebook-f", "instagram", "linkedin-in", "youtube"].map((ic) => (
                <a key={ic} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f0b429] hover:text-[#1a2744]">
                  <i className={`fab fa-${ic}`}></i>
                </a>
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
