import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [{ title: "My Profile — Pathway Education Counselling" }],
  }),
  component: Profile,
});
<button onClick={() => setModalOpen(true)} className="hidden rounded-lg bg-[#f0b429]...">Start Application Process</button>
function Profile() {
  const [user, setUser] = useState<any>(null);
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    institution: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      setFormData({
        full_name: user.user_metadata?.full_name || "",
        email: user.email || "",
        phone: user.user_metadata?.phone || "",
        institution: user.user_metadata?.institution || "",
      });
      fetchApplication(user.email);
    } else {
      window.location.href = "/login";
    }
    setLoading(false);
  };

  const fetchApplication = async (email: string) => {
    const { data } = await supabase
      .from("applications")
      .select("*")
      .eq("email", email)
      .single();
    if (data) setApplication(data);
  };

  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: formData.full_name,
        phone: formData.phone,
        institution: formData.institution,
      },
    });

    if (!error) {
      setSaved(true);
      setEditing(false);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-bold text-[#1a2744]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <style>{`* { font-family: 'Montserrat', sans-serif !important; }`}</style>

      {/* Header */}
      <header className="bg-white shadow-sm">
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
          <a href="/" className="text-sm font-semibold text-gray-600 hover:text-[#1a2744]">
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </a>
        </nav>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Profile Header */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1a2744] text-4xl font-bold text-white">
              {formData.full_name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-black text-[#1a2744]">{formData.full_name || "User"}</h1>
              <p className="mt-1 text-gray-600">{formData.email}</p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setEditing(!editing)}
                  className="rounded-lg bg-[#1a2744] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#141e36]"
                >
                  {editing ? "Cancel" : "Edit Profile"}
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-lg border-2 border-red-500 px-6 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        {editing && (
          <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-[#1a2744]">Edit Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Full Name</label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1a2744]">Institution</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-[#1a2744]"
                />
              </div>
              <button
                onClick={handleUpdate}
                className="rounded-lg bg-[#f0b429] px-8 py-3 font-bold text-[#1a2744] transition hover:bg-[#d9a020]"
              >
                Save Changes
              </button>
              {saved && <span className="ml-4 text-green-600 font-semibold">✓ Saved!</span>}
            </div>
          </div>
        )}

        {/* Application Details */}
        {application && (
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-[#1a2744]">Your Application</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs font-bold uppercase text-gray-500">Degree</div>
                <div className="mt-1 text-lg font-semibold text-[#1a2744]">{application.degree}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs font-bold uppercase text-gray-500">Current Education</div>
                <div className="mt-1 text-lg font-semibold text-[#1a2744]">{application.education}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs font-bold uppercase text-gray-500">Target Countries</div>
                <div className="mt-1 text-lg font-semibold text-[#1a2744]">{application.countries?.join(", ")}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="text-xs font-bold uppercase text-gray-500">Budget</div>
                <div className="mt-1 text-lg font-semibold text-[#1a2744]">
                  {application.currency === "USD" ? "$" : "₨"}{application.budget?.toLocaleString()}
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 md:col-span-2">
                <div className="text-xs font-bold uppercase text-gray-500">Institution</div>
                <div className="mt-1 text-lg font-semibold text-[#1a2744]">{application.institution}</div>
              </div>
              <div className="rounded-lg bg-[#f0b429]/20 p-4 md:col-span-2">
                <div className="text-xs font-bold uppercase text-[#1a2744]">Status</div>
                <div className="mt-1 text-lg font-bold text-[#1a2744] capitalize">{application.status}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
