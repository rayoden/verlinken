"use client";

import { useState, useEffect } from "react";
import type { Customer } from "@/data/customers";

const colorMap = {
  emerald: {
    glow: "bg-emerald-500/20",
    accent: "from-emerald-400 to-teal-500",
    badge: "text-emerald-300",
  },
  blue: {
    glow: "bg-blue-500/20",
    accent: "from-blue-400 to-cyan-500",
    badge: "text-blue-300",
  },
  violet: {
    glow: "bg-violet-500/20",
    accent: "from-violet-400 to-purple-500",
    badge: "text-violet-300",
  },
  orange: {
    glow: "bg-orange-500/20",
    accent: "from-orange-400 to-amber-500",
    badge: "text-orange-300",
  },
  rose: {
    glow: "bg-rose-500/20",
    accent: "from-rose-400 to-pink-500",
    badge: "text-rose-300",
  },
  teal: {
    glow: "bg-teal-500/20",
    accent: "from-teal-400 to-cyan-500",
    badge: "text-teal-300",
  },
};

export default function CustomerPage({ customer }: { customer: Customer }) {
  const [loaded, setLoaded] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const theme = colorMap[customer.color || "emerald"];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const buttons = [
    {
      label: "Auf Google bewerten",
      sub: "Ihr Feedback hilft uns weiter!",
      href: customer.googleReview,
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      bg: "bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border-yellow-400/40",
      iconBg: "bg-[#E8F0FE]",
    },
    {
      label: "Digitale Visitenkarte",
      sub: "Name, Adresse, Telefon, E-Mail",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
          <circle cx="8" cy="15" r="1.5" fill="currentColor" />
          <path d="M12 13h6" />
          <path d="M12 16h4" />
        </svg>
      ),
      bg: "bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border-violet-400/40",
      iconBg: "bg-violet-500/30",
      onClick: () => setShowCard(true),
    },
    ...(customer.instagram
      ? [
          {
            label: "Instagram",
            sub: "Folge uns",
            href: customer.instagram,
            icon: (
              <svg viewBox="0 0 24 24" className="w-9 h-9">
                <defs>
                  <radialGradient id="ig" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig)" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
              </svg>
            ),
            bg: "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-400/40",
            iconBg: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600",
          },
        ]
      : []),
    {
      label: "Website",
      sub: customer.website.replace(/^https?:\/\/(www\.)?/, ""),
      href: customer.website,
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <circle cx="12" cy="10" r="3" />
          <path d="M9.5 10h5" />
        </svg>
      ),
      bg: "bg-gradient-to-r from-blue-500/25 to-cyan-500/25 border-blue-400/50",
      iconBg: "bg-blue-500/30",
    },
    {
      label: "WhatsApp",
      sub: "Direkt schreiben",
      href: customer.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      bg: "bg-gradient-to-r from-emerald-500/25 to-green-500/25 border-emerald-400/50",
      iconBg: "bg-emerald-500/20",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes gold-shimmer {
          0% { box-shadow: 0 0 6px rgba(251, 191, 36, 0.4), 0 0 12px rgba(245, 158, 11, 0.3), 0 0 18px rgba(217, 119, 6, 0.2); }
          50% { box-shadow: 0 0 10px rgba(251, 191, 36, 0.65), 0 0 22px rgba(245, 158, 11, 0.45), 0 0 32px rgba(217, 119, 6, 0.3); }
          100% { box-shadow: 0 0 6px rgba(251, 191, 36, 0.4), 0 0 12px rgba(245, 158, 11, 0.3), 0 0 18px rgba(217, 119, 6, 0.2); }
        }
        .gold-glow {
          animation: gold-shimmer 3.2s ease-in-out infinite;
        }
      `}</style>

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute -top-32 -right-32 w-96 h-96 ${theme.glow} rounded-full blur-3xl`} />
          <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Desktop = original, Mobile = kompakt */}
        <div className="relative z-10 max-w-md mx-auto px-5 pt-5 pb-6 md:pt-10 md:pb-8">
          
          {/* ===== HEADER ===== */}
          <div className={`text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
            {/* Logo: Mobile kleiner, Desktop original */}
            <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-5 rounded-2xl md:rounded-3xl bg-white flex items-center justify-center shadow-xl md:shadow-2xl shadow-black/40 overflow-hidden p-2 md:p-3">
              <img src="/logo.webp" alt={customer.name} className="w-full h-full object-contain" />
            </div>

            {/* Name: Mobile kleiner, Desktop original */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {customer.name}
            </h1>
            
            {/* Tagline */}
            <p className={`mt-0.5 md:mt-1.5 text-sm font-medium ${theme.badge}`}>
              {customer.tagline}
            </p>

            {/* Bewertung: Mobile kompakter, Desktop original */}
            {customer.rating && (
              <div className="inline-flex items-center gap-1.5 md:gap-2 mt-2.5 md:mt-4 px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                <span className="text-yellow-400 text-sm md:text-base">★★★★★</span>
                <span className="text-xs md:text-sm font-semibold">
                  {customer.rating} · {customer.reviews}+ Bewertungen
                </span>
              </div>
            )}
          </div>

          {/* ===== BUTTONS ===== */}
          {/* Mobile: etwas enger, Desktop: original */}
          <div className="mt-5 md:mt-8 space-y-2.5 md:space-y-3.5">
            {buttons.map((btn, i) => (
              <a
                key={btn.label}
                href={btn.onClick ? undefined : btn.href}
                target={btn.onClick ? undefined : "_blank"}
                rel="noopener noreferrer"
                onClick={btn.onClick}
                className={`group block transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${150 + i * 70}ms` }}
              >
                <div className={`rounded-2xl border backdrop-blur-md px-4 py-3.5 md:px-5 md:py-4 flex items-center gap-3.5 md:gap-4 ${btn.bg} hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg ${btn.label === "Auf Google bewerten" ? "gold-glow" : ""}`}>
                  
                  {/* Icon-Box: Mobile etwas kleiner, Desktop original */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 ${btn.iconBg}`}>
                    {btn.icon}
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-bold text-[17px] md:text-lg leading-tight">{btn.label}</p>
                    <p className="text-[13px] md:text-sm text-white/70 truncate">{btn.sub}</p>
                  </div>

                  <span className="text-lg md:text-xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition shrink-0">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* Footer: Mobile kompakter, Desktop original */}
          <div className={`mt-6 md:mt-10 flex items-center justify-center gap-2.5 md:gap-3 text-[11px] md:text-xs text-slate-500 transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
            <span>
              © {new Date().getFullYear()}{" "}
              <a href="https://verlinken.ch" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-slate-300 transition">
                verlinken.ch
              </a>
            </span>
            <span className="w-px h-2.5 md:h-3 bg-slate-600"></span>
            <span>Powered by <span className="font-semibold">Deno</span></span>
          </div>
        </div>

        {/* Modal bleibt unverändert */}
        {showCard && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowCard(false)} />
            <div className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Digitale Visitenkarte</h2>
                <button onClick={() => setShowCard(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">×</button>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Name</p>
                  <p className="font-semibold text-lg">{customer.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Adresse</p>
                  <p className="font-medium">{customer.address}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Telefon</p>
                  <a href={`tel:${customer.phone}`} className="font-medium text-emerald-400">{customer.phone}</a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">E-Mail</p>
                  <a href={`mailto:${customer.email}`} className="font-medium text-emerald-400">{customer.email}</a>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Website</p>
                  <a href={customer.website} target="_blank" className="font-medium text-emerald-400">
                    {customer.website.replace(/^https?:\/\/(www\.)?/, "")}
                  </a>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={`tel:${customer.phone}`} className="flex-1 py-3 rounded-xl bg-white/10 text-center font-medium hover:bg-white/15 transition">Anrufen</a>
                <a href={customer.whatsapp} target="_blank" className="flex-1 py-3 rounded-xl bg-emerald-600 text-center font-medium hover:bg-emerald-500 transition">WhatsApp</a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}