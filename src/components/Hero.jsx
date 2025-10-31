import React from "react";
import ModelCanvas from "./ModelCanvas";
import { Github, Linkedin, Mail } from "lucide-react";
import PcbBackground from "../lib/PcbBackground.jsx"; // ✅ Animated PCB background

export default function Hero() {
  return (
  <section className="relative min-h-[calc(100svh-(var(--nav-height)+2px))] flex items-center justify-center overflow-hidden bg-transparent pt-0">
      {/* ===== PCB Animated Background ===== */}
      <PcbBackground />

      {/* ===== Main Content ===== */}
  <div className="relative z-20 grid md:grid-cols-2 gap-5 md:gap-7 items-center px-5 md:px-7 pt-1 md:pt-1 pb-5 md:pb-7 max-w-6xl w-full">
        {/* === Left Content === */}
        <div className="space-y-6">
          {/* Profile Photo (circular) */}
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-2 ring-teal-400/40 shadow-[0_0_20px_rgba(0,255,200,0.12)] bg-[#041122] flex items-center justify-center">
  <img
    src="/profile.jpg"
    alt="Harshal Patil"
    className="w-full h-full object-cover object-[50%_20%] scale-[1.62] transition-transform duration-300"
    style={{ transformOrigin: "center" }}
    loading="eager"
  />
</div>


          </div>
          <h1 className="text-[2.1rem] md:text-[2.8rem] font-bold leading-tight tracking-tight" style={{color:"var(--text)"}}>
            Hello, I'm{" "}
            <span className="bg-clip-text text-transparent" style={{backgroundImage:"linear-gradient(90deg, #4fd1c5, #63b3ed)"}}>
              Harshal Patil
            </span>
          </h1>

          {/* Subtle tagline for clarity and vibe */}
          <p className="text-[0.98rem] md:text-[1.05rem] tracking-wide" style={{color:"var(--muted)"}}>
            Embedded Systems • Edge AI • Full‑Stack Engineering
          </p>

          <p className="text-[1.02rem] md:text-[1.08rem] leading-relaxed max-w-[46ch]" style={{color:"var(--muted)"}}>
            I build intelligent systems that blend{" "}
            <span className="text-teal-300">Embedded Hardware</span>,{" "}
            <span className="text-cyan-300">Edge AI</span>, and{" "}
            <span className="text-blue-300">Full-Stack Development</span>. My
            work spans from STM32 firmware and ESP32 IoT solutions to
            cloud-connected AI analytics.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="/projects"
              className="btn btn-primary btn-lg"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="btn btn-outline btn-lg"
            >
              Contact Me
            </a>
          </div>

          {/* === Social Links === */}
          <div className="flex space-x-5 mt-5">
            <a
              href="mailto:harshalmpatil2005@gmail.com"
              className="transition"
              style={{color:"var(--muted)"}}
              title="Email"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/HarshalP05"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{color:"var(--muted)"}}
              title="GitHub"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com/in/harshalp05"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{color:"var(--muted)"}}
              title="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
          </div>

          {/* === Tagline === */}
          <p className="mt-3 text-[0.92rem]" style={{color:"var(--muted)"}}>
            IEEE SPS Secretary | Edge-AI Research | IoT & Cloud Integrator
          </p>
        </div>

        {/* === Right 3D Model === */}
        <ModelCanvas />
      </div>
    </section>
  );
}
