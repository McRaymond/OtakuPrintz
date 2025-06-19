// /app/api/auth/[...nextauth]/route.ts
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { compare } from "bcryptjs"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user || !user.password) return null

        const isValid = await compare(credentials.password, user.password)
        if (!isValid) return null          // ← no throw

        return { id: user.id, email: user.email, name: user.name, image: user.image }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt ({ token, user }) {
      if (user) {
        token.id = user.id
        token.picture = user.image
      }
      return token
    },
    async session ({ session, token }) {
      if (token?.id) session.user.id = token.id as string
      if (token?.picture) session.user.image = token.picture as string
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
