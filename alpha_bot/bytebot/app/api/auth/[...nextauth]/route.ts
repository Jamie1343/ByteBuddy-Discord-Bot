import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const options: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env["ClientID"] as string,
      clientSecret: process.env["ClientSecret"] as string,
    }),
  ],
};

const handler = NextAuth({});

export { handler as GET, handler as POST };
