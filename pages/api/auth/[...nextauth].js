import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Admin from "../../../models/admin";
import bcrypt from "bcryptjs";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;

        console.log(email, password);

        const admin = await Admin.findOne({ email });

        if (!admin) {
          throw new Error("Invalid Email or password");
        }

        const isPasswordMatched = await bcrypt.compare(
          password,
          admin.password
        );
        if (!isPasswordMatched) {
          throw new Error("Invalid Email or password");
        } else return admin;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
