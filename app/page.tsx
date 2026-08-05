"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-dvh bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden overscroll-none">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 px-5">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-8 flex items-center justify-center">
            <img src="/logos/logo-icon.svg" alt="verlinken.ch" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Mehr Bewertungen.
            <br />
            Mehr Kunden.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
              Mehr Erfolg.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
            Mit einem Scan direkt zu Google, WhatsApp, Website oder Instagram.
            <br className="block mt-3" />
            <span className="text-white/80">Einfach. Professionell. Für Schweizer Unternehmen.</span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3.5 justify-center">
            <a href="#start" className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-blue-600/25">
              Kostenlos starten
            </a>
            <a href="/top-job-bern" className="px-8 py-4 rounded-2xl font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]">
              Demo ansehen
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 text-sm text-white/50">
            <span className="text-yellow-400">★★★★★</span>
            <span>Bereits von Schweizer Unternehmen genutzt</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center text-sm text-white/40">
          
          {/* Erste Zeile */}
          <div className="flex items-center justify-center gap-2.5">
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/70">verlinken.ch</span>
            </span>
            <span className="w-px h-3 bg-white/20"></span>
            <span>
              Powered by <span className="font-semibold text-white/70">Deno</span>
            </span>
          </div>

          {/* Zweite Zeile */}
          <div className="mt-3 flex items-center justify-center gap-x-3 text-[13px]">
            <a href="/impressum" className="hover:text-white/70 transition">Impressum</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="/datenschutz" className="hover:text-white/70 transition">Datenschutz</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="/kontakt" className="hover:text-white/70 transition">Kontakt</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="/ueber-uns" className="hover:text-white/70 transition">Über uns</a>
          </div>
        </div>
      </footer>
    </main>
  );
}