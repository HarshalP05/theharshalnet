import React, { useEffect, useState } from "react";
import ModelCanvas from "./ModelCanvas";
import { Github, Linkedin, Mail, Trophy, Award, Star } from "lucide-react";
import PcbBackground from "../lib/PcbBackground.jsx";
import { supabase } from "../lib/supabaseClient"; 

// ===== CGPA Odometer Animation =====
function CgpaOdometer({ value, duration = 1500 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const animate = () => {
      start += increment;
      if (start < value) {
        setDisplayValue(start);
        requestAnimationFrame(animate);
      } else setDisplayValue(value);
    };
    animate();
  }, [value, duration]);

  return (
    <div className="text-5xl font-bold text-teal-400 tracking-wider">
      {displayValue.toFixed(2)}
    </div>
  );
}

// ===== MAIN HERO SECTION =====
export default function Hero() {
  

 const [imageUrls, setImageUrls] = useState({
  profile: "",
  ibm: "",
  oracle: "",
  oracleDS: "",
});

useEffect(() => {
  const loadImages = async () => {
    const { data: profile } = supabase.storage
      .from("files")
      .getPublicUrl("images/profile.jpg");
    const { data: ibm } = supabase.storage
      .from("files")
      .getPublicUrl("images/ibmdspbadge.png");
    const { data: oracle } = supabase.storage
      .from("files")
      .getPublicUrl("images/OCI25AICFA.png");
    const { data: oracleDS } = supabase.storage
      .from("files")
      .getPublicUrl("images/OCI25DSProfessional.png"); // upload later

    setImageUrls({
      profile: profile.publicUrl,
      ibm: ibm.publicUrl,
      oracle: oracle.publicUrl,
      oracleDS: oracleDS.publicUrl,
    });
  };
  loadImages();
}, []);


  return (
    <section className="relative min-h-[calc(100svh-(var(--nav-height)+2px))] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-0">
      {/* Global PCB background rendered within Hero as requested */}
      <PcbBackground />

      {/* HERO GRID */}
      <div className="relative z-20 grid md:grid-cols-2 gap-5 md:gap-7 items-center px-5 md:px-7 pt-1 md:pt-1 pb-5 md:pb-7 max-w-6xl w-full">
        {/* LEFT TEXT BLOCK */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-2 ring-teal-400/40 shadow-[0_0_25px_rgba(0,255,200,0.12)] bg-[#041122] flex items-center justify-center">
              <img
                src={imageUrls.profile}
                alt="Harshal Patil"
                className="w-full h-full object-cover object-[50%_20%] scale-[1.62] transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>

          {/* === Name & Tagline === */}
          <h1
            className="text-[2.1rem] md:text-[2.8rem] font-bold leading-tight tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Hello, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #4fd1c5, #63b3ed)",
              }}
            >
              Harshal Patil
            </span>
          </h1>

          <p
            className="text-[0.98rem] md:text-[1.05rem] tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            Embedded Systems • Edge AI • Full-Stack Engineering
          </p>

          <p
            className="text-[1.02rem] md:text-[1.08rem] leading-relaxed max-w-[46ch]"
            style={{ color: "var(--muted)" }}
          >
            I build intelligent systems that blend{" "}
            <span className="text-teal-300">Embedded Hardware</span>,{" "}
            <span className="text-cyan-300">Edge AI</span>, and{" "}
            <span className="text-blue-300">Full-Stack Development</span>. My
            work spans from STM32 firmware and ESP32 IoT solutions to
            cloud-connected AI analytics.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/projects" className="btn btn-primary btn-lg">
              View Projects
            </a>
            <a href="/contact" className="btn btn-outline btn-lg">
              Contact Me
            </a>
          </div>

          {/* === Social Links === */}
          <div className="flex space-x-5 mt-5">
            <a
              href="mailto:harshalmpatil2005@gmail.com"
              style={{ color: "var(--muted)" }}
              title="Email"
            >
              <Mail size={26} />
            </a>
            <a
              href="https://github.com/HarshalP05"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)" }}
              title="GitHub"
            >
              <Github size={26} />
            </a>
            <a
              href="https://linkedin.com/in/harshalp05"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--muted)" }}
              title="LinkedIn"
            >
              <Linkedin size={26} />
            </a>
          </div>

          <p className="mt-3 text-[0.92rem]" style={{ color: "var(--muted)" }}>
            IEEE SPS Secretary | Edge-AI Research | IoT & Cloud Integrator
          </p>
        </div>

        {/* === RIGHT MODEL === */}
        <div className="flex justify-center md:justify-end">
          <ModelCanvas />
        </div>
      </div>

      {/* ===== EDUCATION ===== */}
      <div className="relative z-20 mt-20 flex justify-center w-full px-6">
        <div className="bg-[#00151e] border border-teal-400/30 rounded-2xl p-6 text-center max-w-md shadow-lg shadow-teal-500/10">
          <h2 className="text-2xl font-semibold text-teal-300 mb-2">
            Education
          </h2>
          <p className="text-gray-300">
            B.Tech in Electronics and Telecommunication
          </p>
          <p className="text-gray-400">PCCOE, Pune (2023 – 2027)</p>
          <div className="mt-5 flex flex-col items-center">
  <span className="text-sm tracking-widest uppercase mb-1 bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-cyan-400 font-semibold">
  CGPA
