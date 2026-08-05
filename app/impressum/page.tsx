export default function ImpressumPage() {
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
          <span className="text-xl font-bold tracking-tight">verlinken.ch</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p className="font-semibold text-white">Verantwortlich für den Inhalt dieser Website:</p>
          
          <p>
            Dennis Rast<br />
            [Deine Strasse + Hausnummer]<br />
            [PLZ] Zollikofen<br />
            Schweiz
          </p>

          <p>
            E-Mail: info@verlinken.ch<br />
            Telefon: [dein Telefon]
          </p>

          <p>Diese Website wird betrieben von Dennis Rast.</p>

          <h2 className="text-xl font-semibold text-white mt-8">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. 
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Urheberrecht</h2>
          <p>
            Alle Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht.
          </p>
        </div>
      </div>
    </main>
  );
}