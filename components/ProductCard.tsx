"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
  rating: number
  reviews: number
  category?: string
  badge?: string
  media: { type: "image" | "gif" | "video"; src: string }[]
}

export function ProductCard({ product }: { product: Product }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const media = product.media || []

  const currentMedia = media[currentIndex]

  const nextMedia = () =>
    setCurrentIndex((prev) => (prev + 1) % media.length)
  const prevMedia = () =>
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)

  const addToCart = () => {
    if (typeof window === "undefined") return

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const index = existingCart.findIndex(
      (item: Product & { quantity: number }) => item.id === product.id
    )

    if (index !== -1) {
      existingCart[index].quantity += 1
    } else {
      existingCart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(existingCart))
  }

  return (
    <Card
      key={product.id}
      className="group bg-gray-900 border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-black">
          {/* Media Viewer */}
          {currentMedia?.type === "image" || currentMedia?.type === "gif" ? (
            <Image
              src={currentMedia.src}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : currentMedia?.type === "video" ? (
            <video
              src={currentMedia.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : null}

          {/* Arrows if multiple media */}
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

          {/* Badge */}
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              {product.badge}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 text-white">
        <CardTitle className="mb-2">{product.name}</CardTitle>

        {product.category && (
          <p className="text-sm text-white mb-3">{product.category}</p>
        )}

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-white">
            ({product.reviews} reviews)
          </span>
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
