import React from "react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
      <div className="border-2 border-green-400 rounded-full w-40 h-40 mb-6 flex items-center justify-center">
        <span className="text-5xl text-green-300 font-extrabold">HP</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-green-400">Harshal Patil</h1>
      <p className="mt-2 text-gray-300 text-lg">
        Embedded Systems | AI | Full Stack Developer
      </p>

      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-green-500/20 border border-green-400 text-green-300 px-5 py-2 rounded-lg hover:bg-green-500/40 transition">My Projects</a>
        <a href="#contact" className="bg-transparent border border-green-300 text-white px-5 py-2 rounded-lg hover:bg-green-300/20 transition">Contact Me</a>
      </div>

      <div className="absolute bottom-8 text-xs text-green-400/60">
        Future 3D Scene Placeholder (PCB Animation Area)
      </div>
    </section>
  );
}
