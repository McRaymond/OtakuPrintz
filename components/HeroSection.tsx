// /components/HeroSection.tsx

import { Button } from "@/components/ui/button"
import { ShoppingCart, Palette } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          Anime Figures 3D
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Premium 3D printed anime figures with incredible detail. Ready-made collections and custom orders available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50"
          >
            <Link href="/products" className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50"
          >
            <Link href="/custom-order" className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Custom Order
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
