"use client";

import { cardVariants, titleVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  range: string;
};

export default function TrackList({ range }: Props) {
  type Track = {
    id: string;
    name: string;
    album: {
      images: { url: string }[];
    };
    artists: { name: string }[];
    external_urls: { spotify: string };
  };

  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    fetch(`/api/spotify/top-tracks?range=${range}`)
      .then((res) => res.json())
      .then((data) => setTracks(data.items || []));
  }, [range]);

  return (
    <div>
      <motion.h2
        variants={titleVariants.left}
        initial="hidden"
        animate="visible"
        className="text-2xl mb-4 flex justify-center dark:text-white text-black transition"
      >
        Top Tracks
      </motion.h2>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {tracks.map((track, index) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={index}
            key={track.id}
            className="relative bg-slate-400 dark:bg-neutral-800 w-[300px] p-2 rounded dark:hover:bg-neutral-700 hover:bg-slate-600 transition"
          >
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-5 right-1"
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
            <h3 className="mt-2 font-semibold">{track.name}</h3>
            <p className="text-sm dark:text-gray-400 text-black">
              {track.artists.map((a: any) => a.name).join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
