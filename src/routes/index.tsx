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
            <li><a href="/" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-[#1a2744]">About</a></li>
            <li><a href="/framework" className="text-gray-700 hover:text-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>
          <a href="/qualification" className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block">Start Application Process</a>
          <ProfileButton />
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
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/qualification" className="group inline-flex items-center gap-3 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#141e36] hover:shadow-xl">
                <i className="fas fa-clipboard"></i> Start Application Process <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
              <a href="/universities" className="group inline-flex items-center gap-3 rounded-lg border-2 border-[#1a2744] bg-white px-7 py-4 text-base font-semibold text-[#1a2744] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a2744] hover:text-white hover:shadow-xl">
                <i className="fas fa-compass"></i> Explore Universities <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
