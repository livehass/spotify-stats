"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <button
        onClick={() => signIn("spotify")}
        className="px-6 py-3 bg-green-500 rounded hover:bg-green-600 transition"
      >
        Entrar com Spotify
      </button>
    </div>
  );
}
