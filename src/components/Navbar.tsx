"use client";

import { buttonEntry } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useTheme } from "@/app/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Top Tracks", href: "/dashboard?type=tracks" },
  { name: "Top Artists", href: "/dashboard?type=artists" },
  { name: "Top Genres", href: "/dashboard?type=genres" },
  { name: "Recently Played", href: "/dashboard?type=recent" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      variants={buttonEntry}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center px-4 py-3 dark:bg-neutral-900 bg-slate-400 dark:text-white text-black"
    >
      {/* ------- */}
      <div className="w-32 flex items-center">
        <button
          aria-label="Trocar tema"
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-neutral-800 transition"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-400" />
          )}
        </button>
      </div>

      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-green-400"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 w-32 justify-end">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="text-sm hover:text-red-400 transition"
        >
          Logout
        </button>
        <a
          href="https://www.spotify.com/kr-en/legal/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify coleta dados como suas músicas favoritas, dispositivos usados e localização para oferecer uma experiência personalizada. Você pode controlar suas preferências de privacidade na conta Spotify."
          className="text-sm no-wrap hover:text-green-400 transition whitespace-nowrap"
        >
          Privacy notice
        </a>
      </div>
    </motion.nav>
  );
}
