import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Pathway Education Counselling" }] }),
  component: Login,
});

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else window.location.href = "/profile";
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName, phone } },
      });
      if (error) setError(error.message);
      else {
        alert("Account created! Please check your email to verify.");
        setIsLogin(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex items-center justify-center px-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`* { font-family: 'Montserrat', sans-serif !important; }`}</style>

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1a2744]">
            <i className="fas fa-graduation-cap text-3xl text-[#f0b429]"></i>
          </div>
          <h1 className="text-3xl font-black text-[#1a2744]">{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Full Name</label>
              <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
            </div>
          )}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
          </div>
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Phone</label>
              <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]" />
            </div>
          )}

          {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#1a2744] px-6 py-4 font-bold text-white transition hover:bg-[#141e36] disabled:opacity-50">
            {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="font-bold text-[#1a2744] hover:text-[#f0b429]">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        <a href="/" className="mt-6 block text-center text-sm text-gray-500 hover:text-[#1a2744]">
          <i className="fas fa-arrow-left mr-2"></i> Back to Home
        </a>
      </div>
    </div>
  );
}
