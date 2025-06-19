"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })

    if (res.ok) {
      router.push("/login")
    } else {
      const data = await res.json()
      setError(data.error || "Signup failed")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black px-4">
      <div className="bg-gray-950/90 backdrop-blur-md p-8 rounded-xl w-full max-w-md shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-700/40 relative">
        <Link
          href="/login"
          className="absolute top-4 left-4 text-sm text-purple-400 hover:text-purple-300 transition"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold text-center text-purple-400 mb-8">Create an Account</h1>

        <div className="flex flex-col gap-4 mb-8">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex items-center justify-center gap-3 bg-white text-black font-medium py-3 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} /> Sign up with Google
          </button>
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-3 bg-black border border-gray-700 text-white py-3 rounded opacity-60 cursor-not-allowed"
          >
            <FaApple size={20} /> Sign up with Apple (soon)
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-950 px-2 text-gray-400">or sign up with email</span>
          </div>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 border border-purple-700/30 focus:border-purple-500 outline-none"
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 border border-purple-700/30 focus:border-purple-500 outline-none"
            required
          />

          {error && <p className="text-red-500 text-center text-sm -mt-2">{error}</p>}

          <Button
            type="submit"
            className="bg-gradient-to-r from-purple-700 to-blue-700 hover:opacity-90 text-white py-3 rounded font-semibold transition"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </main>
  )
}