import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../../utils/database";
import User from "../../../../models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }

      const sessionUser = await User.findOne({ email: session.user?.email });

      if (sessionUser) {
        session.user.id = sessionUser._id.toString(); 
      }

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDB(); 

        const userExist = await User.findOne({ email: profile.email });

        if (!userExist) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }

        return {
          email: profile.email,
          user: {
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          },
        };
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false; 
      }
    },
  },
});

export { handler as GET, handler as POST };
