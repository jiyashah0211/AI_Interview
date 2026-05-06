import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import {
  Mic,
  Send,
  Pause,
  Play,
  X,
  Clock,
  Volume2,
  Settings,
  AlertCircle,
  CheckCircle2,
  Copy,
  MessageSquare,
  Zap,
  TrendingUp,
  Phone,
  SkipForward,
  RotateCcw
} from "lucide-react";

const InterviewSession = () => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "interviewer",
      text: "Hello! Thanks for joining me today. Let's start with a classic question: Tell me about yourself and your background in software engineering.",
      timestamp: "2:30 PM"
    }
  ]);
  const [userResponse, setUserResponse] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [sessionEnded, setSessionEnded] = useState(false);

  const questions = [
    "Tell me about yourself and your background in software engineering.",
    "Can you describe a challenging project you've worked on?",
    "How do you approach debugging complex issues?",
    "What's your experience with system design?",
    "Tell me about a time you had to work with a difficult team member."
  ];

  const feedback = [
    {
      category: "Communication",
      score: 85,
      comment: "Good clarity and structure in your response"
    },
    {
      category: "Technical Depth",
      score: 78,
      comment: "Could add more technical details"
    },
    {
      category: "Confidence",
      score: 92,
      comment: "Excellent confidence and composure"
    }
  ];

  useEffect(() => {
    if (sessionStarted && !sessionEnded) {
      const timer = setInterval(() => {
        setTimeElapsed(t => t + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [sessionStarted, sessionEnded]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSendResponse = () => {
    if (!userResponse.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "candidate",
      text: userResponse,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages([...messages, newMessage]);
    setUserResponse("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great answer. Let me dig deeper into that. How would you optimize this for better performance?",
        "Interesting approach. Can you explain the trade-offs you considered?",
        "Good example. Now, how would you handle this at scale?",
        "I appreciate the detail. What would you do differently if the requirements changed?"
      ];

      const nextAiMessage = {
        id: messages.length + 2,
        sender: "interviewer",
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages(prev => [...prev, nextAiMessage]);
    }, 1500);
  };

  const endSession = () => {
    setSessionEnded(true);
  };

  if (!sessionStarted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Navbar />

          <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-8">
                <Zap size={14} />
                Live Interview Session
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
                Ready to Start Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Interview?
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                You're about to begin a realistic mock interview. The AI interviewer will ask technical and behavioral questions. Speak naturally and take your time.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-slate-400">~45 minutes</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold mb-2">Questions</h3>
                  <p className="text-slate-400">5-7 questions</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <TrendingUp className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Feedback</h3>
                  <p className="text-slate-400">Instant analysis</p>
                </div>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <button
                  onClick={() => setSessionStarted(true)}
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Play size={20} />
                  Start Interview
                </button>
                <button className="w-full px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-semibold text-white transition-all">
                  Settings & Help
                </button>
              </div>

              <p className="text-slate-500 text-sm mt-8">
                💡 Make sure your microphone is working and you're in a quiet space
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (sessionEnded) {
    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          <Navbar />

          <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
            {/* HEADER */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold mb-6">
                <CheckCircle2 size={14} />
                Session Complete
              </div>
              <h1 className="text-5xl font-black mb-4">Interview Complete!</h1>
              <p className="text-xl text-slate-300">
                Great job! Here's your detailed performance analysis.
              </p>
            </div>

            {/* OVERALL SCORE */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center mb-12">
              <p className="text-slate-400 mb-4">Overall Performance</p>
              <div className="text-7xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                85%
              </div>
              <p className="text-lg text-slate-300">
                Excellent! You're performing well across all areas.
              </p>
            </div>

            {/* FEEDBACK CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {feedback.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{item.category}</h3>
                    <div className="text-3xl font-black text-blue-400">{item.score}%</div>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <p className="text-slate-400 text-sm">{item.comment}</p>
                </div>
              ))}
            </div>

            {/* DETAILED FEEDBACK */}
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Detailed Feedback</h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Strong Points</p>
                    <p className="text-slate-300">Excellent structure in your STAR method answers. Keep maintaining that clarity.</p>
                  </div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start gap-3">
                  <AlertCircle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Areas to Improve</p>
                    <p className="text-slate-300">Try to be more concise with technical explanations. Aim for 2-3 minutes per answer.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2">
                <RotateCcw size={20} />
                Start New Session
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-semibold text-white transition-all flex items-center gap-2">
                <TrendingUp size={20} />
                View Full Report
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
            <Phone size={20} className="text-blue-400 animate-pulse" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Interview Session</p>
            <p className="font-semibold">Technical Round</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            <Clock size={16} className="text-blue-400" />
            <span className="font-mono font-bold">{formatTime(timeElapsed)}</span>
          </div>

          <button
            onClick={() => setShowSettings(!showSettings)}
            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all border border-white/10 hover:border-white/20"
          >
            <Settings size={18} />
          </button>

          <button
            onClick={endSession}
            className="w-10 h-10 rounded-lg bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition-all border border-red-500/30 hover:border-red-500/50"
          >
            <X size={18} className="text-red-400" />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDE - MESSAGES */}
        <div className="flex-1 flex flex-col border-r border-white/10">
          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "candidate" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md p-4 rounded-2xl ${
                    msg.sender === "candidate"
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none"
                      : "bg-slate-800/50 border border-white/10 text-slate-200 rounded-bl-none"
                  }`}
                >
                  <p className="leading-relaxed mb-2">{msg.text}</p>
                  <p className="text-xs opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div className="border-t border-white/10 p-6 space-y-4 bg-slate-900/30">
            <div className="flex gap-3">
              <textarea
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                placeholder="Type your response here or speak into your microphone..."
                className="flex-1 bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                rows="3"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`px-4 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  isRecording
                    ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                    : "bg-slate-800/50 text-slate-300 border border-white/10 hover:bg-slate-700/50"
                }`}
              >
                <Mic size={18} />
                {isRecording ? "Stop" : "Record"}
              </button>

              <button className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/10 rounded-lg font-semibold text-slate-300 hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2">
                <Volume2 size={18} />
                Listen
              </button>

              <button
                onClick={handleSendResponse}
                disabled={!userResponse.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={18} />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - INFO PANEL */}
        <div className="w-80 bg-slate-900/50 border-l border-white/10 p-6 overflow-y-auto space-y-6">
          <div>
            <p className="text-xs uppercase font-bold text-slate-400 mb-3">Current Question</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="font-semibold leading-relaxed text-sm">
                {questions[currentQuestion]}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase font-bold text-slate-400 mb-3">Progress</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Question {currentQuestion + 1}</span>
                <span className="text-slate-400">of {questions.length}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase font-bold text-slate-400 mb-3">Quick Tips</p>
            <div className="space-y-3 text-sm text-slate-300">
              <p>✓ Take a moment to think before responding</p>
              <p>✓ Speak clearly and maintain composure</p>
              <p>✓ Use specific examples from your experience</p>
              <p>✓ Ask clarifying questions if needed</p>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 hover:border-white/20 rounded-lg font-semibold text-white transition-all text-sm">
            <SkipForward size={16} className="inline mr-2" />
            Skip Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSession;
