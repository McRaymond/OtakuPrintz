"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartContextProps {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  updateCart: (items: CartItem[]) => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setCart(JSON.parse(stored))
  }, [])

  const updateCart = (items: CartItem[]) => {
    setCart(items)
    localStorage.setItem("cart", JSON.stringify(items))
  }

  const addToCart = (item: CartItem) => {
    const existing = [...cart]
    const index = existing.findIndex((i) => i.id === item.id)
    if (index !== -1) {
      existing[index].quantity += 1
    } else {
      existing.push({ ...item, quantity: 1 })
    }
    updateCart(existing)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
