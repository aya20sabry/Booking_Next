     // pages/api/auth/[...nextauth].js
     import NextAuth from "next-auth";
     import Providers from "next-auth/providers";

     export default NextAuth({
       providers: [
         Providers.Facebook({
           clientId: process.env.FACEBOOK_CLIENT_ID,
           clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
         }),
        //  Providers.Google({
        //    clientId: process.env.GOOGLE_CLIENT_ID,
        //    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //  }),
         // Add other providers as needed
       ],
       pages: {

         error: '/auth/error', // Error page
       },
     });