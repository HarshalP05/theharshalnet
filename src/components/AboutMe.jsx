import React from "react";
import { motion } from "framer-motion";
import { Cpu, Brain, Radio, Code, Cloud, Mic, Award } from "lucide-react";
import PcbBackground from "../lib/PcbBackground";

export default function AboutMe() {
  const timeline = [
    {
      icon: <Cpu className="text-teal-300 w-7 h-7" />,
      year: "2023",
      title: "Journey Begins — Embedded Foundations",
      desc: "Started my B.Tech in Electronics & Telecommunication Engineering at PCCOE, Pune. Began exploring microcontrollers and real-time systems, focusing on STM32 and ESP32 boards.",
    },
    {
      icon: <Mic className="text-cyan-300 w-7 h-7" />,
      year: "2024",
      title: "Audio Intelligence & Edge AI",
      desc: "Developed covert audio communication and steganography systems using STM32, INMP441 I2S microphones, and LoRa. Transitioned into AI-driven embedded audio analytics and on-device inference.",
    },
    {
      icon: <Brain className="text-blue-300 w-7 h-7" />,
      year: "2024–2025",
      title: "Research & AI Innovation",
      desc: "Published research titled 'Voice-to-Insights: A Hybrid Edge-AI Framework for Real-Time Audio Understanding' at AIMLSys 2025. Worked on embedded speech understanding, vibration modeling, and ML-based battery health prediction.",
    },
    {
      icon: <Radio className="text-teal-400 w-7 h-7" />,
      year: "2025",
      title: "IoT Systems & Low-Power Communication",
      desc: "Built real-time ESP32–Arduino LoRa transmitters, low-power covert channels, and cloud-based IoT dashboards integrating Plotly Dash and Flask APIs.",
    },
    {
      icon: <Code className="text-cyan-400 w-7 h-7" />,
      year: "2025",
      title: "Full-Stack Engineering",
      desc: "Created end-to-end systems connecting embedded data to cloud databases (PostgreSQL, Supabase), deploying dashboards and web UIs using React, Flask, and TailwindCSS.",
    },
    {
      icon: <Award className="text-yellow-400 w-7 h-7" />,
      year: "Present",
      title: "Achievements & Future Vision",
      desc: "Winner at Navdhara Project Competition, Nexus 2025 Hackathon (AirGlove: Edge-AI Wearable Safety System), and PICT InC Finalist. Currently pushing toward AI-integrated hardware ecosystems.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent py-20 px-6">
      <PcbBackground />

      {/* ===== HEADER ===== */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-teal-300 mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hey, I'm <span className="text-cyan-300 font-semibold">Harshal Patil</span> — 
          an Embedded Systems Engineer, Edge-AI Developer, and Full-Stack Builder.  
          I love building systems where <span className="text-blue-300">hardware meets intelligence</span> — 
          from sensor nodes and microcontrollers to AI-driven cloud interfaces.
        </p>
      </motion.div>

      {/* ===== TIMELINE ===== */}
      <div className="relative z-20 w-full max-w-5xl space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 bg-[#001720]/70 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300 ${
              i % 2 === 0 ? "md:ml-0" : "md:ml-auto"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7 }}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#00151e] border border-cyan-400/30 shadow-inner">
              {item.icon}
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-teal-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1 tracking-wide">
                {item.year}
              </p>
              <p className="text-gray-300 mt-2 leading-relaxed text-[0.98rem]">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== TECH + RESEARCH SUMMARY ===== */}
      <motion.div
        className="relative z-20 mt-20 max-w-5xl text-center bg-[#00151e]/70 border border-teal-400/20 rounded-2xl p-8 shadow-lg shadow-teal-500/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-3">
          Research & Technical Focus
        </h2>
        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
          My work explores <span className="text-cyan-300">audio intelligence</span>,
          <span className="text-teal-300"> embedded DSP</span>, and
          <span className="text-blue-300"> cloud-integrated ML systems</span>.
          I aim to engineer real-time, low-latency embedded systems capable of 
          intelligent decision-making on the edge — merging signal processing, AI, 
          and full-stack integration.
        </p>
      </motion.div>

      {/* ===== FUTURE GOAL ===== */}
      <motion.div
        className="relative z-20 mt-20 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">
          The Vision Ahead 🚀
        </h2>
        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
          Building the next generation of smart systems — where{" "}
          <span className="text-cyan-300">embedded hardware</span>,{" "}
          <span className="text-blue-300">AI models</span>, and{" "}
          <span className="text-teal-400">real-time intelligence</span> coexist seamlessly.  
          My mission is to bridge the gap between silicon and software — 
          crafting scalable, energy-efficient, and adaptive devices for the AI edge.
        </p>
      </motion.div>

      {/* ===== SIGNATURE ===== */}
      <motion.div
        className="relative z-20 mt-16 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          Designed & Engineered by{" "}
          <span className="text-teal-300 font-semibold">Harshal Patil</span> ·
          Edge-AI · Embedded Systems · Cloud Engineering
        </p>
      </motion.div>
    </section>
  );
}
