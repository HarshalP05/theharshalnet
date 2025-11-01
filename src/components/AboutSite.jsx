import React from "react";
import { motion } from "framer-motion";
import { Database, Server, Cpu, Globe, Cloud, Layers } from "lucide-react";
import PcbBackground from "../lib/PcbBackground";

export default function AboutSite() {
  const techStack = [
    {
      icon: <Cpu className="text-teal-300 w-8 h-8" />,
      title: "React + Vite",
      desc: "The entire site runs on React for its component-driven architecture and lightning-fast build speeds using Vite.",
    },
    {
      icon: <Cloud className="text-cyan-300 w-8 h-8" />,
      title: "Supabase Cloud",
      desc: "All images, 3D models, and even your resume PDF are stored and fetched securely via Supabase Storage buckets.",
    },
    {
      icon: <Database className="text-blue-300 w-8 h-8" />,
      title: "Database Backbone",
      desc: "Supabase’s PostgreSQL database can be extended to store dynamic content such as project data and contact form entries.",
    },
    {
      icon: <Server className="text-teal-400 w-8 h-8" />,
      title: "Full-Stack Ready",
      desc: "Backend endpoints can be served through lightweight Flask or Node.js APIs deployed on Render or Vercel.",
    },
    {
      icon: <Layers className="text-cyan-400 w-8 h-8" />,
      title: "TailwindCSS + Orbitron",
      desc: "Clean utility-first design with responsive gradients, glassmorphism surfaces, and the Orbitron typeface for a futuristic aesthetic.",
    },
    {
      icon: <Globe className="text-teal-300 w-8 h-8" />,
      title: "3D Model Rendering",
      desc: "React Three Fiber powers the 3D CPU model on the homepage, hosted on Supabase and rendered in real-time WebGL.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent py-20 px-6">
      <PcbBackground />

      {/* ===== Header ===== */}
      <motion.div
        className="relative z-20 max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-teal-300 mb-4">
          About This Site
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          This website isn’t just a portfolio — it’s a full-stack experiment in{" "}
          <span className="text-cyan-300 font-medium">
            modern web engineering
          </span>{" "}
          and{" "}
          <span className="text-blue-300 font-medium">cloud-backed design</span>
          . Every pixel and animation has been crafted to reflect the
          intersection of embedded systems, AI, and creative development.
        </p>
      </motion.div>

      {/* ===== Tech Stack Cards ===== */}
      <div className="relative z-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#001720]/80 border border-cyan-400/20 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300"
          >
            <div className="flex justify-center mb-3">{tech.icon}</div>
            <h3 className="text-teal-300 font-semibold mb-2">
              {tech.title}
            </h3>
            <p className="text-gray-300 text-[0.95rem] leading-relaxed">
              {tech.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== Deployment Info ===== */}
      <motion.div
        className="relative z-20 mt-20 max-w-4xl text-center bg-[#00151e]/70 border border-teal-400/20 rounded-2xl p-8 shadow-lg shadow-teal-500/10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-3">
          Deployment & Infrastructure
        </h2>
        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
          The site is built with <strong>Vite + React</strong> and styled using{" "}
          <strong>TailwindCSS</strong>. Assets such as profile images, badges,
          and 3D models are fetched from{" "}
          <span className="text-cyan-300 font-medium">Supabase Storage</span>.
          Deployment is handled via{" "}
          <span className="text-blue-300 font-medium">Vercel</span> for fast
          global edge delivery. Future expansions may include dynamic blog
          entries and visitor analytics backed by Supabase’s real-time database.
        </p>
      </motion.div>

      {/* ===== Footer Note ===== */}
      <motion.div
        className="relative z-20 mt-16 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          ⚙️ Built with passion by{" "}
          <span className="text-teal-300">Harshal Patil</span> — blending{" "}
          <span className="text-cyan-300">AI</span>,{" "}
          <span className="text-blue-300">IoT</span>, and{" "}
          <span className="text-teal-400">Engineering</span>.
        </p>
      </motion.div>
    </section>
  );
}
