import { loginService } from "@/service/auth.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    // login by email and password
    CredentialsProvider({
      // get email and password from login form
      async authorize(userInfo) {
        // define object structure
        console.log("userInfo ", userInfo)
        const newUserInfo = {
          email: userInfo.email,
          password: userInfo.password,
        };
        //  call login services
        const login = await loginService(newUserInfo);
        console.log(login)
        if (login?.status === 400) {
            throw new Error(login?.detail);
          }
          console.log("login ", login)
        return login;
      },
    }),
  ],
  // used to set token into cookies
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  }
};
 
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
