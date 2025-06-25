"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { buttonEntry, cardVariants, titleVariants } from "./utils/animations";
import { useTheme } from "./hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white dark:bg-black text-black dark:text-neutral-100 transition-colors">
      <div className="text-center ">
        <motion.h1
          variants={titleVariants.top}
          initial="hidden"
          animate="visible"
          className="text-5xl font-bold mb-6"
        >
          🎧 Spotify Stats
        </motion.h1>

        <motion.p
          variants={titleVariants.bottom}
          initial="hidden"
          animate="visible"
          className="text-lg mb-8"
        >
          Veja suas músicas, artistas e gêneros mais ouvidos no Spotify.
        </motion.p>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onClick={() => signIn("spotify")}
          className="px-6 py-3 bg-green-500 rounded-lg text-black font-semibold hover:bg-green-600 transition"
        >
          Login com Spotify
        </motion.button>
      </div>
      <button
        aria-label="Trocar tema"
        onClick={toggleTheme}
        className="m-2 p-2 rounded-full hover:bg-neutral-800 transition"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </button>
    </main>
  );
}
