"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import TimeRangeSelector from "@/components/TimeRangeSelector";
import TrackList from "@/components/TrackList";
import ArtistList from "@/components/ArtistList";
import GenreChart from "@/components/GenreChart";
import RecentlyPlayedList from "@/components/RecentlyPlayedList";

export default function TypeSwitcherClient() {
  const params = useSearchParams();
  const type = params.get("type") || "tracks";
  const [range, setRange] = useState("short_term");

  return (
    <>
      {(type === "tracks" || type === "artists" || type === "genres") && (
        <TimeRangeSelector selected={range} onChange={setRange} />
      )}

      <div className="p-6">
        {type === "tracks" && <TrackList range={range} />}
        {type === "artists" && <ArtistList range={range} />}
        {type === "genres" && <GenreChart range={range} />}
        {type === "recent" && <RecentlyPlayedList />}
      </div>
    </>
  );
}
