"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Nur auf der Startseite die große Navbar anzeigen
  const isHome = pathname === "/";

  if (!isHome) {
    // Auf allen anderen Seiten (Kunden, Impressum, Datenschutz usw.) 
    // kein kleines Logo mehr → verhindert Überlappung
    return null;
  }

  // Große Navbar nur auf der Startseite
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/logos/logo-icon.svg"
            alt="verlinken.ch"
            width={48}
            height={48}
            priority
            className="w-12 h-12 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-2xl tracking-tight text-white flex items-baseline">
            verlinken
            <span className="relative mx-[2px] w-[9px] h-[9px] rounded-full bg-red-600 flex items-center justify-center translate-y-[1px]">
              <span className="absolute w-[5px] h-[1.5px] bg-white rounded-sm"></span>
              <span className="absolute h-[5px] w-[1.5px] bg-white rounded-sm"></span>
            </span>
            <span className="text-red-600">ch</span>
          </span>
        </Link>

        <a
          href="#start"
          className="text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/90 to-blue-500/90 hover:from-blue-500 hover:to-blue-400 text-white transition-all duration-300 shadow-lg shadow-blue-600/20 hover:scale-105"
        >
          Jetzt starten
        </a>
      </div>
    </header>
  );
}