import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  RotateCw,
  HelpCircle,
  Rocket
} from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners",
      icon: Sparkles,
      price: {
        monthly: 9,
        annually: 99
      },
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      features: [
        "5 mock interviews per month",
        "Basic feedback analysis",
        "Access to question bank",
        "Performance tracking",
        "Community support"
      ],
      notIncluded: [
        "AI personalized coaching",
        "Video interview prep",
        "Premium resources"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      description: "Most popular",
      icon: Zap,
      price: {
        monthly: 29,
        annually: 299
      },
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      features: [
        "Unlimited mock interviews",
        "Advanced AI feedback",
        "Personalized coaching",
        "Video interview prep",
        "Resume review",
        "Real-time performance metrics",
        "Priority support"
      ],
      notIncluded: [
        "1-on-1 expert mentoring",
        "Custom interview scenarios"
      ],
      cta: "Start Free Trial",
      highlight: true
    },
    {
      name: "Elite",
      description: "For serious candidates",
      icon: Crown,
      price: {
        monthly: 79,
        annually: 799
      },
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      features: [
        "Everything in Professional",
        "1-on-1 expert mentoring",
        "Custom interview scenarios",
        "Company-specific prep",
        "Unlimited reviews",
        "Direct expert access",
        "Career consulting",
        "Lifetime access to resources"
      ],
      notIncluded: [],
      cta: "Schedule Demo",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Can I switch plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
    },
    {
      q: "Is there a free trial?",
      a: "Professional and Elite plans come with a 7-day free trial. No credit card required to start."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      q: "Do you offer refunds?",
      a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your plan."
    },
    {
      q: "Can I get a discount for annual billing?",
      a: "Absolutely! Annual plans save you 15% compared to monthly billing."
    },
    {
      q: "Is my data secure?",
      a: "Yes, all data is encrypted with military-grade security and we comply with GDPR and CCPA."
    }
  ];

  const PlanCard = ({ plan }) => {
    const Icon = plan.icon;
    const isHighlight = plan.highlight;

    return (
      <div
        className={`group relative rounded-3xl transition-all duration-500 ${
          isHighlight
            ? "scale-105 border-2 shadow-2xl shadow-purple-500/30"
            : "border border-white/10 hover:border-white/20"
        } ${
          isHighlight
            ? "bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl"
            : "bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl"
        }`}
      >
        {isHighlight && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
              <Rocket size={14} />
              MOST POPULAR
            </span>
          </div>
        )}

        <div className="p-8 md:p-10 h-full flex flex-col">
          {/* HEADER */}
          <div className="mb-8">
            <div className={`w-14 h-14 ${plan.bgColor} rounded-2xl flex items-center justify-center mb-6 border ${plan.borderColor} group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={28} className="text-white" />
            </div>

            <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
            <p className="text-slate-400 text-sm">{plan.description}</p>
          </div>

          {/* PRICING */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black">
                ${billingCycle === "monthly" ? plan.price.monthly : Math.floor(plan.price.annually / 12)}
              </span>
              <span className="text-slate-400">/month</span>
            </div>
            {billingCycle === "annually" && (
              <p className="text-sm text-green-400 font-semibold mt-2">
                Save ${plan.price.monthly * 12 - plan.price.annually} annually
              </p>
            )}
          </div>

          {/* CTA */}
          <button
            className={`w-full py-4 rounded-xl font-bold mb-10 transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
              isHighlight
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white"
            }`}
          >
            {plan.cta}
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* FEATURES */}
          <div className="space-y-4 mb-8 flex-grow">
            <p className="text-sm font-semibold text-slate-300 uppercase tracking-wide">What's Included</p>
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* NOT INCLUDED */}
          {plan.notIncluded.length > 0 && (
            <div className="space-y-3 pt-8 border-t border-white/10">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Not Included</p>
              {plan.notIncluded.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-slate-600 mt-0.5">—</span>
                  <span className="text-slate-500 text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.08]" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-6">
              <Sparkles size={14} />
              Transparent Pricing
            </div>

            <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6">
              Simple, Transparent
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              Choose the plan that best fits your interview preparation journey. All plans include a 7-day free trial.
            </p>

            {/* BILLING TOGGLE */}
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-2 backdrop-blur-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  billingCycle === "annually"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Annually
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Save 15%</span>
              </button>
            </div>
          </div>

          {/* PRICING CARDS */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>

          {/* FEATURES COMPARISON */}
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-12 mb-20">
            <h2 className="text-4xl font-black text-center mb-12">Detailed Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-bold text-slate-300">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-white">Starter</th>
                    <th className="text-center py-4 px-6 font-bold text-white">Professional</th>
                    <th className="text-center py-4 px-6 font-bold text-white">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Mock Interviews", starter: "5/month", professional: "Unlimited", elite: "Unlimited" },
                    { feature: "AI Feedback", starter: "Basic", professional: "Advanced", elite: "Advanced+" },
                    { feature: "Performance Tracking", starter: "✓", professional: "✓", elite: "✓" },
                    { feature: "Video Prep", starter: "—", professional: "✓", elite: "✓" },
                    { feature: "Personalized Coaching", starter: "—", professional: "✓", elite: "✓" },
                    { feature: "Expert Mentoring", starter: "—", professional: "—", elite: "✓" },
                    { feature: "Company-Specific Prep", starter: "—", professional: "—", elite: "✓" },
                    { feature: "Priority Support", starter: "—", professional: "✓", elite: "✓" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-300">{row.feature}</td>
                      <td className="text-center py-4 px-6 text-slate-400">{row.starter}</td>
                      <td className="text-center py-4 px-6 text-slate-200">{row.professional}</td>
                      <td className="text-center py-4 px-6 text-slate-200">{row.elite}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-4xl font-black text-center mb-12">Frequently Asked Questions</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <HelpCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold">{faq.q}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed ml-10">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-black mb-4">Start Preparing Today</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Join thousands of engineers who've transformed their interview skills
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-bold text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 mx-auto group">
              Get Started - 7 Days Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pricing;
