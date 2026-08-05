export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Verantwortlicher</h2>
            <p>
              Dennis Rast<br />
              [Deine Strasse + Hausnummer]<br />
              3052 Zollikofen<br />
              Schweiz<br /><br />
              E-Mail: info@verlinken.ch
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch dieser Website werden automatisch folgende Informationen erfasst:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">
              Diese Daten dienen der technischen Sicherheit und der Optimierung der Website. 
              Eine Zusammenführung mit anderen Datenquellen findet nicht statt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Kontaktformular / E-Mail-Kontakt</h2>
            <p>
              Wenn du uns per Kontaktformular oder E-Mail kontaktierst, werden die von dir 
              mitgeteilten Daten (Name, E-Mail-Adresse, Nachricht) gespeichert, um deine 
              Anfrage zu bearbeiten. Diese Daten werden nicht ohne deine Einwilligung an 
              Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
            <p>
              Diese Website verwendet derzeit keine Cookies, die eine Identifizierung von 
              Personen ermöglichen. Falls in Zukunft Analyse-Tools (z. B. Google Analytics) 
              eingesetzt werden, wirst du darüber informiert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Deine Rechte</h2>
            <p>
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der 
              Verarbeitung deiner personenbezogenen Daten sowie ein Widerspruchsrecht. 
              Dazu kannst du dich jederzeit an info@verlinken.ch wenden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Änderungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}