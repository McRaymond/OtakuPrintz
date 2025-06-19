/* ----------------------------------------------------------------
   NextAuth custom error page – /auth/error
---------------------------------------------------------------- */
"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthErrorPage() {
  const params = useSearchParams()
  const error  = params.get("error")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-black px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Authentication Error</h1>

      <p className="text-gray-400 mb-2 break-all max-w-lg">
        {error || "Something went wrong. Please try again."}
      </p>

      <Link
        href="/login"
        className="mt-4 text-purple-400 hover:text-purple-200 transition font-medium underline"
      >
        Back to login
      </Link>
    </main>
  )
}
