export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo + Name */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="HP Logo"
            className="w-12 h-12 drop-shadow-[0_0_10px_#00ffcc] hover:drop-shadow-[0_0_20px_#00ffcc] transition-all"
          />
          <span className="text-xl font-bold text-blue-400 hidden sm:block tracking-wide">
            Harshal Patil
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-gray-300 font-medium">
          <a
            href="/projects"
            className="hover:text-[#00ffcc] transition-all duration-200 hover:drop-shadow-[0_0_8px_#00ffcc]"
          >
            Projects
          </a>

          <a
            href="/achievements"
            className="hover:text-[#00ffcc] transition-all duration-200 hover:drop-shadow-[0_0_8px_#00ffcc]"
          >
            Achievements
          </a>

          <a
            href="/contact"
            className="hover:text-[#00ffcc] transition-all duration-200 hover:drop-shadow-[0_0_8px_#00ffcc]"
          >
            Contact
          </a>

          {/* NEW Resume Link */}
          <a
            href="/resume"
            className="px-4 py-2 rounded-lg bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] 
                       hover:bg-[#00ffcc]/20 hover:shadow-[0_0_15px_#00ffcc] transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
