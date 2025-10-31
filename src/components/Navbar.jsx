import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        
        {/* Logo + Name */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="HP Logo"
            className="nav-logo"
          />
          <span className="text-xl font-bold hidden sm:block tracking-wide" style={{color:"var(--muted)"}}>
            Harshal Patil
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-6 font-medium" style={{color:"var(--muted)"}}>
          <a
            href="/projects"
            className="hover:text-cyan-300 transition-colors"
          >
            Projects
          </a>

          <a
            href="/achievements"
            className="hover:text-cyan-300 transition-colors"
          >
            Achievements
          </a>

          <a
            href="/contact"
            className="hover:text-cyan-300 transition-colors"
          >
            Contact
          </a>

          {/* NEW Resume Link */}
          <a href="/resume" className="btn btn-outline">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="sm:hidden">
      <button
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-gray-200 hover:bg-white/10 active:scale-95 transition"
        onClick={() => setOpen((v) => !v)}
      >
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5"
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          )}
        </svg>
      </button>

      {/* Slide-down menu */}
      <div
        id="mobile-nav"
        className={`absolute left-0 right-0 top-[64px] origin-top bg-black/80 backdrop-blur-md border-b border-white/10 ${
          open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 pointer-events-none"
        } transition-transform duration-200 ease-out`}
      >
        <div className="px-4 py-3 space-y-2" style={{color:"var(--muted)"}}>
          <a href="/projects" className="block px-3 py-2 rounded-md hover:bg-white/10">Projects</a>
          <a href="/achievements" className="block px-3 py-2 rounded-md hover:bg-white/10">Achievements</a>
          <a href="/contact" className="block px-3 py-2 rounded-md hover:bg-white/10">Contact</a>
          <a href="/resume" className="block px-3 py-2 rounded-md btn-outline" style={{display:"block", textAlign:"center"}}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
