import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const PASSWORD = "3052link52"; // ← hier dein Passwort (kannst du ändern)

  const authCookie = request.cookies.get("site-auth")?.value;

  // Wenn Passwort stimmt → Seite freigeben
  if (authCookie === PASSWORD) {
    return NextResponse.next();
  }

  // Login-Seite immer erlauben
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  // Alles andere → zur Login-Seite
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|logo.webp|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};