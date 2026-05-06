import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Award, 
  Activity,
  CheckCircle2,
  AlertCircle,
  Calendar,
  User,
  Zap,
  Target,
  BookOpen
} from "lucide-react";

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("week");

  const stats = [
    {
      title: "Total Sessions",
      value: "24",
      change: "+3 this week",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Avg. Performance",
      value: "82%",
      change: "+5% from last week",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Total Time Spent",
      value: "42h",
      change: "On track",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Interviews Mastered",
      value: "8",
      change: "Technical & Behavioral",
      icon: Award,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10"
    }
  ];

  const recentSessions = [
    {
      id: 1,
      type: "Technical",
      role: "Senior Frontend Developer",
      date: "Today, 2:30 PM",
      score: 85,
      status: "completed",
      duration: "45 min"
    },
    {
      id: 2,
      type: "Behavioral",
      role: "System Design",
      date: "Yesterday, 10:00 AM",
      score: 78,
      status: "completed",
      duration: "50 min"
    },
    {
      id: 3,
      type: "Mixed",
      role: "Full Stack Engineer",
      date: "2 days ago",
      score: 88,
      status: "completed",
      duration: "90 min"
    },
    {
      id: 4,
      type: "Technical",
      role: "ML Engineer",
      date: "3 days ago",
      score: 72,
      status: "in-progress",
      duration: "35 min"
    }
  ];

  const weeklyData = [
    { day: "Mon", sessions: 3, score: 76 },
    { day: "Tue", sessions: 4, score: 82 },
    { day: "Wed", sessions: 2, score: 79 },
    { day: "Thu", sessions: 5, score: 85 },
    { day: "Fri", sessions: 3, score: 88 },
    { day: "Sat", sessions: 4, score: 81 },
    { day: "Sun", sessions: 2, score: 84 }
  ];

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="group relative bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-2">{stat.title}</p>
            <h3 className="text-4xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-green-400/80 text-xs font-semibold mt-3">{stat.change}</p>
          </div>
          <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" style={{
              background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              backgroundClip: "text"
            }} />
          </div>
        </div>
        
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/4" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* HEADER */}
          <div className="mb-12 flex justify-between items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
                <Zap size={14} />
                Performance Dashboard
              </div>
              <h1 className="text-5xl font-black tracking-tight mb-2">
                Your Progress
              </h1>
              <p className="text-slate-400 text-lg">Track your interview preparation and performance metrics</p>
            </div>

            <div className="flex gap-3">
              {["week", "month", "all"].map(period => (
                <button
                  key={period}
                  onClick={() => setTimeFrame(period)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    timeFrame === period
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* STATS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

          {/* CHARTS & SESSIONS */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* WEEKLY CHART */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-8">
                <BarChart3 size={20} className="text-blue-400" />
                <h2 className="text-xl font-bold">Weekly Performance</h2>
              </div>

              <div className="space-y-6">
                {weeklyData.map((data, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">{data.day}</span>
                      <span className="text-white font-semibold">{data.score}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${data.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Target size={20} className="text-purple-400" />
                Quick Stats
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-sm font-semibold mb-1">Success Rate</p>
                  <p className="text-2xl font-bold">92%</p>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <p className="text-blue-400 text-sm font-semibold mb-1">Streak</p>
                  <p className="text-2xl font-bold">7 days</p>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                  <p className="text-purple-400 text-sm font-semibold mb-1">Next Goal</p>
                  <p className="text-sm text-slate-300 mt-2">Reach 90% avg score</p>
                </div>
              </div>
            </div>
          </div>

          {/* RECENT SESSIONS */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-8">
              <Calendar size={20} className="text-cyan-400" />
              <h2 className="text-xl font-bold">Recent Sessions</h2>
            </div>

            <div className="space-y-3">
              {recentSessions.map((session) => (
                <div
                  key={session.id}
                  className="group flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                      {session.status === "completed" ? (
                        <CheckCircle2 size={20} className="text-green-400" />
                      ) : (
                        <Activity size={20} className="text-yellow-400 animate-pulse" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold">{session.role}</h3>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                          {session.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{session.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-slate-400">{session.duration}</p>
                      <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {session.score}%
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                      <TrendingUp size={20} className="text-amber-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
