import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-opacity-10 bg-green-900/20 backdrop-blur-md border-b border-green-500/20">
      <h1 className="text-green-400 font-bold text-2xl">theharshal<span className="text-white">.net</span></h1>
      <div className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#projects" className="hover:text-green-400">Projects</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>
      </div>
    </nav>
  );
}
