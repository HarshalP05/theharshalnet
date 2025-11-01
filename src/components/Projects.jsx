import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Tag } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import PcbBackground from "../lib/PcbBackground.jsx";

export default function Projects() {
  const [imageUrls, setImageUrls] = useState({
    gruh: "",
    virtuonavi: "",
    airglove: "",
    voice: "",
    lsbprng: "",
  });

  // ===== PROJECT DATA =====
  const projects = [
    {
      key: "voice",
      title: "Voice-to-Insights — Hybrid Edge-AI Audio Intelligence",
      repo: "#",
      timeframe: "Research (Accepted AIML Systems 2025)",
      imagePath: "images/projects/voice-to-insights.jpg",
      bullets: [
        "STM32-based real-time audio classification using NanoEdge AI.",
        "ESP32 handles Wi-Fi streaming; Flask server processes Whisper & M2M100.",
        "Achieved 85.1% transcription accuracy and 0.1487 WER in offline edge inference.",
      ],
      tech: ["STM32", "ESP32", "NanoEdge AI", "WhisperAI", "Flask"],
    },
    {
      key: "airglove",
      title: "AirGlove — Wireless Gesture Control",
      repo: "https://github.com/HarshalP05/AirGlove",
      timeframe: "Feb 2025 – Mar 2025",
      imagePath: "images/projects/airglove.jpg",
      bullets: [
        "ESP32-based glove integrating MPU6050 for motion tracking.",
        "Touch sensors used for additional gesture triggers.",
        "Wireless telemetry & calibration routines ensure robust performance.",
      ],
      tech: ["ESP32", "MPU6050", "Embedded C"],
    },
    {
      key: "virtuonavi",
      title: "VirtuoNavi — Campus Engagement Platform",
      repo: "https://github.com/HarshalP05/VirtuoNavi",
      timeframe: "Aug 2024 – Nov 2024",
      imagePath: "images/projects/virtounavi.jpg",
      bullets: [
        "Led React frontend and Firebase backend with Node.js cloud functions.",
        "Interactive SVG campus map, secure login, and role-based dashboards.",
        "Deployed on Vercel; responsible for complete tech lead and delivery.",
      ],
      tech: ["React", "Firebase", "Node.js", "Vercel", "SVG"],
    },
    {
      key: "gruh",
      title: "GruhRakshak — Smart Home Security System",
      repo: "https://github.com/HarshalP05/Gruhrakshak-Smart-Home-Security",
      timeframe: "Apr 2024 – Jun 2024",
      imagePath: "images/projects/gruh-rakshak.jpg",
      bullets: [
        "ESP32 + multiple sensors (smoke, gas, temperature) for local alerts.",
        "YOLO-based intruder detection on Raspberry Pi for real-time security.",
        "Flask backend + responsive web app for alerts & remote monitoring.",
      ],
      tech: ["ESP32", "Raspberry Pi", "YOLO", "Flask", "React"],
    },
    {
      key: "lsbprng",
      title: "PRNG-Driven LSB Audio Steganography over LoRa",
      repo: "#",
      timeframe: "Research Project — 2025",
      imagePath: "images/projects/lsb-prng.jpg",
      bullets: [
        "Developed secure covert communication using LSB audio steganography with PRNG randomization.",
        "Embedded hidden data in INMP441-recorded audio and transmitted via LoRa (ESP32).",
        "Achieved 90.21 dB PSNR and 0.00075 BER ensuring imperceptibility and reliability.",
        "Validated for IoT covert transmission, low-power communication, and remote monitoring.",
      ],
      tech: ["ESP32", "LoRa", "INMP441", "PRNG", "Audio DSP", "MATLAB"],
    },
  ];

  // ===== SUPABASE IMAGE FETCH (Hero.jsx style) =====
  useEffect(() => {
    const loadImages = async () => {
      const { data: gruh } = supabase.storage
        .from("files")
        .getPublicUrl("images/projects/gruh-rakshak.jpg");
      const { data: virtuo } = supabase.storage
        .from("files")
        .getPublicUrl("images/projects/virtounavi.jpg");
      const { data: glove } = supabase.storage
        .from("files")
        .getPublicUrl("images/projects/airglove.jpg");
      const { data: voice } = supabase.storage
        .from("files")
        .getPublicUrl("images/projects/voice-to-insights.jpg");
      const { data: lsb } = supabase.storage
        .from("files")
        .getPublicUrl("images/projects/lsb-prng.jpg");

      setImageUrls({
        gruh: gruh.publicUrl,
        virtuonavi: virtuo.publicUrl,
        airglove: glove.publicUrl,
        voice: voice.publicUrl,
        lsbprng: lsb.publicUrl,
      });
    };
    loadImages();
  }, []);

  const fallbackSvg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><rect width='100%' height='100%' fill='#031320'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#6ea8c6' font-family='Poppins, sans-serif' font-size='18'>Project Image</text></svg>`
    );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative min-h-[calc(100svh-(var(--nav-height)+2px))] flex flex-col items-center overflow-hidden bg-transparent px-6 md:px-8 py-8 md:py-10">
      <PcbBackground />

      {/* ===== HEADER ===== */}
      <motion.div
        className="relative z-20 max-w-3xl text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-teal-300 mb-4">
          Projects & Research
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          A showcase of hands-on systems combining{" "}
          <span className="text-cyan-300 font-medium">embedded intelligence</span>,{" "}
          <span className="text-blue-300 font-medium">AI-driven insights</span>, and{" "}
          <span className="text-teal-300 font-medium">secure IoT communication</span>.
        </p>
      </motion.div>

      {/* ===== PROJECT CARDS ===== */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-6xl mx-auto space-y-8 md:space-y-10">
        {projects.map((p) => (
          <motion.article
            key={p.key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 250, damping: 24 }}
            className="w-full grid grid-cols-1 md:grid-cols-12 items-center bg-[#001720]/80 border border-cyan-400/10 rounded-2xl p-6 md:p-7 lg:p-8 shadow-[0_8px_24px_rgba(0,255,255,0.05)] backdrop-blur-md transform-gpu"
          >
            {/* ===== IMAGE LEFT ===== */}
            <div className="md:col-span-5 flex justify-center items-center mb-5 md:mb-0">
              <div className="w-full max-w-sm md:max-w-full rounded-xl overflow-hidden bg-linear-to-br from-[#00151e] to-[#041523] border border-cyan-400/10 shadow-inner aspect-16/10">
                <img
                  src={imageUrls[p.key] || fallbackSvg}
                  alt={p.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackSvg;
                  }}
                />
              </div>
            </div>

            {/* ===== CONTENT RIGHT ===== */}
            <div className="md:col-span-7 md:pl-6">
              <h3 className="text-xl md:text-2xl font-semibold text-teal-300 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{p.timeframe}</p>

              <ul className="mt-4 space-y-2 text-gray-300">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Tag size={14} className="text-teal-300 mt-[3px]" />
                    <span className="text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-200 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ===== VIEW CODE BUTTON ONLY ===== */}
              <div className="mt-6 flex">
                {p.repo && p.repo !== "#" ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm inline-flex items-center gap-2"
                    style={{ borderColor: "rgba(140,200,230,0.06)" }}
                  >
                    <Github size={14} /> View Code
                  </a>
                ) : (
                  <button
                    className="btn btn-outline btn-sm inline-flex items-center gap-2 opacity-70 cursor-default"
                    title="Repository not available"
                  >
                    <ExternalLink size={14} /> Private Repo
                  </button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