</span>

  <CgpaOdometer value={8.93} />
  <div className="w-full bg-gray-800 h-3 rounded-full mt-3">
    <div
  className="bg-linear-to-r from-teal-400 to-cyan-400 h-3 rounded-full"
      style={{ width: "89.3%" }}
    />
  </div>
</div>

        </div>
      </div>

      {/* ===== ABOUT & RESEARCH ===== */}
      <div className="relative z-20 mt-20 px-6 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">
          About Me & Research
        </h2>
        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
          I’m passionate about creating systems where{" "}
          <span className="text-cyan-300">hardware meets intelligence</span>.
          My current work explores{" "}
          <span className="text-teal-300">audio signal processing</span> and{" "}
          <span className="text-blue-300">low-power AI inference</span> for
          real-time embedded platforms. Recently, I presented my research paper{" "}
          <span className="text-teal-400 font-medium">
            “Voice-to-Insights: A Hybrid Edge-AI Framework for Real-Time Audio
            Understanding”
          </span>{" "}
          at <strong>AIMLSys 2025</strong>.
        </p>
        <p className="text-gray-400 text-[0.98rem] mt-4">
          The next wave of intelligent systems will emerge from the fusion of
          embedded design, on-device ML, and system-level optimization and I
          aim to drive that frontier forward.
        </p>
      </div>

      {/* ===== SKILLS ===== */}
      <div className="relative z-20 mt-20 w-full px-6 max-w-6xl">
        <h2 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
          Technical Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Languages", skills: ["C", "C++", "Python", "JavaScript"] },
            {
              title: "Frameworks",
              skills: ["React", "Flask", "Node.js", "TailwindCSS"],
            },
            {
              title: "AI / Embedded",
              skills: ["TensorFlow", "STM32", "ESP32", "I2S/SAI Audio"],
            },
            {
              title: "Tools",
              skills: ["PostgreSQL", "Git", "Render", "Vercel"],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-[#001720] border border-cyan-400/20 rounded-xl p-5 text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition"
            >
              <h3 className="text-teal-300 font-semibold mb-3">{cat.title}</h3>
              <ul className="text-gray-300 space-y-1">
                {cat.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CERTIFICATIONS ===== */}
      {/* ===== CERTIFICATIONS ===== */}
<div className="relative z-20 mt-20 w-full px-6 max-w-6xl">
  <h2 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
    Certifications & Badges
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        img: imageUrls.ibm,
        title: "IBM Data Science Professional Certificate",
        source: "Coursera · 2025",
      },
      {
        img: imageUrls.oracle,
        title: "Oracle AI Foundations Associate",
        source: "Oracle · 2025",
      },
      {
        img: imageUrls.oracleDS, // 👈 add later when you upload OCI DS image
        title: "OCI Data Science Professional",
        source: "Oracle · Coming Soon",
      },
    ].map((b) => (
      <div
        key={b.title}
        className="relative bg-[#001720] border border-cyan-400/30 rounded-xl p-6 text-center shadow-md hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300 flex flex-col items-center justify-center"
      >
        <div className="flex items-center justify-center w-36 h-36 mx-auto mb-3 bg-[#00151e] rounded-xl overflow-hidden">
          <img
            src={b.img}
            alt={b.title}
            className="object-contain w-28 h-28"
            loading="lazy"
          />
        </div>
        <h4 className="text-teal-300 font-medium text-[1rem] leading-tight">
          {b.title}
        </h4>
        <p className="text-gray-400 text-sm mt-1">{b.source}</p>
      </div>
    ))}
  </div>
</div>


      {/* ===== ACHIEVEMENTS ===== */}
      <div className="relative z-20 mt-20 w-full px-6 max-w-5xl pb-20">
        <h2 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
          Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: (
                <Trophy className="mx-auto mb-2 text-yellow-400" size={28} />
              ),
              title: "Navdhara Project Competition",
              result: "1st Place",
              desc: "Recognized for innovative embedded design.",
            },
            {
              icon: (
                <Award className="mx-auto mb-2 text-yellow-300" size={28} />
              ),
              title: "Nexus 2025 Hackathon",
              result: "1st Rank",
              desc: "AirGlove: Edge-AI wearable safety solution.",
            },
            {
              icon: <Star className="mx-auto mb-2 text-yellow-200" size={28} />,
              title: "PICT InC 2025",
              result: "3rd Place",
              desc: "AirGlove prototype selected among finalists.",
            },
          ].map((ach) => (
            <div
              key={ach.title}
              className="p-5 bg-[#001720] border border-cyan-400/20 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition"
            >
              {ach.icon}
              <h3 className="text-teal-300 font-semibold">{ach.title}</h3>
              <p className="text-gray-300 mt-1">{ach.result}</p>
              <p className="text-gray-400 text-sm mt-2">{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
