export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
  src="/logo.png"
  alt="HP Logo"
  className="w-12 h-12 drop-shadow-[0_0_10px_#00ffcc] hover:drop-shadow-[0_0_20px_#00ffcc] transition-all"
/>

          <span className="text-xl font-bold text-blue-400 hidden sm:block">
            {/* Remove this line if you don’t want any text */}
            Harshal Patil
          </span>
        </a>

        {/* Navigation Buttons */}
        <div className="space-x-6">
          <a href="/projects" className="text-gray-300 hover:text-blue-400">
            Projects
          </a>
          <a href="/contact" className="text-gray-300 hover:text-blue-400">
            Contact
          </a>
          <a href="/achievements" className="text-gray-300 hover:text-blue-400">
            Achievements
          </a>
        </div>
      </div>
    </nav>
  );
}
