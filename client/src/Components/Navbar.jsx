import React from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-slate-950/50 backdrop-blur-xl text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-300">
            <Cpu size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            Interview<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI</span>
          </h1>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white transition-colors duration-200">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* Right Section: Action & Profile */}
        <div className="flex items-center gap-5">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-colors duration-200">
            Support
          </button>

          <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>

          <div className="relative group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-inner group-hover:shadow-blue-500/10">
              <span className="text-xs font-bold bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YR
              </span>
            </div>
            {/* Online Indicator */}
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;