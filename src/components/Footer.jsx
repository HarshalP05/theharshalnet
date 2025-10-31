import React from "react";
import { Github, Linkedin, Mail, Sparkles, Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-30 w-full py-8 mt-20 border-t border-cyan-400/10 bg-gradient-to-t from-[#000c0e] via-[#00151e] to-transparent">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        
        {/* === Left Side - Name + Tagline === */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-teal-300 tracking-wide">
            Harshal Patil
          </h3>
          <p className="text-sm text-gray-400">
            Embedded Systems • Edge AI • Full-Stack Developer
          </p>
        </div>

        {/* === Center - Socials === */}
        <div className="flex items-center gap-6">
          {[
            {
              href: "mailto:harshalmpatil2005@gmail.com",
              icon: <Mail size={22} />,
              title: "Email",
            },
            {
              href: "https://github.com/HarshalP05",
              icon: <Github size={22} />,
              title: "GitHub",
            },
            {
              href: "https://linkedin.com/in/harshalp05",
              icon: <Linkedin size={22} />,
              title: "LinkedIn",
            },
          ].map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-300 transition transform hover:scale-110 hover:-translate-y-1"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* === Right Side - Credits === */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="flex items-center gap-1 text-gray-400 text-sm">
            <span>Built with</span>
            <Heart
              size={14}
              className="text-pink-400 animate-pulse inline-block"
            />
            <span>and</span>
            <Code2
              size={14}
              className="text-cyan-300 animate-pulse inline-block"
            />
            <span>by</span>
            <span className="text-teal-300 font-medium">Harshal</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © {new Date().getFullYear()} — React ⚡ Vite 🧠
          </p>
        </div>
      </div>

      {/* === Glow Line === */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 blur-[2px] opacity-80 animate-pulse" />
      
      {/* === Floating Sparkle === */}
      <Sparkles
        size={18}
        className="absolute top-2 right-4 text-cyan-300 animate-pulse drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]"
      />
    </footer>
  );
}
