export default function KontaktPage() {
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

        <h1 className="text-3xl font-bold mb-8">Kontakt</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            Du hast Fragen zu verlinken.ch oder möchtest mit uns in Kontakt treten?
            Wir freuen uns auf deine Nachricht.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">E-Mail</p>
              <a href="mailto:info@verlinken.ch" className="text-emerald-400 hover:underline text-lg">
                info@verlinken.ch
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Adresse</p>
              <p>
                Dennis Rast<br />
                [Strasse + Hausnummer]<br />
                3052 Zollikofen<br />
                Schweiz
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            Wir antworten in der Regel innerhalb von 1–2 Werktagen.
          </p>
        </div>
      </div>
    </main>
  );
}