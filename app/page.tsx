"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
          HINTERGRUND
      ========================================================= */}
      <div
        className="
          fixed
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >
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
                ${
                  loaded
                    ? "opacity-100"
                    : "opacity-0"
                }
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
                  className="
                    w-full
                    h-full
                    object-contain
                    drop-shadow-2xl
                  "
                />
              </div>


              {/* =================================================
                  HEADLINE
              ================================================= */}
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


              {/* =================================================
                  BESCHREIBUNG
              ================================================= */}
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


              {/* =================================================
                  BUTTONS
              ================================================= */}
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


                <a
                  href="/top-job-bern"
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
                    transition-colors
                    duration-200
                  "
                >
                  Demo ansehen
                </a>

              </div>


              {/* =================================================
                  BEWERTUNGEN
              ================================================= */}
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

              {/* Dezenter Glow hinter dem Bild */}
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


              {/* =================================================
                  BILD
              ================================================= */}
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


        {/* Übergang nach unten */}
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

          {/* Erste Zeile */}
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


          {/* Zweite Zeile */}
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

    </main>
  );
}