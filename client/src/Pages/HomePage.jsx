import React from "react";
import Navbar from "../Components/Navbar";
import { Code2, MessageCircle, Layers, Sparkles, ArrowRight } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-hidden relative">

      {/* --- THE CANVAS (Background Elements) --- */}
      <div className="fixed inset-0 z-0">
        {/* The Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />

        {/* Randomized Blurred Circles (Orbs) */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* --- THE CONTENT --- */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mt-24 lg:mt-32 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={14} />
              <span className="tracking-wide uppercase">AI Interview Intelligence</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
              Ace Your Next <br />
              <span className="bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent">
                Interview
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Don't just practice. <span className="text-zinc-200">Simulate.</span> High-fidelity technical and behavioral sessions tailored to top-tier engineering roles.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                title: "Technical",
                icon: <Code2 className="text-blue-400" size={28} />,
                desc: "Master DS & Algos, System Design, and specific tech stacks.",
                color: "blue",
                btn: "Start Practice"
              },
              {
                title: "Behavioral",
                icon: <MessageCircle className="text-cyan-400" size={28} />,
                desc: "Sharpen soft skills and master the STAR response method.",
                color: "cyan",
                btn: "Start Practice"
              },
              {
                title: "Full Mock",
                icon: <Layers className="text-purple-400" size={28} />,
                desc: "The ultimate simulation. Combined technical and HR rounds.",
                color: "purple",
                btn: "Start Mock"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="group relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Internal Card Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${card.color}-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                  <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed mb-10 text-sm">
                    {card.desc}
                  </p>

                  <button className="flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-colors">
                    {card.btn}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;