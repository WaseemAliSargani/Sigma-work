import NextAuth from 'next-auth'
import { exportTraceState } from 'next/dist/trace'
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),  
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
  ]
}) 

export {handler as GET, handler as POST}