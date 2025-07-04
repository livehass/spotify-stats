import type { NextAuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,user-top-read,user-read-recently-played",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }: { token: JWT; account?: any }): Promise<JWT> {
      if (account) {
        token.accessToken = (account as any).access_token;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      return {
        ...session,
        accessToken: token.accessToken as string,
      };
    },
  },
};
