"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Hintergrund scrollen sperren, solange die Demo geöffnet ist
  useEffect(() => {
    if (demoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [demoOpen]);

  // ESC zum Schliessen
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDemoOpen(false);
      }
    };

    if (demoOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [demoOpen]);

  return (
    <main
      className="
        min-h-screen
        bg-[#08072f]
        text-white
        overflow-x-hidden
        overflow-y-auto
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            -top-48
            -right-48
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/[0.12]
            blur-[80px]
          "
        />

        <div
          className="
            absolute
            -bottom-48
            -left-48
            w-[450px]
            h-[450px]
            rounded-full
            bg-red-600/[0.06]
            blur-[80px]
          "
        />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative
          min-h-[calc(100vh-80px)]
          flex
          items-center
          pt-20
          md:pt-24
          pb-12
          px-5
        "
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div
            className="
              grid
              lg:grid-cols-[0.9fr_1.1fr]
              items-center
              gap-2
              lg:gap-0
            "
          >
            {/* =====================================================
                LINKER BEREICH
            ===================================================== */}
            <div
              className={`
                relative
                z-30
                text-center
                lg:text-left
                transition-opacity
                duration-500
                ${loaded ? "opacity-100" : "opacity-0"}
              `}
            >
              {/* Logo */}
              <div
                className="
                  w-20
                  h-20
                  md:w-24
                  md:h-24
                  mb-7
                  mx-auto
                  lg:mx-0
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="/logos/logo-icon.svg"
                  alt="verlinken.ch"
                  width="112"
                  height="112"
                  loading="eager"
                  className="
                    w-full
                    h-full
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>

              {/* Headline */}
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  xl:text-[64px]
                  font-extrabold
                  tracking-tight
                  leading-[1.05]
                "
              >
                Mehr Bewertungen.
                <br />

                Mehr Kunden.
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-400
                    to-red-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Mehr Erfolg.
                </span>
              </h1>

              {/* Beschreibung */}
              <p
                className="
                  mt-6
                  text-lg
                  md:text-xl
                  text-white/65
                  max-w-xl
                  mx-auto
                  lg:mx-0
                  leading-relaxed
                "
              >
                Mit einem Scan direkt zu Google, WhatsApp,
                Website oder Instagram.

                <br className="hidden md:block" />

                <span className="text-white/85">
                  Einfach. Professionell. Für Schweizer Unternehmen.
                </span>
              </p>

              {/* Buttons */}
              <div
                className="
                  mt-9
                  flex
                  flex-col
                  sm:flex-row
                  gap-3.5
                  justify-center
                  lg:justify-start
                "
              >
                <a
                  href="#start"
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-500
                    hover:from-blue-500
                    hover:to-indigo-400
                    transition-colors
                    duration-200
                    shadow-xl
                    shadow-blue-600/20
                  "
                >
                  Kostenlos starten
                </a>

                {/* DEMO BUTTON */}
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    text-white
                    bg-white/5
                    border
                    border-white/15
                    hover:bg-white/10
                    transition-all
                    duration-200
                    hover:scale-[1.02]
                    cursor-pointer
                  "
                >
                  Demo ansehen
                </button>
              </div>

              {/* Bewertungen */}
              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                "
              >
                <span className="text-yellow-400 tracking-wide">
                  ★★★★★
                </span>

                <span>
                  Bereits von Schweizer Unternehmen genutzt
                </span>
              </div>
            </div>

            {/* =====================================================
                RECHTER BEREICH
            ===================================================== */}
            <div
              className="
                relative
                flex
                items-center
                justify-center
                lg:-ml-4
              "
            >
              <div
                className="
                  absolute
                  left-[55%]
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[420px]
                  h-[420px]
                  rounded-full
                  bg-blue-600/[0.08]
                  blur-[70px]
                  pointer-events-none
                "
              />

              <div
                className="
                  relative
                  w-full
                  max-w-[650px]
                "
              >
                <img
                  src="/astronaut-scan.png"
                  alt="verlinken.ch QR-Code Bewertung"
                  width="1375"
                  height="1100"
                  draggable="false"
                  decoding="async"
                  fetchPriority="high"
                  className="
                    relative
                    z-10
                    block
                    w-full
                    h-auto
                  "
                />

                {/* Linker Fade */}
                <div
                  className="
                    absolute
                    z-20
                    pointer-events-none
                    left-0
                    top-0
                    bottom-0
                    w-[7%]
                    bg-gradient-to-r
                    from-[#08072f]
                    to-transparent
                  "
                />

                {/* Rechter Fade */}
                <div
                  className="
                    absolute
                    z-20
                    pointer-events-none
                    right-0
                    top-0
                    bottom-0
                    w-[5%]
                    bg-gradient-to-l
                    from-[#08072f]
                    to-transparent
                  "
                />

                {/* Oberer Fade */}
                <div
                  className="
                    absolute
                    z-20
                    pointer-events-none
                    left-0
                    right-0
                    top-0
                    h-[5%]
                    bg-gradient-to-b
                    from-[#08072f]
                    to-transparent
                  "
                />

                {/* Unterer Fade */}
                <div
                  className="
                    absolute
                    z-20
                    pointer-events-none
                    left-0
                    right-0
                    bottom-0
                    h-[7%]
                    bg-gradient-to-t
                    from-[#08072f]
                    to-transparent
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Übergang */}
        <div
          className="
            absolute
            pointer-events-none
            bottom-0
            left-0
            right-0
            h-16
            bg-gradient-to-t
            from-[#08072f]
            to-transparent
          "
        />
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        id="start"
        className="
          relative
          px-5
          py-20
          bg-[#08072f]
        "
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              md:p-12
              text-center
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-blue-400
                font-semibold
              "
            >
              Bereit für mehr Bewertungen?
            </p>

            <h2
              className="
                mt-3
                text-3xl
                md:text-4xl
                font-bold
              "
            >
              Mach aus jedem Scan einen Kundenkontakt.
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                mx-auto
                text-white/55
                leading-relaxed
              "
            >
              Deine Kunden scannen den QR-Code und landen direkt dort,
              wo du sie haben möchtest.
            </p>

            <div className="mt-7">
              <a
                href="/kontakt"
                className="
                  inline-flex
                  px-7
                  py-3.5
                  rounded-2xl
                  font-semibold
                  bg-white
                  text-slate-950
                  hover:bg-white/90
                  transition-colors
                  duration-200
                "
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer
        className="
          py-8
          px-5
          border-t
          border-white/5
          bg-[#08072f]
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            text-center
            text-sm
            text-white/40
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-2.5
              flex-wrap
            "
          >
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/70">
                verlinken.ch
              </span>
            </span>

            <span className="w-px h-3 bg-white/20" />

            <span>
              Powered by{" "}
              <span className="font-semibold text-white/70">
                Deno
              </span>
            </span>
          </div>

          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-x-3
              gap-y-2
              text-[13px]
              flex-wrap
            "
          >
            <a
              href="/impressum"
              className="hover:text-white/70 transition-colors"
            >
              Impressum
            </a>

            <span className="w-px h-3 bg-white/20" />

            <a
              href="/datenschutz"
              className="hover:text-white/70 transition-colors"
            >
              Datenschutz
            </a>

            <span className="w-px h-3 bg-white/20" />

            <a
              href="/kontakt"
              className="hover:text-white/70 transition-colors"
            >
              Kontakt
            </a>

            <span className="w-px h-3 bg-white/20" />

            <a
              href="/ueber-uns"
              className="hover:text-white/70 transition-colors"
            >
              Über uns
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================
          DEMO POPUP
      ========================================================= */}
      {demoOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/80
            overflow-hidden
            flex
            items-center
            justify-center
            p-3
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDemoOpen(false);
            }
          }}
        >
          {/* =====================================================
              SMARTPHONE
              Höhe so gewählt, dass der Inhalt mittiger wirkt
              und gleichzeitig genug Platz für Popups (Visitenkarte etc.) bleibt
          ===================================================== */}
          <div
            className="
              relative
              w-full
              max-w-[390px]
              h-[min(82dvh,780px)]
              rounded-[44px]
              bg-black
              p-[10px]
              border
              border-white/20
              shadow-[0_30px_100px_rgba(0,0,0,0.8)]
            "
            onMouseDown={(event) => {
              event.stopPropagation();
            }}
          >
            {/* =================================================
                DISPLAY
            ================================================= */}
            <div
              className="
                relative
                w-full
                h-full
                overflow-hidden
                rounded-[36px]
                bg-[#08072f]
              "
            >
              {/* =================================================
                  IFRAME
              ================================================= */}
              <iframe
                src="/top-job-bern"
                title="Top Job Bern Mobile Demo"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  border-0
                  m-0
                  p-0
                  bg-[#08072f]
                "
              />

              {/* =================================================
                  DYNAMIC ISLAND / KAMERA (halb so gross)
              ================================================= */}
              <div
                className="
                  absolute
                  z-[100]
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-[60px]
                  h-[15px]
                  bg-black
                  rounded-b-[9px]
                  pointer-events-none
                "
              />

              {/* =================================================
                  DISPLAY RAND
              ================================================= */}
              <div
                className="
                  absolute
                  inset-0
                  z-[110]
                  rounded-[36px]
                  border
                  border-white/[0.035]
                  pointer-events-none
                "
              />
            </div>

            {/* =================================================
                SCHLIESSEN
            ================================================= */}
            <button
              type="button"
              onClick={() => setDemoOpen(false)}
              aria-label="Demo schliessen"
              className="
                absolute
                -top-3
                -right-3
                z-[200]
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-white
                text-black
                shadow-xl
                hover:scale-105
                transition-transform
                duration-200
                cursor-pointer
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}