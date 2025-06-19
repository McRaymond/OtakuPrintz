import { NextRequest, NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 })
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password and create user
    const hashed = await hash(password, 10)
    await prisma.user.create({
      data: {
        email,
        password: hashed,
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Signup error:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
