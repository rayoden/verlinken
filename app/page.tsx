export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👨‍🚀</span>
            <span className="font-bold text-lg tracking-tight">
              Verlinken<span className="text-blue-600">.ch</span>
            </span>
          </div>
          <a
            href="#start"
            className="text-sm font-medium px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Jetzt starten
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl md:text-8xl mb-8 animate-bounce">
            👨‍🚀
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Mehr Bewertungen.<br />
            Mehr Kunden.<br />
            <span className="text-blue-600">Mehr Erfolg.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Mit einem Scan direkt zu Google, WhatsApp, Website oder Instagram.
            Einfach. Professionell. Für Schweizer Unternehmen.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#dienstleistungen"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
            >
              Kostenlos testen
            </a>
            <a
              href="/top-job-bern"
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl border border-slate-200 hover:bg-slate-50 transition"
            >
              Demo ansehen
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-500">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span>Bereits von Schweizer Unternehmen genutzt</span>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section id="dienstleistungen" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-center text-slate-600 mb-14 max-w-xl mx-auto">
            Alles, was du brauchst, um mehr Bewertungen und direkten Kundenkontakt zu bekommen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-bold text-lg mb-2">Google Bewertungen</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direkte Links, damit Kunden dich einfach und schnell bewerten können.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="font-bold text-lg mb-2">Digitale Linkseiten</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Eine klare Seite mit allen wichtigen Links – wie ein persönlicher Linkbaum.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="font-bold text-lg mb-2">Mehr Sichtbarkeit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professioneller Auftritt, der Vertrauen schafft und dich besser auffindbar macht.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2">Direkter Kontakt</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WhatsApp, Anruf oder Instagram – deine Kunden erreichen dich mit einem Klick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            So funktioniert’s
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-5">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">QR-Code scannen</h3>
              <p className="text-slate-600 text-sm">
                Dein Kunde scannt den Code auf dem Tisch, der Visitenkarte oder im Laden.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-5">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Linkseite öffnen</h3>
              <p className="text-slate-600 text-sm">
                Eine klare, schöne Seite öffnet sich – ohne App und ohne Login.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold mx-auto mb-5">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Bewertung hinterlassen</h3>
              <p className="text-slate-600 text-sm">
                Mit einem Klick geht’s direkt zu Google, WhatsApp oder deiner Website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kundenlogos Platzhalter */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            Vertrauen von Schweizer Unternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            <div className="text-xl font-bold text-slate-400">Top Job Bern</div>
            <div className="text-xl font-bold text-slate-400">Dein Logo</div>
            <div className="text-xl font-bold text-slate-400">Dein Logo</div>
            <div className="text-xl font-bold text-slate-400">Dein Logo</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">👨‍🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für mehr Bewertungen?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Starte jetzt und lass deine Kunden dich einfacher finden und bewerten.
          </p>
          <a
            href="mailto:info@verlinken.ch"
            className="inline-block px-10 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition"
          >
            Jetzt starten
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span>👨‍🚀</span>
            <span>Verlinken.ch</span>
          </div>
          <p>© {new Date().getFullYear()} Verlinken.ch – Links, die verbinden.</p>
        </div>
      </footer>
    </main>
  );
}