import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const time_range = req.nextUrl.searchParams.get("range") || "short_term";

  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
