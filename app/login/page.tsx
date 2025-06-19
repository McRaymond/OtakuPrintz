/* ----------------------------------------------------------------
   Login page – works with NextAuth (credentials + Google)
---------------------------------------------------------------- */
"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"

export default function LoginPage() {
  /* ----------------------------------------------------------------
     Hooks & state
  ---------------------------------------------------------------- */
  const router          = useRouter()
  const searchParams    = useSearchParams()
  const { data: session, status } = useSession()

  const [email,      setEmail]      = useState("")
  const [password,   setPassword]   = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error,      setError]      = useState("")
  const [loading,    setLoading]    = useState(false)

  /* ----------------------------------------------------------------
     Redirect if the user is already authenticated
  ---------------------------------------------------------------- */
  useEffect(() => {
    if (status === "authenticated") router.replace("/")
  }, [status, router])

  /* ----------------------------------------------------------------
     Pull error message from URL (e.g.  /login?error=CredentialsSignin)
  ---------------------------------------------------------------- */
  useEffect(() => {
    const err = searchParams.get("error")
    if (err === "CredentialsSignin")       setError("Invalid email or password.")
    else if (err)                          setError("Authentication failed. Please try again.")
  }, [searchParams])

  /* ----------------------------------------------------------------
     Load remembered email
  ---------------------------------------------------------------- */
  useEffect(() => {
    const remembered = localStorage.getItem("rememberedEmail")
    if (remembered) {
      setEmail(remembered)
      setRememberMe(true)
    }
  }, [])

  /* ----------------------------------------------------------------
     Handle credentials sign-in
  ---------------------------------------------------------------- */
  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const res = await signIn("credentials", {
      redirect : false,        // we decide what to do next
      email,
      password,
    })

    setLoading(false)

    if (res?.error) {
      setError("Invalid email or password.")
    } else {
      rememberMe
        ? localStorage.setItem("rememberedEmail", email)
        : localStorage.removeItem("rememberedEmail")

      router.push("/")          // success ➜ home
    }
  }

  /* ----------------------------------------------------------------
     UI
  ---------------------------------------------------------------- */
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black px-4">
      <div className="bg-gray-950/90 backdrop-blur-md p-8 rounded-xl w-full max-w-md shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-700/40 relative">
        <h1 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Login to SenpaiForge
        </h1>

        {/* OAuth buttons */}
        <div className="flex flex-col gap-4 mb-8">
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center justify-center gap-3 bg-white text-black font-medium py-3 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} /> Sign in with Google
          </button>

          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-3 bg-black border border-gray-700 text-white py-3 rounded opacity-60 cursor-not-allowed"
          >
            <FaApple size={20} /> Sign in with Apple (coming soon)
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-950 px-2 text-gray-400">
              or sign in with email
            </span>
          </div>
        </div>

        {/* Credentials form */}
        <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 border border-purple-700/30 focus:border-purple-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-900 text-white placeholder-gray-400 border border-purple-700/30 focus:border-purple-500 outline-none"
            required
          />

          {/* Remember me */}
          <label className="flex items-center text-sm text-gray-300 gap-2 select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="accent-purple-600"
            />
            Remember me
          </label>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-center text-sm -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-700 to-blue-700 hover:opacity-90 disabled:opacity-50 text-white py-3 rounded font-semibold transition"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {/* Sign-up link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-purple-500 hover:text-purple-300 hover:underline transition"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  )
}
