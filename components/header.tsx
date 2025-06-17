// /components/Header.tsx
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, User, Heart } from "lucide-react"

/** fallback if CartContext isn’t mounted yet */
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

  /* listen once the app is hydrated */
  useEffect(() => {
    const update = () => setCartCount(safeGetCartCount())
    update()                               // first paint
    window.addEventListener("cartUpdated", update)
    window.addEventListener("storage", update) // another tab
    return () => {
      window.removeEventListener("cartUpdated", update)
      window.removeEventListener("storage", update)
    }
  }, [])

  return (
<header className="sticky top-0 z-50 w-full border-b border-purple-500/40 bg-black/30 backdrop-blur-md backdrop-saturate-200 shadow-[0_0_20px_rgba(168,85,247,10.5)]">

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div >
              <img
                src="/img/logo.png"
                alt="OtakuPrintz Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-bold text-xl hidden sm:block text-white">
              OtakuPrintz
            </span>
          </Link>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              ["Products", "/products"],
              ["Custom Orders", "/custom-order"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search anime figures..."
                className="pl-10 pr-4 bg-gray-900 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
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

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                {/* same links as desktop */}
                <div className="flex flex-col space-y-4 mt-8">
                  {["/products","/custom-order","/about","/contact"].map((href) => (
                    <Link key={href} href={href} className="text-lg font-medium">
                      {href.replace("/","").replace("-"," ").replace(/^\w/, c=>c.toUpperCase())}
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
