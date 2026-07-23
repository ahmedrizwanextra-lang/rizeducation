import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/qualification")({
  head: () => ({ meta: [{ title: "Start Application — Pathway Education Counselling" }] }),
  component: Qualification,
});

function Qualification() {
  const [step, setStep] = useState(1);
  const [degree, setDegree] = useState("");
  const [education, setEducation] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  const [budget, setBudget] = useState(5000);
  const [currency, setCurrency] = useState<"USD" | "PKR">("USD");
  const [institution, setInstitution] = useState("");

  const toggleCountry = (c: string) => setCountries((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      localStorage.setItem("qualificationData", JSON.stringify({ degree, education, countries, budget, currency, institution }));
      window.location.href = "/signup";
    }
  };

  const prevStep = () => setStep(step - 1);

  const canProceed = () => {
    if (step === 1) return degree !== "";
    if (step === 2) return education !== "";
    if (step === 3) return countries.length > 0;
    if (step === 4) return true;
    if (step === 5) return institution.trim() !== "";
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`*:not(.fa):not(.fas):not(.far):not(.fab):not(.fal):not(.fad) { font-family: 'Montserrat', sans-serif !important; } select, option, button, input, textarea { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-[#1a2744]"><i className="fas fa-arrow-left mr-2"></i> Back to Home</a>
        </nav>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8 text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Application Process</div>
          <h1 className="mt-3 text-4xl font-black text-[#1a2744] md:text-5xl">Start Your Journey</h1>
          <div className="mx-auto my-5 h-1 w-12 rounded bg-[#f0b429]"></div>
        </div>

        <div className="mb-10">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200"><div className="h-full bg-[#f0b429] transition-all duration-500" style={{ width: `${(step / 5) * 100}%` }}></div></div>
          <div className="mt-3 flex justify-between text-sm font-semibold text-gray-500"><span>Step {step}</span><span>of 5</span></div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
          <div key={step} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">What degree are you looking for?</h2>
                <p className="mt-2 text-gray-600">Select the program level you're interested in.</p>
                <select value={degree} onChange={(e) => setDegree(e.target.value)} className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]">
                  <option value="">-- Select a degree --</option>
                  <option value="Foundations Programme">Foundations Programme</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Masters">Masters</option>
                </select>
              </div>
            )}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">What is your current level of education?</h2>
                <p className="mt-2 text-gray-600">Tell us where you are in your academic journey.</p>
                <select value={education} onChange={(e) => setEducation(e.target.value)} className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]">
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
                <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">Which country do you want to go to?</h2>
                <p className="mt-2 text-gray-600">Select all that apply.</p>
                <div className="mt-6 space-y-3">
                  {["Canada", "Australia", "United States of America", "United Kingdom"].map((c) => (
                    <label key={c} className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 p-4 transition hover:border-[#1a2744]">
                      <input type="checkbox" checked={countries.includes(c)} onChange={() => toggleCountry(c)} className="h-5 w-5 accent-[#1a2744]" />
                      <span className="text-base font-medium text-[#1a2744]">{c}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">What is your budget?</h2>
                <p className="mt-2 text-gray-600">Set your approximate budget for studying abroad.</p>
                <div className="mt-6 inline-flex overflow-hidden rounded-lg border-2 border-gray-200">
                  <button onClick={() => setCurrency("USD")} className={`px-6 py-2 text-sm font-semibold transition ${currency === "USD" ? "bg-[#1a2744] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}>USD ($)</button>
                  <button onClick={() => setCurrency("PKR")} className={`px-6 py-2 text-sm font-semibold transition ${currency === "PKR" ? "bg-[#1a2744] text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}>PKR (₨)</button>
                </div>
                <div className="mt-8">
                  <div className="mb-2 text-center text-3xl font-black text-[#1a2744]">{currency === "USD" ? "$" : "₨"}{budget.toLocaleString()}</div>
                  <input type="range" min={currency === "USD" ? 1000 : 100000} max={currency === "USD" ? 100000 : 10000000} step={currency === "USD" ? 1000 : 100000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-[#f0b429]" />
                  <div className="mt-2 flex justify-between text-xs text-gray-500"><span>{currency === "USD" ? "$1,000" : "₨100,000"}</span><span>{currency === "USD" ? "$100,000" : "₨10,000,000"}</span></div>
                </div>
              </div>
            )}
            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2744] md:text-3xl">What is your current educational institution?</h2>
                <p className="mt-2 text-gray-600">Tell us where you're currently studying.</p>
                <textarea value={institution} onChange={(e) => { if (e.target.value.length <= 1000) setInstitution(e.target.value); }} placeholder="Enter your institution name..." rows={4} className="mt-6 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-4 text-base outline-none transition focus:border-[#1a2744]" />
                <div className="mt-2 text-right text-xs text-gray-500">{institution.length} / 1000 characters</div>
              </div>
            )}
          </div>

          <div className="mt-10 flex justify-between">
            <button onClick={prevStep} disabled={step === 1} className="rounded-lg border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-[#1a2744] hover:text-[#1a2744] disabled:cursor-not-allowed disabled:opacity-40"><i className="fas fa-arrow-left mr-2"></i> Back</button>
            <button onClick={nextStep} disabled={!canProceed()} className="rounded-lg bg-[#1a2744] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#141e36] disabled:cursor-not-allowed disabled:opacity-40">{step === 5 ? "Continue to Account" : "Next"} <i className="fas fa-arrow-right ml-2"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
