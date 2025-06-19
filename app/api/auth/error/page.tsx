// app/error/page.tsx
"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white bg-black px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Authentication Error</h1>
      <p className="text-gray-400 mb-2 break-all">
        {error || "Something went wrong. Please try again later."}
      </p>
      <Link
        href="/login"
        className="mt-4 text-purple-400 hover:text-purple-200 transition font-medium underline"
      >
        Back to login
      </Link>
    </div>
  )
}
