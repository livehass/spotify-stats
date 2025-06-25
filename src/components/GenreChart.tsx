"use client";

import { titleVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  range: string;
};

export default function GenreChart({ range }: Props) {
  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/spotify/top-genres?range=${range}`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a: any, b: any) => b.count - a.count);
        setGenres(sorted);
      });
  }, [range]);

  return (
    <div>
      <motion.h2
        variants={titleVariants.left}
        initial="hidden"
        animate="visible"
        className="flex justify-center text-2xl mb-4"
      >
        Top Genres
      </motion.h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={genres}
          margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="genre" />
          <Tooltip />
          <Bar dataKey="count" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
