import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeViewer from "./components/ResumeViewer";
import AboutMe from "./components/AboutMe";         // 🆕 New route
import AboutSite from "./components/AboutSite";     // 🆕 New route
import ScheduleMeet from "./components/ScheduleMeet"; // 🆕 New route
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* ===== PAGE LAYOUT ===== */}
      <div className="flex flex-col min-h-screen text-white font-sans bg-transparent">
        
        {/* ===== NAVBAR (Fixed) ===== */}
        <Navbar />

        {/* ===== MAIN CONTENT ===== */}
        <main className="grow pt-[calc(var(--nav-height)+2px)]">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/about-site" element={<AboutSite />} />
            <Route path="/schedule-meet" element={<ScheduleMeet />} />
            <Route path="/resume" element={<ResumeViewer />} />
          </Routes>
        </main>

        {/* ===== FOOTER (Always bottom) ===== */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
