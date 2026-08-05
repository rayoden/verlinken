export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Über uns</h1>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            verlinken.ch ist eine einfache und moderne Lösung für lokale Betriebe, 
            ihre digitale Präsenz zu stärken.
          </p>

          <p>
            Wir helfen Unternehmen dabei, alle wichtigen Links, Kontaktdaten und 
            Bewertungen an einem Ort zu bündeln – übersichtlich, mobil optimiert 
            und ohne unnötigen Aufwand.
          </p>

          <p>
  Hinter verlinken.ch steckt Dennis Rast aus Zollikofen. 
  Die Plattform wurde entwickelt, um lokalen Betrieben eine professionelle 
  und unkomplizierte Online-Visitenkarte zu bieten – und ihnen mit moderner 
  Technologie zu helfen, mehr Google-Bewertungen von ihren Kunden zu erhalten.
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