export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        
        {/* Logo + Name */}
        <div className="flex items-center gap-3 mb-10">
          <img 
            src="/logos/logo-icon.svg" 
            alt="verlinken.ch" 
            className="w-10 h-10 rounded-xl"
          />
          <span className="text-xl font-bold tracking-tight text-white flex items-baseline">
            verlinken
            <span className="relative mx-[2px] w-[8px] h-[8px] rounded-full bg-red-600 flex items-center justify-center translate-y-[1px]">
              <span className="absolute w-[4.5px] h-[1.3px] bg-white rounded-sm"></span>
              <span className="absolute h-[4.5px] w-[1.3px] bg-white rounded-sm"></span>
            </span>
            <span className="text-red-600">ch</span>
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Über uns</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            verlinken.ch ist eine einfache und moderne Lösung für lokale Betriebe, um mehr Google Bewertungen zu erhalten und
            ihre digitale Präsenz zu stärken.
          </p>

          <p>
            Wir helfen Unternehmen dabei, alle wichtigen Links, Kontaktdaten und 
            Bewertungen an einem Ort zu bündeln – übersichtlich, mobil optimiert 
            und ohne unnötigen Aufwand.
          </p>

          <p>
            Die Plattform wurde mit dem Ziel entwickelt, lokalen Geschäften eine 
            professionelle und unkomplizierte Online-Visitenkarte zu bieten und 
            mit neuer Technologie mehr Google-Bewertungen von Kunden zu erhalten.
          </p>

          <p>
            Hast du Fragen oder Anregungen? Schreib uns gerne über die 
            <a href="/kontakt" className="text-emerald-400 hover:underline ml-1">Kontaktseite</a>.
          </p>
        </div>
      </div>
    </main>
  );
}