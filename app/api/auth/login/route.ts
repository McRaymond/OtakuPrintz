import { NextRequest, NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { signJwt } from "@/lib/jwt"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user || !user.password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const isValid = await compare(password, user.password)
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = await signJwt({ id: user.id, email: user.email })

    return NextResponse.json({ token, user: { id: user.id, email: user.email } })
  } catch (err) {
    console.error("Login error:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
