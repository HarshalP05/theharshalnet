import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ResumeViewer from "./components/ResumeViewer"; // (we’ll make this next)
import Projects from "./components/Projects"; // optional placeholder
import Contact from "./components/Contact";   // optional placeholder
import Achievements from "./components/Achievements"; // optional placeholder

function App() {
  return (
    <Router>
      <div className="text-white font-sans min-h-screen bg-transparent pt-[calc(var(--nav-height)+4px)]">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<ResumeViewer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
