import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Send, Clock, Video } from "lucide-react";
import emailjs from "@emailjs/browser";
import PcbBackground from "../lib/PcbBackground.jsx";

export default function ScheduleMeet() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    date: "",
    time: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace with your EmailJS credentials (from .env)
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateRequestID = import.meta.env.VITE_EMAILJS_TEMPLATE_REQUEST;
      const templateConfirmID = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // First: Send request to you (admin)
      await emailjs.send(
        serviceID,
        templateRequestID,
        {
          name: form.name,
          email: form.email,
          topic: form.topic,
          date: form.date,
          time: form.time,
        },
        publicKey
      );

      // Then: Send confirmation to the sender
      await emailjs.send(
        serviceID,
        templateConfirmID,
        {
          name: form.name,
          email: form.email,
          topic: form.topic,
          date: form.date,
          time: form.time,
        },
        publicKey
      );

      setStatus("sent");
      setForm({ name: "", email: "", topic: "", date: "", time: "" });
    } catch (err) {
      console.error("Email send error:", err);
      setStatus("error");
    }
  };

  return (
<section
  className="relative min-h-[calc(100svh-(var(--nav-height)+2px))] flex flex-col items-center bg-transparent px-6 py-6 md:py-8"
>
      <PcbBackground />

      {/* ===== HEADER ===== */}
      <motion.div
        className="relative z-20 text-center max-w-3xl mb-6 md:mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-teal-300 mb-3">
          Schedule a Meet
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Let’s connect to talk about{" "}
          <span className="text-cyan-300">collaborations, research</span>, or{" "}
          <span className="text-blue-300">project discussions</span>. Fill in the details below and
          I’ll get back with a Google Meet link or calendar invite.
        </p>
      </motion.div>

      {/* ===== FORM CARD ===== */}
      <motion.form
        onSubmit={handleSubmit}
        className="relative z-20 w-full max-w-lg bg-[#001720]/70 border border-cyan-400/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="grid gap-5">
          {/* === NAME === */}
          <div>
            <label className="block text-teal-300 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-[#00151e] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          {/* === EMAIL === */}
          <div>
            <label className="block text-teal-300 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#00151e] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* === TOPIC === */}
          <div>
            <label className="block text-teal-300 text-sm mb-1">Meeting Topic</label>
            <input
              type="text"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              required
              className="w-full bg-[#00151e] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Project, Research, or Collaboration"
            />
          </div>

          {/* === DATE & TIME === */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-teal-300 text-sm mb-1">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full bg-[#00151e] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none scheme-dark"
              />
            </div>
            <div>
              <label className="block text-teal-300 text-sm mb-1">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full bg-[#00151e] border border-cyan-400/30 rounded-lg px-4 py-2 text-gray-200 focus:ring-2 focus:ring-teal-400 focus:outline-none scheme-dark"
              />
            </div>
          </div>

          {/* ===== STATUS ===== */}
          {status === "sent" && (
            <p className="text-teal-400 text-sm text-center mt-2">
              Request sent! You’ll receive a confirmation email shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}

          {/* ===== SUBMIT BUTTON ===== */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary w-full flex justify-center items-center gap-2 text-[1.05rem]"
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} />
                Request Meet
              </>
            )}
          </motion.button>
        </div>
      </motion.form>

      {/* ===== INFO BOX ===== */}
      <motion.div
        className="relative z-20 mt-8 md:mt-10 max-w-3xl bg-[#001720]/60 border border-cyan-400/10 rounded-xl p-6 text-center text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-3 space-x-4 text-cyan-300">
          <CalendarDays size={22} />
          <Clock size={22} />
          <Video size={22} />
        </div>
        <p className="text-[0.98rem] leading-relaxed">
          All meetings are virtual by default via Google Meet. Once your request is reviewed,
          you’ll receive a <span className="text-teal-300">calendar invite</span> with the meeting link.
          For urgent collaborations, please reach me directly at{" "}
          <a
            href="mailto:harshalmpatil2005@gmail.com"
            className="text-cyan-300 hover:underline"
          >
            harshalmpatil2005@gmail.com
          </a>.
        </p>
      </motion.div>
    </section>
  );
}
