import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "../../../../utils/database";
import User from '../../../../models/user';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && token.user) {
        session.user = token.user;
      }
      const sessionUser = await User.findOne({ email: session.user?.email });
      if (sessionUser) {
        session.user.id = sessionUser._id;
      }
      return session;
    },
    async signIn({ profile }) {
      try {
        await connectDB();
        const userExist = await User.findOne({ email: profile.email });
        if (!userExist) {
          const user = await User.create({
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
        console.log(error);
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
