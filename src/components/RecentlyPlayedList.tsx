"use client";

import { cardVariants, titleVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RecentlyPlayedList() {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/spotify/recently-played`)
      .then((res) => res.json())
      .then((data) => setTracks(data.items || []));
  }, []);

  return (
    <div>
      <motion.h2
        variants={titleVariants.left}
        initial="hidden"
        animate="visible"
        className="text-2xl mb-4 flex justify-center dark:text-white  text-black transition-colors"
      >
        Recently Played
      </motion.h2>

      <div className="flex flex-wrap gap-4 justify-center items-start">
        {tracks.map((item, index) => {
          const track = item.track;
          return (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom={index}
              key={track.id + item.played_at}
              className="relative dark:bg-neutral-800 bg-slate-400 p-4 rounded dark:hover:bg-neutral-700 hover:bg-slate-600 transition w-[250px]"
            >
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-2"
              >
                <img
                  src="/Spotify_icon.svg"
                  alt="Open on Spotify"
                  className="w-6 h-6"
                />
              </a>

              <div className="text-sm font-bold dark:text-gray-300 text-black mb-1">
                #{index + 1}
              </div>

              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                className="w-full h-60 object-cover rounded"
              />
              <h3 className="mt-2 font-semibold text-white">{track.name}</h3>
              <p className="text-sm dark:text-gray-400 text-black">
                {track.artists.map((a: any) => a.name).join(", ")}
              </p>
              <p className="text-xs dark:text-gray-500 text-black">
                Played at: {new Date(item.played_at).toLocaleString()}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
