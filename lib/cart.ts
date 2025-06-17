// lib/cart.ts
export const addToCart = (product: {
  id: number
  name: string
  price: number
  image: string
}) => {
  if (typeof window === "undefined") return

  const existing = JSON.parse(localStorage.getItem("cart") || "[]")
  const idx = existing.findIndex((i: any) => i.id === product.id)

  if (idx !== -1) {
    existing[idx].quantity += 1
  } else {
    existing.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(existing))
  window.dispatchEvent(new Event("cartUpdated"))            // ✅ notify Header
}
