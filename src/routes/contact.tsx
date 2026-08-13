import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — Pathway Education Counselling" }] }),
  component: Contact,
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

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <li><a href="/about" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">About</a></li>
            <li><a href="/framework" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Framework</a></li>
            <li><a href="/universities" className="relative text-gray-700 transition-colors duration-300 hover:text-[#1a2744] after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-[#f0b429] after:transition-all after:duration-300 hover:after:w-full">Universities</a></li>
            <li><a href="/contact" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Contact</a></li>
          </ul>
          <a href="/qualification" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">Start Application Process</a>
          <ProfileButton />
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"><i className="fas fa-bars text-2xl"></i></button>
        </nav>
        {menuOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col gap-2 px-6 py-4">
              <li><a href="/" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Home</a></li>
              <li><a href="/about" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">About</a></li>
              <li><a href="/framework" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Framework</a></li>
              <li><a href="/universities" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Universities</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 text-[#1a2744] transition-colors duration-200 hover:bg-gray-50">Contact</a></li>
              <li><a href="/qualification" className="mt-2 block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020]">Start Application Process</a></li>
            </ul>
          </div>
        )}
      </header>

      <section className="bg-[#1a2744] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Get in Touch</div>
          <h1 className="mt-3 text-5xl font-black leading-tight md:text-6xl">We'd Love to Hear From You</h1>
          <div className="mx-auto my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="text-lg text-gray-300 leading-relaxed">Have questions about studying abroad? Need guidance on your application? Reach out to us and our expert counsellors will get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1a2744]">Contact Information</h2>
            <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="mt-4 text-gray-600 leading-relaxed">Fill out the form and our team will get back to you within 24 hours. You can also reach us directly using the information below.</p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0b429]/10"><i className="fas fa-phone text-xl text-[#f0b429]"></i></div>
                <div><h3 className="text-lg font-bold text-[#1a2744]">Phone</h3><p className="mt-1 text-gray-600">+92 300 1234567</p><p className="text-gray-600">+92 300 7654321</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0b429]/10"><i className="fas fa-envelope text-xl text-[#f0b429]"></i></div>
                <div><h3 className="text-lg font-bold text-[#1a2744]">Email</h3><p className="mt-1 text-gray-600">info@pathwaycounselling.pk</p><p className="text-gray-600">admissions@pathwaycounselling.pk</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0b429]/10"><i className="fas fa-location-dot text-xl text-[#f0b429]"></i></div>
                <div><h3 className="text-lg font-bold text-[#1a2744]">Office Address</h3><p className="mt-1 text-gray-600">123 Education Boulevard, Gulberg III,<br />Lahore, Punjab, Pakistan</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f0b429]/10"><i className="fas fa-clock text-xl text-[#f0b429]"></i></div>
                <div><h3 className="text-lg font-bold text-[#1a2744]">Working Hours</h3><p className="mt-1 text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p><p className="text-gray-600">Sunday: Closed</p></div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"><i className="fas fa-check text-4xl text-green-600"></i></div>
                <h2 className="text-2xl font-black text-[#1a2744]">Message Sent!</h2>
                <p className="mt-4 text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 rounded-lg bg-[#1a2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#141e36]">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-[#1a2744]">Send us a Message</h2>
                <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div><label className="mb-2 block text-sm font-semibold text-[#1a2744]">Full Name <span className="text-red-500">*</span></label><input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" /></div>
                    <div><label className="mb-2 block text-sm font-semibold text-[#1a2744]">Email Address <span className="text-red-500">*</span></label><input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" /></div>
                  </div>
                  <div><label className="mb-2 block text-sm font-semibold text-[#1a2744]">Subject <span className="text-red-500">*</span></label><input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="How can we help you?" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" /></div>
                  <div><label className="mb-2 block text-sm font-semibold text-[#1a2744]">Message <span className="text-red-500">*</span></label><textarea name="message" required value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your goals..." className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]"></textarea></div>
                  <button type="submit" className="w-full rounded-lg bg-[#1a2744] px-6 py-4 text-base font-bold text-white transition hover:bg-[#141e36]">Send Message <i className="fas fa-paper-plane ml-2"></i></button>
                </form>
              </>
            )}
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
