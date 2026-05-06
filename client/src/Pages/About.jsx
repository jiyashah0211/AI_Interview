import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { 
  Sparkles, 
  Users, 
  Target, 
  Zap, 
  Award,
  TrendingUp,
  ArrowRight,
  Brain,
  Rocket,
  Shield,
  BookOpen,
  Code2
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Interviews",
      description: "Advanced AI that adapts to your skill level and provides intelligent feedback"
    },
    {
      icon: Rocket,
      title: "Real-Time Feedback",
      description: "Get instant insights on your performance with actionable recommendations"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and private. No information is shared with third parties"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics and performance trends"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Learn from thousands of users preparing for top-tier tech companies"
    },
    {
      icon: Award,
      title: "Expert Resources",
      description: "Access curated content from experienced tech interviewers and mentors"
    }
  ];

  const milestones = [
    { number: "50K+", label: "Users Trained", delay: 0 },
    { number: "100K+", label: "Sessions Completed", delay: 100 },
    { number: "98%", label: "Success Rate", delay: 200 },
    { number: "4.9/5", label: "User Rating", delay: 300 }
  ];

  const team = [
    {
      role: "AI Engineer",
      description: "Building intelligent interview simulations"
    },
    {
      role: "UX Designer",
      description: "Crafting intuitive user experiences"
    },
    {
      role: "Interview Coach",
      description: "Curating interview questions and feedback"
    },
    {
      role: "Data Scientist",
      description: "Powering performance analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* HERO */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-6 backdrop-blur-sm">
              <Sparkles size={14} />
              About InterviewAI
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
              Revolutionizing
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Interview Preparation
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              We're building the future of tech interview preparation with AI-powered simulations that feel like real conversations with experienced engineers.
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Target size={28} className="text-blue-400" />
              </div>
              <h2 className="text-3xl font-black mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To democratize access to world-class interview preparation. Every aspiring engineer deserves the opportunity to practice with realistic scenarios and get feedback from industry experts.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                <Rocket size={28} className="text-purple-400" />
              </div>
              <h2 className="text-3xl font-black mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To create a world where preparation meets opportunity. We're building intelligent systems that not only simulate interviews but actively help you grow as an engineer and communicator.
              </p>
            </div>
          </div>

          {/* MILESTONES */}
          <div className="mb-20">
            <h2 className="text-4xl font-black text-center mb-12">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`group bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${milestone.delay}ms` }}
                >
                  <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {milestone.number}
                  </div>
                  <p className="text-slate-400 font-semibold">{milestone.label}</p>
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* FEATURES */}
          <div className="mb-20">
            <h2 className="text-4xl font-black text-center mb-12">Why Choose InterviewAI</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="group bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-slate-900/80 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OUR STORY */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-black mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                InterviewAI was born from a simple observation: thousands of talented engineers struggle not because they lack technical skills, but because they haven't practiced mock interviews in a realistic setting. Traditional preparation methods are either too rigid or too disconnected from real conversations.
              </p>
              <p>
                Our founding team realized that what candidates really needed was an AI that could understand nuance, adapt to different communication styles, and provide personalized feedback—just like talking to an experienced mentor. We set out to build exactly that.
              </p>
              <p>
                Today, we're proud to help engineers worldwide prepare with confidence. Every feature we build, every question we add, and every piece of feedback we generate is designed with one goal in mind: to help you succeed in your next interview.
              </p>
            </div>
          </div>

          {/* TEAM VALUES */}
          <div className="mb-20">
            <h2 className="text-4xl font-black text-center mb-12">Powered By Experts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-8 bg-gradient-to-br from-slate-900/60 to-slate-950/60 border border-white/10 rounded-2xl hover:border-white/20 hover:bg-slate-900/80 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    <Users size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{member.role}</h3>
                    <p className="text-slate-400">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-black mb-6">Ready to Transform Your Interview Skills?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of engineers who've already improved their interview performance with InterviewAI.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 mx-auto group">
              Get Started Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
