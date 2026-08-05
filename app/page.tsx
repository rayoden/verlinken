"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          color-scheme: dark;
        }
        html,
        body {
          background-color: #020617 !important;
          color-scheme: dark;
        }
      `}</style>

      <main className="min-h-dvh bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        {/* Background Glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
          <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden p-1">
                <img src="/logo.webp" alt="verlinken.ch" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                verlinken<span className="text-emerald-400">.ch</span>
              </span>
            </div>
            <a
              href="#start"
              className="text-sm font-medium px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-400 transition"
            >
              Jetzt starten
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16 px-5">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-2xl md:rounded-3xl bg-white flex items-center justify-center shadow-2xl shadow-black/40 overflow-hidden p-3">
              <img src="/logo.webp" alt="verlinken.ch" className="w-full h-full object-contain" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Mehr Bewertungen.
              <br />
              Mehr Kunden.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Mehr Erfolg.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
              Mit einem Scan direkt zu Google, WhatsApp, Website oder Instagram.
              <br className="hidden md:block" />
              Einfach. Professionell. Für Schweizer Unternehmen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href="#start"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-emerald-500/25"
              >
                Kostenlos starten
              </a>
              <a
                href="/top-job-bern"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/15 hover:bg-white/15 transition"
              >
                Demo ansehen
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 text-sm text-white/50">
              <span className="text-yellow-400 text-base">★★★★★</span>
              <span>Bereits von Schweizer Unternehmen genutzt</span>
            </div>
          </div>
        </section>

        {/* Dienstleistungen */}
        <section id="dienstleistungen" className="py-16 md:py-20 px-5">
          <div
            className={`max-w-6xl mx-auto transition-all duration-700 delay-150 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Unsere Dienstleistungen
            </h2>
            <p className="text-center text-white/55 mb-12 max-w-xl mx-auto">
              Alles, was du brauchst, um mehr Bewertungen und direkten Kundenkontakt zu bekommen.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                {
                  icon: "⭐",
                  title: "Google Bewertungen",
                  desc: "Direkte Links, damit Kunden dich einfach und schnell bewerten können.",
                  color: "from-yellow-500/20 to-amber-500/20 border-yellow-400/30",
                },
                {
                  icon: "🔗",
                  title: "Digitale Linkseiten",
                  desc: "Eine klare Seite mit allen wichtigen Links – wie ein persönlicher Linkbaum.",
                  color: "from-violet-500/20 to-indigo-500/20 border-violet-400/30",
                },
                {
                  icon: "📈",
                  title: "Mehr Sichtbarkeit",
                  desc: "Professioneller Auftritt, der Vertrauen schafft und dich besser auffindbar macht.",
                  color: "from-blue-500/20 to-cyan-500/20 border-blue-400/30",
                },
                {
                  icon: "💬",
                  title: "Direkter Kontakt",
                  desc: "WhatsApp, Anruf oder Instagram – deine Kunden erreichen dich mit einem Klick.",
                  color: "from-emerald-500/20 to-green-500/20 border-emerald-400/30",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border backdrop-blur-md p-6 bg-gradient-to-br ${item.color} hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* So funktioniert's */}
        <section className="py-16 md:py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">So funktioniert’s</h2>
            <p className="text-white/55 mb-12">In drei einfachen Schritten zum Erfolg</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "QR-Code scannen", desc: "Kunde scannt deinen QR-Code mit dem Handy" },
                { step: "2", title: "Linkseite öffnen", desc: "Deine digitale Visitenkarte erscheint sofort" },
                { step: "3", title: "Bewerten oder kontaktieren", desc: "Google-Bewertung, WhatsApp oder Anruf" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="start" className="py-16 md:py-24 px-5">
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bereit für mehr Bewertungen?
            </h2>
            <p className="text-white/60 mb-8">
              Starte jetzt und hole dir deine eigene digitale Linkseite.
            </p>
            <a
              href="mailto:info@verlinken.ch"
              className="inline-block px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition shadow-lg shadow-emerald-500/25"
            >
              Jetzt kostenlos starten
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-5 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <span>
                © {new Date().getFullYear()}{" "}
                <a href="https://verlinken.ch" className="font-semibold hover:text-white/70 transition">
                  verlinken.ch
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@verlinken.ch" className="hover:text-white/70 transition">
                Kontakt
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}