"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correctPassword = "3052link52"; // muss gleich sein wie in middleware.ts

    if (password === correctPassword) {
      // Cookie setzen (1 Jahr gültig)
      document.cookie = `site-auth=${password}; path=/; max-age=31536000`;
      router.push("/");
      router.refresh();
    } else {
      setError("Falsches Passwort");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-2xl border border-white/10 max-w-sm w-full shadow-xl"
      >
        <h1 className="text-xl font-bold mb-2">verlinken.ch</h1>
        <p className="text-white/50 text-sm mb-6">Zugang nur für dich</p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort eingeben"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 mb-3 focus:outline-none focus:border-emerald-500"
          autoFocus
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 rounded-xl font-semibold transition"
        >
          Rein
        </button>
      </form>
    </div>
  );
}