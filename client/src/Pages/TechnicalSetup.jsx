import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Briefcase, BarChart3, Code2, Target, Clock, Zap, ArrowRight } from "lucide-react";

const TechnicalSetup = () => {
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    stack: "",
    focus: "",
    duration: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Background Decor (Same as Home) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto pt-32 pb-20 px-6">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">
            <Zap size={16} fill="currentColor" />
            <span>Configuration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Technical <span className="text-zinc-500">Setup</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Customize the AI agent to match your specific interview requirements.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Configuration Card */}
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 shadow-2xl">
            
            {/* Role & Experience Row */}
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
                  <Briefcase size={16} className="text-blue-400" /> Target Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all appearance-none text-zinc-300"
                >
                  <option value="">Select your role</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Full Stack Developer</option>
                  <option>DevOps Engineer</option>
                  <option>ML Engineer</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
                  <BarChart3 size={16} className="text-blue-400" /> Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all appearance-none text-zinc-300"
                >
                  <option value="">Level of expertise</option>
                  <option>Fresher</option>
                  <option>0-2 Years (Junior)</option>
                  <option>2-5 Years (Mid-level)</option>
                  <option>5+ Years (Senior)</option>
                </select>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
                <Code2 size={16} className="text-blue-400" /> Primary Tech Stack
              </label>
              <input
                type="text"
                name="stack"
                placeholder="e.g. React, Node.js, PostgreSQL"
                value={formData.stack}
                onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all placeholder:text-zinc-600"
              />
            </div>
          </div>

          {/* Secondary Details & CTA */}
          <div className="flex flex-col gap-8">
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 space-y-8 flex-grow">
              
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
                  <Target size={16} className="text-blue-400" /> Focus Area
                </label>
                <select
                  name="focus"
                  value={formData.focus}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all appearance-none text-zinc-300"
                >
                  <option value="">What should we focus on?</option>
                  <option>Data Structures & Algorithms</option>
                  <option>System Design & Architecture</option>
                  <option>Core CS Fundamentals</option>
                  <option>Project-based Discussion</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
                  <Clock size={16} className="text-blue-400" /> Interview Duration
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all appearance-none text-zinc-300"
                >
                  <option value="">Duration</option>
                  <option>15 Minutes (Express)</option>
                  <option>30 Minutes (Standard)</option>
                  <option>45 Minutes (Full Round)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="group w-full bg-white text-black py-6 rounded-[2rem] font-black text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl shadow-white/5"
            >
              Initialize Session <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechnicalSetup;