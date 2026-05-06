import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  MessageCircle,
  Layers,
  Sparkles,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  Rocket
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Technical",
      icon: <Code2 className="text-blue-400" size={28} />,
      desc: "Master DS & Algos, System Design, and specific tech stacks.",
      path: "/technical",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Behavioral",
      icon: <MessageCircle className="text-cyan-400" size={28} />,
      desc: "Sharpen soft skills and master the STAR response method.",
      path: "/behavioral",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      title: "Full Mock",
      icon: <Layers className="text-purple-400" size={28} />,
      desc: "The ultimate simulation. Combined technical and HR rounds.",
      path: "/mixed",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
  ];

  const features = [
    {
      icon: <Zap size={24} className="text-yellow-400" />,
      title: "AI-Powered",
      desc: "Real-time adaptive interviewer"
    },
    {
      icon: <Users size={24} className="text-blue-400" />,
      title: "Expert Feedback",
      desc: "Detailed performance analysis"
    },
    {
      icon: <TrendingUp size={24} className="text-green-400" />,
      title: "Track Progress",
      desc: "Monitor your improvement"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      quote: "Increased my interview confidence by 40%",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "ML Engineer",
      company: "OpenAI",
      quote: "Best preparation tool I've used",
      rating: 5
    },
    {
      name: "Maya Patel",
      role: "Systems Architect",
      company: "Microsoft",
      quote: "Realistic simulations saved my career",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* ===== BACKGROUND (CLICK SAFE) ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />

        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] opacity-50" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6">

          {/* ===== HERO ===== */}
          <div className="text-center mt-24 lg:mt-32 mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6 backdrop-blur-sm animate-pulse">
              <Sparkles size={14} />
              <span className="tracking-wide uppercase">
                AI Interview Intelligence
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 animate-fade-in">
              Ace Your Next <br />
              <span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
                Interview
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
              Don't just practice.{" "}
              <span className="text-white font-semibold">Simulate.</span> High-fidelity
              technical and behavioral sessions tailored to top-tier
              engineering roles.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => navigate("/interview-session")}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Rocket size={20} />
                Start Interview
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2">
                <Star size={20} />
                Explore Resources
              </button>
            </div>
          </div>

          {/* ===== QUICK FEATURES ===== */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-slate-900/60 transition-all duration-500 text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* ===== INTERVIEW TYPE CARDS ===== */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Choose Your Interview Type</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>

                    <h2 className="text-2xl font-bold mb-3">
                      {card.title}
                    </h2>

                    <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed mb-8 text-sm">
                      {card.desc}
                    </p>

                    <button
                      onClick={() => navigate(card.path)}
                      className="flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-100 transition-colors group/btn"
                    >
                      Start
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== STATS ===== */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {[
              { number: "50K+", label: "Users Trained" },
              { number: "100K+", label: "Sessions Completed" },
              { number: "98%", label: "Success Rate" },
              { number: "4.9/5", label: "Average Rating" }
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 hover:bg-slate-900/60 transition-all duration-500"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-slate-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ===== TESTIMONIALS ===== */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12">What Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-slate-900/60 transition-all duration-500"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-slate-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== FINAL CTA ===== */}
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Interview Skills?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Start with a free trial today. No credit card required.
            </p>
            <button
              onClick={() => navigate("/interview-session")}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 mx-auto group inline-flex"
            >
              <Zap size={20} />
              Begin Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </main>
      </div>
    </div>
  );
};

export default HomePage;

