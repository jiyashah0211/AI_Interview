import React from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react"; // Matching your icon set

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl text-white px-6 py-4">
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
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-zinc-400">
          <li className="hover:text-white transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-white transition-colors">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* Right Section: Action & Profile */}
        <div className="flex items-center gap-5">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-blue-400 transition-colors">
            Support
          </button>

          <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>

          <div className="relative group">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center cursor-pointer hover:border-blue-500/50 hover:bg-zinc-800 transition-all shadow-inner">
              <span className="text-xs font-bold bg-gradient-to-tr from-blue-400 to-purple-400 bg-clip-text text-transparent">
                YR
              </span>
            </div>
            {/* Online Indicator */}
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-950 rounded-full"></div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;