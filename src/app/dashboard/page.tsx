"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TimeRangeSelector from "@/components/TimeRangeSelector";
import TrackList from "@/components/TrackList";
import ArtistList from "@/components/ArtistList";
import GenreChart from "@/components/GenreChart";
import RecentlyPlayedList from "@/components/RecentlyPlayedList";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { buttonEntry } from "../utils/animations";

export default function DashboardPage() {
  const params = useSearchParams();
  const type = params.get("type") || "tracks";
  const [range, setRange] = useState("short_term");

  return (
    <motion.div
      variants={buttonEntry}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white dark:bg-black text-white dark:text-white transition-colors"
    >
      <Navbar />
      {(type === "tracks" || type === "artists" || type === "genres") && (
        <TimeRangeSelector selected={range} onChange={setRange} />
      )}

      <div className="p-6">
        {type === "tracks" && <TrackList range={range} />}
        {type === "artists" && <ArtistList range={range} />}
        {type === "genres" && <GenreChart range={range} />}
        {type === "recent" && <RecentlyPlayedList />}
      </div>
      <Footer />
    </motion.div>
  );
}
