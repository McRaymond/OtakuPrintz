"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [promoCode, setPromoCode] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  const saveCart = (items: any[]) => {
    localStorage.setItem("cart", JSON.stringify(items))
    setCartItems(items)
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      const updated = cartItems.filter((item) => item.id !== id)
      saveCart(updated)
    } else {
      const updated = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
      saveCart(updated)
    }
  }

  const removeItem = (id: number) => {
    const updated = cartItems.filter((item) => item.id !== id)
    saveCart(updated)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 75 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8 bg-black text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 mx-auto text-purple-400/50 mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-400 mb-8">Looks like you haven't added any figures to your cart yet.</p>
            <Button
              asChild
              className="bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-500/50 text-white"
            >
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle>Cart Items ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border border-purple-500/20 rounded-lg bg-gray-800/50"
                  >
                    <div className="min-w-[100px]">
                      <Image
                        src={
                          item.media?.[0]?.type === "image" || item.media?.[0]?.type === "gif"
                            ? item.media[0].src
                            : "/placeholder.svg"
                        }
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-[100px] h-[100px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                      <p className="text-purple-600 font-bold">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4 text-black" />
                      </Button>
                      <span className="w-8 text-center font-medium text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-white hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4 text-black" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-white/70">Add ${(75 - subtotal).toFixed(2)} more for free shipping!</p>
                )}

                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-gray-800 border-purple-500/30 text-white"
                    />
                    <Button variant="outline" className="text-black">Apply</Button>
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50 text-white"
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>

                  <Button variant="outline" className="w-full text-black" asChild>
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
