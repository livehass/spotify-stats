"use client";

import { RangesVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";

type Props = {
  selected: string;
  onChange: (range: string) => void;
};

export default function TimeRangeSelector({ selected, onChange }: Props) {
  const ranges = [
    { label: "Last 4 Weeks", value: "short_term" },
    { label: "Last 6 Months", value: "medium_term" },
    { label: "Last 12 Months", value: "long_term" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={RangesVariants}
      custom={ranges.values}
      className="flex justify-center itens-center gap-4 my-4"
    >
      {ranges.map((range) => (
        <button
          key={range.value}
          onClick={() => onChange(range.value)}
          className={`px-4 py-2 rounded 
            ${
              selected === range.value
                ? "bg-green-500 text-white"
                : "bg-neutral-800 text-gray-300"
            }`}
        >
          {range.label}
        </button>
      ))}
    </motion.div>
  );
}
