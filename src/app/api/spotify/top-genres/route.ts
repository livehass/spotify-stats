import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const time_range = req.nextUrl.searchParams.get("range") || "short_term";

  const res = await fetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );

  const artists = await res.json();

  if (!artists.items) {
    return NextResponse.json(
      { error: "No artist data found" },
      { status: 404 }
    );
  }

  // Contagem dos gêneros
  const genreCount: { [key: string]: number } = {};

  artists.items.forEach((artist: any) => {
    artist.genres.forEach((genre: string) => {
      genreCount[genre] = (genreCount[genre] || 0) + 1;
    });
  });

  // Ordena do mais pro menos
  const sortedGenres = Object.entries(genreCount)
    .sort((a, b) => b[1] - a[1])
    .map(([genre, count]) => ({ genre, count }));

  return NextResponse.json(sortedGenres);
}
