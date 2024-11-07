import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    Facebook({
      clientId: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_FACEBOOK_SECRET,
      redirectUri: "http://localhost:3001/api/auth/callback/facebook",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  pages: {},
});
