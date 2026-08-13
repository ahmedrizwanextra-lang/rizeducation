import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export const Route = createFileRoute("/universities")({
  head: () => ({ meta: [{ title: "Universities — Pathway Education Counselling" }] }),
  component: Universities,
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

const universities = [
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 1, qsRank: 30,
    name: "McGill University",
    city: "Montreal",
    academicReq: "Recognized secondary qualification; program prerequisites; competitive grades. For Pakistan, A-Level/HSSC equivalency is assessed by program.",
    englishReq: "IELTS Academic typically 6.5+; exemptions may apply.",
    tuition: "CAD 25,000–65,000",
    feeNotes: "Varies by programme; professional programmes can be higher.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 2, qsRank: 32,
    name: "University of Toronto",
    city: "Toronto",
    academicReq: "Senior/Grade 12 equivalent with required prerequisites; British-patterned applicants: 5 IGCSE/GCSE subjects + 3 A Levels; competitive grades.",
    englishReq: "IELTS 6.5 overall, no band below 6.0 for direct admission.",
    tuition: "CAD 45,000–70,000",
    feeNotes: "Varies substantially by faculty/program.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 3, qsRank: 45,
    name: "University of British Columbia",
    city: "Vancouver",
    academicReq: "Recognized secondary qualification plus programme-specific prerequisites; competitive academic profile.",
    englishReq: "IELTS Academic 6.5, no component below 6.0; TOEFL iBT 90.",
    tuition: "CAD 45,000–65,000",
    feeNotes: "Tuition varies by degree and course load.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 4, qsRank: 96,
    name: "University of Alberta",
    city: "Edmonton",
    academicReq: "Senior secondary/high-school equivalent; required subjects and competitive grades vary by programme.",
    englishReq: "IELTS Academic typically 6.5 overall; exact test options vary.",
    tuition: "CAD 32,000–50,000",
    feeNotes: "Engineering and some professional programmes may cost more.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 5, qsRank: 113,
    name: "University of Waterloo",
    city: "Waterloo",
    academicReq: "Secondary-school equivalent with programme prerequisites; strong grades expected, especially for engineering/computing.",
    englishReq: "IELTS Academic typically 6.5 overall; exact component requirements vary.",
    tuition: "CAD 45,000–75,000",
    feeNotes: "Programme/faculty dependent; co-op fees may apply.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 6, qsRank: 142,
    name: "Western University",
    city: "London, Ontario",
    academicReq: "Senior secondary equivalent; required courses and competitive grades depend on programme.",
    englishReq: "IELTS Academic typically 6.5 overall.",
    tuition: "CAD 35,000–60,000",
    feeNotes: "Business, engineering and professional programmes may differ.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 7, qsRank: 162,
    name: "Université de Montréal",
    city: "Montreal",
    academicReq: "Secondary qualification equivalent to Quebec admission standard; programme prerequisites. Many programmes are French-taught.",
    englishReq: "French proficiency is required for many programmes; English requirements depend on programme.",
    tuition: "CAD 25,000–45,000",
    feeNotes: "Tuition depends on programme and student status.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 8, qsRank: 174,
    name: "McMaster University",
    city: "Hamilton",
    academicReq: "Senior secondary equivalent with programme-specific prerequisites; competitive grades.",
    englishReq: "IELTS Academic typically 6.5 overall; programme-specific rules may apply.",
    tuition: "CAD 35,000–60,000",
    feeNotes: "Health sciences and professional programmes can differ.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 9, qsRank: 179,
    name: "Queen's University",
    city: "Kingston",
    academicReq: "For Pakistan, HSSC applicants generally need about 80% to fall in the competitive range; A-Level applicants are assessed by qualification/programme.",
    englishReq: "English proficiency required where applicable; IELTS commonly around 6.5.",
    tuition: "CAD 40,000–65,000",
    feeNotes: "Programme dependent.",
  },
  {
    country: "Canada", flag: "🇨🇦",
    countryRank: 10, qsRank: 228,
    name: "University of Ottawa",
    city: "Ottawa",
    academicReq: "Recognized secondary qualification with programme prerequisites; competitive grades.",
    englishReq: "IELTS Academic typically 6.5 overall; some programmes have higher requirements.",
    tuition: "CAD 35,000–55,000",
    feeNotes: "Varies by faculty and programme.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 1, qsRank: 1,
    name: "Massachusetts Institute of Technology (MIT)",
    city: "Cambridge, Massachusetts",
    academicReq: "Completed secondary school; extremely competitive academic record with strong mathematics/science preparation.",
    englishReq: "English proficiency may be required depending on background; strong academic English expected.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees only; extensive need-based aid is available to admitted students.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 2, qsRank: 3,
    name: "Stanford University",
    city: "Stanford, California",
    academicReq: "Completed secondary school; highly selective holistic review; strong academic preparation and extracurricular profile.",
    englishReq: "English proficiency expected; testing/waiver rules depend on applicant background.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees; room, board and personal expenses additional.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 3, qsRank: 5,
    name: "Harvard University",
    city: "Cambridge, Massachusetts",
    academicReq: "Completed secondary school; highly selective holistic admission; no simple percentage cutoff.",
    englishReq: "English proficiency expected; international applicants must demonstrate ability to study in English.",
    tuition: "USD 60,000–65,000",
    feeNotes: "Total cost of attendance is higher after housing, food and other costs.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 4, qsRank: 7,
    name: "California Institute of Technology (Caltech)",
    city: "Pasadena, California",
    academicReq: "Completed secondary school with exceptional mathematics/science preparation; highly selective.",
    englishReq: "English proficiency expected; test requirements depend on current policy.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees only; aid may substantially reduce net cost.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 5, qsRank: 15,
    name: "University of Pennsylvania",
    city: "Philadelphia, Pennsylvania",
    academicReq: "Completed secondary school; highly competitive holistic review with strong academic preparation.",
    englishReq: "English proficiency expected; exact testing policy varies by applicant.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees only; housing and living costs additional.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 6, qsRank: 16,
    name: "Cornell University",
    city: "Ithaca, New York",
    academicReq: "Completed secondary school; college/school-specific prerequisites and highly competitive academic profile.",
    englishReq: "English proficiency may be required depending on educational background.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition varies by college; additional fees and living costs apply.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 7, qsRank: 16,
    name: "Yale University",
    city: "New Haven, Connecticut",
    academicReq: "Completed secondary school; highly selective holistic admission.",
    englishReq: "English proficiency expected; current testing policy should be checked for the applicant's cycle.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees; need-based financial aid may substantially reduce net cost.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 8, qsRank: 20,
    name: "Johns Hopkins University",
    city: "Baltimore, Maryland",
    academicReq: "Completed secondary school; strong academic preparation and competitive holistic profile.",
    englishReq: "English proficiency expected; exact testing policy varies.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees; living costs additional.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 9, qsRank: 20,
    name: "University of California, Berkeley",
    city: "Berkeley, California",
    academicReq: "Completed secondary school equivalent; UC subject requirements and competitive grades.",
    englishReq: "English proficiency required for applicants whose education does not meet UC English-language criteria.",
    tuition: "USD 50,000–65,000",
    feeNotes: "International nonresident tuition is substantially higher than California resident tuition.",
  },
  {
    country: "USA", flag: "🇺🇸",
    countryRank: 10, qsRank: 24,
    name: "University of Chicago",
    city: "Chicago, Illinois",
    academicReq: "Completed secondary school; highly selective holistic admission.",
    englishReq: "English proficiency expected; exact testing requirements depend on applicant background.",
    tuition: "USD 65,000–70,000",
    feeNotes: "Tuition/fees only; housing and living costs additional.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 1, qsRank: 2,
    name: "Imperial College London",
    city: "London",
    academicReq: "Typically 3 A Levels or equivalent; grades vary by course and can be as high as A*A*A.",
    englishReq: "IELTS commonly 6.5–7.0 depending on department/course.",
    tuition: "GBP 35,000–55,000",
    feeNotes: "International tuition varies significantly by course.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 2, qsRank: 4,
    name: "University of Oxford",
    city: "Oxford",
    academicReq: "Typically 3 A Levels or equivalent; course-specific requirements commonly range from AAA to A*A*A.",
    englishReq: "IELTS commonly 7.0–7.5 depending on course.",
    tuition: "GBP 35,000–55,000",
    feeNotes: "Medicine and some science courses can be higher.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 3, qsRank: 6,
    name: "University of Cambridge",
    city: "Cambridge",
    academicReq: "Typically 3 A Levels or equivalent; many courses ask for A*A*A or similar.",
    englishReq: "IELTS commonly 7.5 overall for applicants needing English evidence.",
    tuition: "GBP 30,000–50,000",
    feeNotes: "International tuition varies by course; some subjects have additional college fees.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 4, qsRank: 9,
    name: "University College London (UCL)",
    city: "London",
    academicReq: "Typically 3 A Levels or equivalent; course-specific requirements often range from A*A*A to ABB.",
    englishReq: "IELTS commonly 6.5–7.5 depending on programme.",
    tuition: "GBP 30,000–45,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 5, qsRank: 31,
    name: "King's College London",
    city: "London",
    academicReq: "Typically 3 A Levels or equivalent; requirements vary by course.",
    englishReq: "IELTS commonly 6.5–7.5 depending on programme.",
    tuition: "GBP 28,000–45,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 6, qsRank: 34,
    name: "University of Edinburgh",
    city: "Edinburgh",
    academicReq: "Typically 3 A Levels or equivalent; requirements vary by degree.",
    englishReq: "IELTS commonly 6.5–7.0 depending on programme.",
    tuition: "GBP 28,000–40,000",
    feeNotes: "International tuition varies by degree.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 7, qsRank: 35,
    name: "University of Manchester",
    city: "Manchester",
    academicReq: "Typically 3 A Levels or equivalent; course requirements vary.",
    englishReq: "IELTS commonly 6.5–7.0 depending on programme.",
    tuition: "GBP 28,000–40,000",
    feeNotes: "International fees vary by subject.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 8, qsRank: 51,
    name: "University of Bristol",
    city: "Bristol",
    academicReq: "Typically 3 A Levels or equivalent; course-specific requirements.",
    englishReq: "IELTS commonly 6.5–7.0 depending on programme.",
    tuition: "GBP 27,000–40,000",
    feeNotes: "Subject dependent.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 9, qsRank: 56,
    name: "London School of Economics and Political Science (LSE)",
    city: "London",
    academicReq: "Typically 3 A Levels or equivalent; very strong grades expected, often A*AA or similar.",
    englishReq: "IELTS commonly 7.0 overall with component requirements depending on programme.",
    tuition: "GBP 28,000–40,000",
    feeNotes: "Tuition varies by programme.",
  },
  {
    country: "UK", flag: "🇬🇧",
    countryRank: 10, qsRank: 74,
    name: "University of Warwick",
    city: "Coventry",
    academicReq: "Typically 3 A Levels or equivalent; requirements vary by course, often around AAB–A*A*A.",
    englishReq: "IELTS commonly 6.5–7.0 depending on programme.",
    tuition: "GBP 25,000–35,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 1, qsRank: 19,
    name: "The University of New South Wales (UNSW Sydney)",
    city: "Sydney",
    academicReq: "Recognized senior secondary qualification; ATAR-equivalent/academic score varies by degree.",
    englishReq: "IELTS typically 6.5 overall; some degrees require higher.",
    tuition: "AUD 45,000–65,000",
    feeNotes: "Annual fee varies by course and study load.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 2, qsRank: 22,
    name: "The University of Melbourne",
    city: "Melbourne",
    academicReq: "Recognized secondary qualification; course prerequisites and academic score requirements vary.",
    englishReq: "IELTS typically 6.5 overall; some courses require higher.",
    tuition: "AUD 45,000–65,000",
    feeNotes: "Fee depends on course and subject mix.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 3, qsRank: 28,
    name: "The University of Sydney",
    city: "Sydney",
    academicReq: "Recognized senior secondary qualification; equivalent rank/score varies by course.",
    englishReq: "IELTS typically 6.5 overall; higher for some programmes.",
    tuition: "AUD 50,000–65,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 4, qsRank: 29,
    name: "Australian National University (ANU)",
    city: "Canberra",
    academicReq: "Recognized secondary qualification; minimum selection rank varies by degree.",
    englishReq: "IELTS typically 6.5 overall; course-specific exceptions apply.",
    tuition: "AUD 45,000–60,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 5, qsRank: 31,
    name: "Monash University",
    city: "Melbourne",
    academicReq: "Recognized secondary qualification; academic score and prerequisites vary by course.",
    englishReq: "IELTS typically 6.5 overall; some degrees require higher.",
    tuition: "AUD 40,000–60,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 6, qsRank: 40,
    name: "The University of Queensland",
    city: "Brisbane",
    academicReq: "Recognized secondary qualification; selection rank/prerequisites vary by programme.",
    englishReq: "IELTS typically 6.5 overall; some programmes require higher.",
    tuition: "AUD 40,000–60,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 7, qsRank: 77,
    name: "The University of Western Australia",
    city: "Perth",
    academicReq: "Recognized secondary qualification; equivalent entry score varies by course.",
    englishReq: "IELTS typically 6.5 overall.",
    tuition: "AUD 35,000–55,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 8, qsRank: 79,
    name: "Adelaide University",
    city: "Adelaide",
    academicReq: "Recognized secondary qualification; course prerequisites and academic score vary.",
    englishReq: "IELTS typically 6.5 overall; some courses require higher.",
    tuition: "AUD 35,000–55,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 9, qsRank: 87,
    name: "University of Technology Sydney (UTS)",
    city: "Sydney",
    academicReq: "Recognized secondary qualification; equivalent academic score varies by course.",
    englishReq: "IELTS 6.5 is common; UTS programme requirements can differ.",
    tuition: "AUD 40,000–55,000",
    feeNotes: "Course dependent.",
  },
  {
    country: "Australia", flag: "🇦🇺",
    countryRank: 10, qsRank: 119,
    name: "RMIT University",
    city: "Melbourne",
    academicReq: "Recognized secondary qualification; Bachelor admission commonly lists GPA 2+, IB 25+, SAT 1060+, or equivalent depending on qualification.",
    englishReq: "IELTS 6.5+; TOEFL 79+ for general admission.",
    tuition: "AUD 35,000–55,000",
    feeNotes: "Course dependent.",
  },
];

const countries = [
  { key: "Canada", name: "Canada", flag: "🇨🇦", desc: "10 top-ranked universities. CAD 25,000–75,000 indicative tuition.", img: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop" },
  { key: "UK", name: "United Kingdom", flag: "🇬🇧", desc: "10 top-ranked universities. GBP 25,000–55,000 indicative tuition.", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&h=400&fit=crop" },
  { key: "USA", name: "United States", flag: "🇺🇸", desc: "10 top-ranked universities. USD 50,000–70,000 indicative tuition.", img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=600&h=400&fit=crop" },
  { key: "Australia", name: "Australia", flag: "🇦🇺", desc: "10 top-ranked universities. AUD 35,000–65,000 indicative tuition.", img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop" },
];

const stats = [
  { icon: "university", value: "250+", label: "Partner Universities" },
  { icon: "globe", value: "4", label: "Top Countries" },
  { icon: "user-friends", value: "500+", label: "Students Placed" },
  { icon: "star", value: "98%", label: "Success Rate" },
  { icon: "shield-check", value: "100%", label: "Confidential & Trusted" },
];

function Universities() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countryFilter, setCountryFilter] = useState("All");

  const filterTabs = ["All", "Canada", "USA", "UK", "Australia"];
  const filteredUniversities = countryFilter === "All" ? universities : universities.filter((u) => u.country === countryFilter);

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
            <li><a href="/universities" className="text-[#1a2744] relative after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1a2744]">Universities</a></li>
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
              <li><a href="/about" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">About</a></li>
              <li><a href="/framework" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Framework</a></li>
              <li><a href="/universities" className="block rounded-lg px-3 py-2 text-[#1a2744] transition-colors duration-200 hover:bg-gray-50">Universities</a></li>
              <li><a href="/contact" className="block rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-[#1a2744]">Contact</a></li>
              <li><a href="/qualification" className="mt-2 block w-full rounded-lg bg-[#f0b429] px-6 py-3 text-center text-sm font-semibold text-[#1a2744] transition hover:bg-[#d9a020]">Start Application Process</a></li>
            </ul>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-6 py-16 md:py-20">
        <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=800&fit=crop" alt="University campus" className="h-full w-full object-cover opacity-20" /></div>
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#f0b429]">Universities</div>
            <h1 className="mt-3 text-5xl font-black leading-tight text-[#1a2744] md:text-6xl">Your Future.<br />Top Universities.<br />Endless Opportunities.</h1>
            <p className="mt-6 max-w-lg text-gray-600 leading-relaxed">Explore world-class universities across Canada, UK, USA and Australia and take the first step towards your dream future.</p>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2744] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#141e36]"><i className="fas fa-calendar"></i> Book a Free Consultation <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute right-0 top-0 w-full max-w-md space-y-4">
              <div className="rounded-xl bg-white p-5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2744]"><i className="fas fa-graduation-cap text-xl text-[#f0b429]"></i></div>
                  <div><p className="text-sm font-semibold text-[#1a2744] leading-snug">Guiding O/A Level students to world-class universities worldwide.</p></div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a2744]"><i className="fas fa-globe text-xl text-[#f0b429]"></i></div>
                  <div><p className="text-sm font-semibold text-[#1a2744] leading-snug">Personalized guidance for the right choices and better future.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="university-list" className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Top 40 Universities — QS World Rankings 2026</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <p className="mx-auto mb-10 max-w-2xl text-gray-600">The top 10 QS-ranked universities in each of our four core destinations, with indicative tuition and admission requirements.</p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCountryFilter(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  countryFilter === tab ? "bg-[#1a2744] text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab === "All" ? "All Countries" : tab === "UK" ? "United Kingdom" : tab === "USA" ? "United States" : tab}
                <span className="ml-2 opacity-70">{tab === "All" ? universities.length : universities.filter((u) => u.country === tab).length}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((uni) => (
              <div key={uni.name} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#1a2744] px-3 py-1 text-xs font-bold text-white">World #{uni.qsRank}</span>
                  <span className="text-2xl">{uni.flag}</span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-[#1a2744]">{uni.name}</h3>
                <div className="mt-1 text-sm text-gray-500"><i className="fas fa-location-dot mr-1 text-[#f0b429]"></i>{uni.city}, {uni.country}</div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs text-gray-500">{uni.country} Rank</span>
                  <span className="text-sm font-bold text-[#1a2744]">#{uni.countryRank}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Indicative Tuition</span>
                  <span className="text-sm font-semibold text-[#1a2744]">{uni.tuition}</span>
                </div>
                <details className="group mt-4 border-t border-gray-100 pt-3">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold uppercase tracking-wide text-[#f0b429]">
                    Admission &amp; English Requirements
                    <i className="fas fa-chevron-down text-[10px] transition group-open:rotate-180"></i>
                  </summary>
                  <div className="mt-3 space-y-2 text-xs leading-relaxed text-gray-600">
                    <p><span className="font-semibold text-[#1a2744]">Academic:</span> {uni.academicReq}</p>
                    <p><span className="font-semibold text-[#1a2744]">English:</span> {uni.englishReq}</p>
                    <p><span className="font-semibold text-[#1a2744]">Fee Notes:</span> {uni.feeNotes}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-xs leading-relaxed text-gray-400">
            University list based on the QS World University Rankings 2026 country lists. Tuition figures are indicative annual international undergraduate planning ranges, not guaranteed quotes, and vary by degree, faculty, credit load and intake. Requirements are general planning baselines — admission is programme-specific and competitive. Living costs, insurance, deposits and visa fees are not included. Book a free consultation with our counsellors to verify the exact programme, intake and fee schedule for your shortlist.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-[#1a2744]">Explore by Country</h2>
          <div className="mx-auto my-4 h-1 w-12 rounded bg-[#f0b429]"></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <button
                key={c.name}
                onClick={() => {
                  setCountryFilter(c.key);
                  document.getElementById("university-list")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden rounded-xl text-left shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={c.img} alt={c.name} className="h-64 w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                  <div className="flex items-center gap-2"><span className="text-2xl">{c.flag}</span><h3 className="text-xl font-bold">{c.name}</h3></div>
                  <p className="mt-2 text-sm opacity-90 leading-snug">{c.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a2744] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <i className={`fas fa-${stat.icon} text-3xl text-[#f0b429]`}></i>
              <div><div className="text-2xl font-black">{stat.value}</div><div className="text-xs opacity-80">{stat.label}</div></div>
            </div>
          ))}
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
