import ModelCanvas from "./ModelCanvas";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#000c0e] via-[#001a24] to-[#001e33] flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10 items-center p-10 max-w-7xl w-full">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_15px_rgba(0,255,200,0.25)]">
            Hello, I'm{" "}
            <span className="text-teal-400 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400">
              Harshal Patil
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I build intelligent systems that blend <span className="text-teal-300">Embedded Hardware</span>,{" "}
            <span className="text-cyan-300">Edge AI</span>, and{" "}
            <span className="text-blue-300">Full-Stack Development</span>.  
            My work spans from STM32 firmware and ESP32 IoT solutions to cloud-connected AI analytics.
          </p>

          <div className="flex space-x-4 mt-8">
            <a
              href="/projects"
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-teal-400/30 transition"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="border border-teal-400 hover:bg-teal-400 hover:text-black px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a
              href="mailto:harshalmpatil2005@gmail.com"
              className="text-gray-400 hover:text-teal-400 transition"
              title="Email"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/HarshalP05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
              title="GitHub"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com/in/harshalp05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition"
              title="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
          </div>

          {/* Tagline */}
          <div className="mt-4 text-sm text-gray-400">
            <p>IEEE SPS Secretary | Edge-AI Research | IoT & Cloud Integrator</p>
          </div>
        </div>

        {/* Right 3D Model */}
        <ModelCanvas />
      </div>
    </section>
  );
}
