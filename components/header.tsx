// /components/Header.tsx
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, Heart } from "lucide-react"

const safeGetCartCount = () => {
  try {
    if (typeof window === "undefined") return 0
    const stored = JSON.parse(localStorage.getItem("cart") || "[]")
    return Array.isArray(stored)
      ? stored.reduce((sum, i) => sum + (i.quantity || 0), 0)
      : 0
  } catch {
    return 0
  }
}

export function Header() {
  const [cartCount, setCartCount] = useState<number>(safeGetCartCount)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    const update = () => setCartCount(safeGetCartCount())
    update()
    window.addEventListener("cartUpdated", update)
    window.addEventListener("storage", update)
    return () => {
      window.removeEventListener("cartUpdated", update)
      window.removeEventListener("storage", update)
    }
  }, [])

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" })
  }

  if (status === "loading") return null

  const user = session?.user

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/40 bg-black/30 backdrop-blur-md backdrop-saturate-200 shadow-[0_0_20px_rgba(168,85,247,10.5)]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex justify-center items-center my-2">
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white px-3 py-1 rounded-lg shadow-[0_0_12px_rgba(168,85,247,0.5)] text-center">
                <span className="font-bold block leading-tight text-sm">SenpaiForge</span>
                <span className="font-bold block leading-tight text-sm">センパイフォージ</span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {["Products", "Custom Orders", "About", "Contact"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search anime figures..."
                className="pl-10 pr-4 bg-gray-900 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 relative">
            <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
              <Link href="/favorites">
                <Heart className="h-5 w-5 hover:text-purple-500 transition-colors" />
              </Link>
            </Button>

            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="overflow-hidden rounded-full border border-purple-500"
                >
                  <img
                    src={user.image || "/avatar/default.png"}
                    alt="User avatar"
                    className="w-10 h-10 object-cover"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-800 bg-black shadow-xl">
                    <div className="p-2 text-sm text-white space-y-1">
                      <Link href="/profile" className="block px-4 py-2 hover:bg-gray-800 rounded-md">My Profile</Link>
                      <Link href="/orders" className="block px-4 py-2 hover:bg-gray-800 rounded-md">My Orders</Link>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-500/10 rounded-md"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login / Signup</Link>
              </Button>
            )}

            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {["/products", "/custom-order", "/about", "/contact"].map((href) => (
                    <Link key={href} href={href} className="text-lg font-medium">
                      {href.replace("/", "").replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
