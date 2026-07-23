import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pathway Education Counselling — Study Abroad Experts" },
      {
        name: "description",
        content: "Expert counselling for O/A Level students to help you study at top universities worldwide.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [fade, setFade] = useState(true);

  // Qualification data
  const [degree, setDegree] = useState("");
  const [education, setEducation] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [budget, setBudget] = useState(5000);
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD");
  const [institution, setInstitution] = useState("");

  const toggleCountry = (c: string) => {
    setCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const nextStep = () => {
    setFade(false);
    setTimeout(() => {
      if (step < 5) {
        setStep(step + 1);
      } else {
        // Save qualification data and redirect to signup
        const data = { degree, education, countries, budget, currency, institution };
        localStorage.setItem("qualificationData", JSON.stringify(data));
        window.location.href = "/signup";
      }
      setFade(true);
    }, 200);
  };

  const prevStep = () => {
    setFade(false);
    setTimeout(() => {
      setStep(step - 1);
      setFade(true);
    }, 200);
  };

  const closeModal = () => {
    setModalOpen(false);
    setStep(1);
  };

  const canProceed = () => {
    if (step === 1) return degree !== "";
    if (step === 2) return education !== "";
    if (step === 3) return countries.length > 0;
    if (step === 4) return true;
    if (step === 5) return institution.trim() !== "";
    return false;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* NAVIGATION */}
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
            <li><a href="/" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Home</a></li>
            <li><a href="/about" className="text-gray-700 hover:text-[#1a2744]">About</a></li>
            <li><a href="/framework" className="text-gray-700 hover:text-[#1a2744]">Framework</a></li>
            <li><a href="/universities" className="text-gray-700 hover:text-[#1a2744]">Universities</a></li>
            <li><a href="/contact" className="text-gray-700 hover:text-[#1a2744]">Contact</a></li>
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="hidden rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020] md:inline-block"
          >
            Start Application Process
          </button>

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
              <li>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-2 w-full rounded-lg bg-[#f0b429] px-6 py-3 text-sm font-semibold text-[#1a2744]"
                >
                  Start Application Process
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="flex items-center gap-10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-black leading-tight text-[#1a2744] md:text-7xl">
              Your Future.<br />Our Guidance.
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Expert counselling for O/A Level students to help you study at top universities worldwide.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#141e36]"
              >
                Start Application Process <i className="fas fa-arrow-right"></i>
              </button>
              <a href="/universities" className="rounded-lg border-2 border-[#1a2744] px-7 py-4 text-base font-semibold text-[#1a2744] transition hover:bg-[#1a2744] hover:text-white">
                Explore Universities
              </a>
            </div>

            <div className="mt-10 flex gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <i className="fas fa-user-friends text-[#1a2744]"></i>
                </div>
                <span className="text-sm font-semibold">Personalized<br />Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <i className="fas fa-university text-[#1a2744]"></i>
                </div>
                <span className="text-sm font-semibold">Top University<br />Placements</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <i className="fas fa-clipboard-list text-[#1a2744]"></i>
                </div>
                <span className="text-sm font-semibold">End-to-End<br />Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop"
              alt="Student studying"
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="absolute right-0 top-5 rounded-xl bg-[#1a2744] px-7 py-6 text-white shadow-xl">
              <div className="mb-2 flex items-center gap-2 text-sm">
                <i className="fas fa-users text-[#f0b429]"></i>
                <span>Our Students</span>
              </div>
              <div className="text-5xl font-black">500+</div>
              <div className="text-sm opacity-80">Successful<br />Placements</div>
              <div className="mt-3 flex text-[#f0b429]">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <div className="text-sm opacity-80">4.9/5 Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="bg-[#1a2744] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold">How We Help</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mx-auto mb-12 max-w-2xl text-gray-300">
            We make your study abroad journey simple, clear and successful.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {[
              { icon: "compass", title: "Career Counselling", desc: "We help you identify the right career and university based on your goals." },
              { icon: "university", title: "University Shortlisting", desc: "Personalized list of top universities that match your profile." },
              { icon: "file-alt", title: "Application Support", desc: "We guide you through each step of the application process." },
              { icon: "passport", title: "Visa Guidance", desc: "Expert support for visa applications and interviews." },
              { icon: "plane", title: "Pre-Departure Support", desc: "From accommodation to travel, we've got you covered." },
              { icon: "graduation-cap", title: "Post-Arrival Support", desc: "Assistance even after you reach your destination university." },
            ].map((service) => (
              <div key={service.title} className="rounded-xl bg-white p-8 text-left text-[#1a2744] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center">
                  <i className={`fas fa-${service.icon} text-3xl`}></i>
                </div>
                <h3 className="text-base font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-[#1a2744]">Popular Destinations</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "United Kingdom", desc: "Top universities. Diverse culture. Global exposure.", flag: "🇬🇧", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400&h=250&fit=crop" },
              { name: "Canada", desc: "Quality education. PGWP opportunities.", flag: "🇨🇦", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop" },
              { name: "Australia", desc: "World-class education. Great lifestyle.", flag: "🇦🇺", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=250&fit=crop" },
              { name: "United States", desc: "Endless opportunities. World-leading institutions.", flag: "🇺", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=400&h=250&fit=crop" },
              { name: "Europe", desc: "Affordable education. Rich cultural experience.", flag: "🇪🇺", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=250&fit=crop" },
            ].map((dest) => (
              <div key={dest.name} className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-40">
                  <img src={dest.img} alt={dest.name} className="h-full w-full object-cover" />
                  <div className="absolute -bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white text-xl shadow-lg">
                    {dest.flag}
                  </div>
                </div>
                <div className="p-5 text-left">
                  <h3 className="text-base font-bold text-[#1a2744]">{dest.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/universities" className="mt-10 inline-block rounded-lg border-2 border-[#1a2744] px-8 py-3.5 text-base font-semibold text-[#1a2744] transition hover:bg-[#1a2744] hover:text-white">
            Explore All Countries
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#1a2744] px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl text-white">
            <h2 className="text-3xl font-extrabold">Let's Plan Your Future</h2>
            <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
            <p className="text-gray-300">
              Book a free one-on-one session with our expert counsellor and take the first step towards your dream university.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f0b429] px-8 py-4 text-base font-bold text-[#1a2744] transition hover:bg-[#d9a020]"
            >
              Start Application Process <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div className="flex gap-10">
            <div className="text-center text-white">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20">
                <i className="fas fa-comments text-2xl text-[#f0b429]"></i>
              </div>
              <span className="text-sm font-medium">One-on-One<br />Expert Session</span>
            </div>
            <div className="text-center text-white">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20">
                <i className="fas fa-calendar-alt text-2xl text-[#f0b429]"></i>
              </div>
              <span className="text-sm font-medium">Flexible<br />Scheduling</span>
            </div>
            <div className="text-center text-white">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-white/20">
                <i className="fas fa-shield-alt text-2xl text-[#f0b429]"></i>
              </div>
              <span className="text-sm font-medium">100% Confidential<br />& Trusted</span>
            </div>
          </div>
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
              <div className="text-xs font-bold uppercase text-[#1a2744]">University of<br />Toronto</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold uppercase text-[#1a2744]">University of<br />Melbourne</div>
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

      {/* QUALIFICATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Progress bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-t-2xl bg-gray-100">
              <div
                className="h-full bg-[#f0b429] transition-all duration-500"
                style={{ width: `${(step / 5) * 100}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-10">
              {/* Step indicator */}
              <div className="mb-6 text-sm font-semibold text-[#f0b429]">
                Step {step} of 5
              </div>

              {/* Question content with fade animation */}
              <div
                className={`transition-all duration-300 ${
                  fade ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">
                      What degree are you looking for?
                    </h2>
                    <p className="mt-2 text-gray-600">Select the program level you're interested in.</p>
                    <select
                      value={degree}
                      onChange={(e) => setDegree(e.target.value)}
                      className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]"
                    >
                      <option value="">-- Select a degree --</option>
                      <option value="Foundations Programme">Foundations Programme</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">
                      What is your current level of education?
                    </h2>
                    <p className="mt-2 text-gray-600">Tell us where you are in your academic journey.</p>
                    <select
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]"
                    >
                      <option value="">-- Select your level --</option>
                      <option value="Alevels">A Levels</option>
                      <option value="Olevels">O Levels</option>
                      <option value="Matric">Matric</option>
                      <option value="Fsc">FSc</option>
                      <option value="Undergraduate">Undergraduate</option>
                      <option value="Masters">Masters</option>
                    </select>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">
                      Which country do you want to go to?
                    </h2>
                    <p className="mt-2 text-gray-600">Select all that apply.</p>
                    <div className="mt-6 space-y-3">
                      {["Canada", "Australia", "United States of America", "United Kingdom"].map((c) => (
                        <label
                          key={c}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 p-4 transition hover:border-[#1a2744]"
                        >
                          <input
                            type="checkbox"
                            checked={countries.includes(c)}
                            onChange={() => toggleCountry(c)}
                            className="h-5 w-5 accent-[#1a2744]"
                          />
                          <span className="text-base font-medium text-[#1a2744]">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">
                      What is your budget?
                    </h2>
                    <p className="mt-2 text-gray-600">Set your approximate budget for studying abroad.</p>

                    {/* Currency toggle */}
                    <div className="mt-6 inline-flex overflow-hidden rounded-lg border-2 border-gray-200">
                      <button
                        onClick={() => setCurrency("USD")}
                        className={`px-6 py-2 text-sm font-semibold transition ${
                          currency === "USD"
                            ? "bg-[#1a2744] text-white"
                            : "bg-white text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        USD ($)
                      </button>
                      <button
                        onClick={() => setCurrency("PKR")}
                        className={`px-6 py-2 text-sm font-semibold transition ${
                          currency === "PKR"
                            ? "bg-[#1a2744] text-white"
                            : "bg-white text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        PKR (₨)
                      </button>
                    </div>

                    {/* Slider */}
                    <div className="mt-8">
                      <div className="mb-2 text-center text-3xl font-black text-[#1a2744]">
                        {currency === "USD" ? "$" : "₨"}
                        {budget.toLocaleString()}
                      </div>
                      <input
                        type="range"
                        min={currency === "USD" ? 1000 : 100000}
                        max={currency === "USD" ? 100000 : 10000000}
                        step={currency === "USD" ? 1000 : 100000}
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="w-full accent-[#f0b429]"
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>{currency === "USD" ? "$1,000" : "₨100,000"}</span>
                        <span>{currency === "USD" ? "$100,000" : "₨10,000,000"}</span>
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">
                      What is your current educational institution?
                    </h2>
                    <p className="mt-2 text-gray-600">Tell us where you're currently studying.</p>
                    <textarea
                      value={institution}
                      onChange={(e) => {
                        if (e.target.value.length <= 1000) setInstitution(e.target.value);
                      }}
                      placeholder="Enter your institution name..."
                      rows={4}
                      className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]"
                    />
                    <div className="mt-2 text-right text-xs text-gray-500">
                      {institution.length} / 1000 characters
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className="rounded-lg border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-[#1a2744] hover:text-[#1a2744] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="rounded-lg bg-[#1a2744] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#141e36] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {step === 5 ? "Continue to Account" : "Next"} <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
