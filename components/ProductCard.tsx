"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Star,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  category?: string
  badges?: string[]
  media: { type: "image" | "gif" | "video"; src: string }[]
}

export function ProductCard({ product }: { product: Product }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const media = product.media ?? []
  const currentMedia = media[currentIndex]

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorite(favorites.some((item: Product) => item.id === product.id))
  }, [product.id])

  const toggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]")
    const updated = isFavorite
      ? stored.filter((p: Product) => p.id !== product.id)
      : [...stored, product]
    localStorage.setItem("favorites", JSON.stringify(updated))
    setIsFavorite(!isFavorite)
  }

  const nextMedia = () => setCurrentIndex((i) => (i + 1) % media.length)
  const prevMedia = () => setCurrentIndex((i) => (i - 1 + media.length) % media.length)

  const addToCart = () => {
    if (typeof window === "undefined") return
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const idx = cart.findIndex((it: any) => it.id === product.id)
    if (idx !== -1) cart[idx].quantity += 1
    else cart.push({ ...product, quantity: 1 })
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  return (
    <Card className="group bg-gray-900 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      {/* ───────────── media ───────────── */}
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-black">
          {currentMedia?.type !== "video" ? (
            <Image
              src={currentMedia?.src || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <video
              src={currentMedia.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}

          {media.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* ───────────── heart icon ───────────── */}
          <Heart
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 w-6 h-6 cursor-pointer transition-colors z-10 ${
              isFavorite ? "text-purple-500" : "text-white"
            }`}
            fill={isFavorite ? "#a855f7" : "none"}
          />

          {/* ───────────── badges ───────────── */}
          {product.badges
            ?.filter((b) => b.toLowerCase() !== "featured")
            .map((b, i) => (
              <Badge
                key={i}
                className="absolute left-4 bg-purple-600 text-white text-base px-4 py-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                style={{ top: `${1 + i * 2.6}rem` }}
              >
                {b}
              </Badge>
            ))}
        </div>
      </CardHeader>

      {/* ───────────── details ───────────── */}
      <CardContent className="p-6 text-white">
        <CardTitle className="mb-2">{product.name}</CardTitle>

        {product.category && (
          <p className="text-sm mb-3">{product.category}</p>
        )}

        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm">({product.reviews} reviews)</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            onClick={addToCart}
            className="bg-purple-600 hover:bg-purple-500 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

/* Ricky fact: Ricky Martin’s debut solo album sold over 500,000 copies in 3 days. 🔥 */
