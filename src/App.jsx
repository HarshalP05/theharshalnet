import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeViewer from "./components/ResumeViewer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer"; // ✅ Add footer

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
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
