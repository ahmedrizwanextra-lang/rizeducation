import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Create Account — Pathway Education Counselling" }] }),
  component: Signup,
});

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const qualData = (() => {
    try { return JSON.parse(localStorage.getItem("qualificationData") || "null"); } catch { return null; }
  })();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setShowSuccess(true); };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`* { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1a2744]"><i className="fas fa-graduation-cap text-[#f0b429] text-xl"></i></div>
            <div className="flex flex-col"><span className="text-xl font-extrabold text-[#1a2744]">Pathway</span><span className="text-[11px] text-gray-500">Education Counselling</span></div>
          </a>
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-[#1a2744]"><i className="fas fa-arrow-left mr-2"></i> Back to Home</a>
        </nav>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          {qualData && (
            <div className="rounded-2xl bg-[#1a2744] p-8 text-white shadow-xl">
              <div className="mb-6 text-sm font-bold uppercase tracking-widest text-[#f0b429]">Your Application</div>
              <h2 className="text-2xl font-extrabold">Summary</h2>
              <div className="my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
              <div className="space-y-4 text-sm">
                <div><div className="text-xs uppercase tracking-wider text-gray-400">Degree</div><div className="font-semibold">{qualData.degree}</div></div>
                <div><div className="text-xs uppercase tracking-wider text-gray-400">Current Level</div><div className="font-semibold">{qualData.education}</div></div>
                <div><div className="text-xs uppercase tracking-wider text-gray-400">Countries</div><div className="font-semibold">{qualData.countries?.join(", ")}</div></div>
                <div><div className="text-xs uppercase tracking-wider text-gray-400">Budget</div><div className="font-semibold">{qualData.currency === "USD" ? "$" : "₨"}{qualData.budget?.toLocaleString()}</div></div>
                <div><div className="text-xs uppercase tracking-wider text-gray-400">Institution</div><div className="font-semibold">{qualData.institution}</div></div>
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-white p-8 shadow-xl md:p-10">
            <div className="mb-6 text-sm font-bold uppercase tracking-widest text-[#f0b429]">Create Your Account</div>
            <h1 className="text-3xl font-black text-[#1a2744]">Almost there!</h1>
            <p className="mt-2 text-gray-600">Fill in your details to complete your application.</p>
            <div className="my-5 h-1 w-12 rounded bg-[#f0b429]"></div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Profile Picture</label>
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    {profilePic ? <img src={profilePic} alt="Profile" className="h-full w-full object-cover" /> : <i className="fas fa-user text-3xl text-gray-400"></i>}
                  </div>
                  <label className="cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-2 text-sm font-semibold text-[#1a2744] transition hover:border-[#1a2744]">
                    <i className="fas fa-camera mr-2"></i> Upload Photo
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Full Name <span className="text-red-500">*</span></label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Email Address <span className="text-red-500">*</span></label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+92 300 0000000" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Password <span className="text-red-500">*</span></label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a strong password" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-[#f0b429] px-6 py-4 text-base font-bold text-[#1a2744] transition hover:bg-[#d9a020]">Create Account <i className="fas fa-arrow-right ml-2"></i></button>
            </form>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-2xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100"><i className="fas fa-check text-4xl text-green-600"></i></div>
            <h2 className="text-2xl font-black text-[#1a2744]">Account Created Successfully!</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Your account has been created and application details have been submitted.</p>
            <p className="mt-2 text-sm text-gray-500">We'll contact you at <strong>{email}</strong> shortly.</p>
            <a href="/" className="mt-8 inline-block rounded-lg bg-[#1a2744] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#141e36]">Back to Home</a>
          </div>
        </div>
      )}
    </div>
  );
}
