"use client";

import { cardVariants, titleVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  range: string;
};

export default function ArtistList({ range }: Props) {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/spotify/top-artists?range=${range}`)
      .then((res) => res.json())
      .then((data) => setArtists(data.items || []));
  }, [range]);

  return (
    <div>
      <motion.h2
        variants={titleVariants.right}
        initial="hidden"
        animate="visible"
        className="flex justify-center text-2xl mb-4 text-black dark:text-white"
      >
        Top Artists
      </motion.h2>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {artists.map((artist, index) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom={index}
            key={artist.id}
            className="relative w-[300px] bg-slate-400 dark:bg-neutral-800 text-black  dark:text-white transition-colors"
          >
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3"
            >
              <img
                src="/Spotify_icon.svg"
                alt="Open on Spotify"
                className="w-6 h-6"
              />
            </a>

            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="w-full h-60 object-cover rounded"
            />
            <h3 className="ml-1 mt-2 font-semibold text-white">
              #{index + 1} - {artist.name}
            </h3>
            <p className="text-sm ml-1 dark:text-gray-400 text-black transition-colors">
              {artist.genres.slice(0, 3).join(", ")
                ? artist.genres.slice(0, 3).join(", ")
                : "Sem gêneros disponíveis"}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
