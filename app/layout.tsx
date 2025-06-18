import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/CartContext" // ← make sure this path is correct

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SenpaiForge",
  description:
    "Premium 3D printed anime figures with incredible detail. Ready-made collections and custom orders available.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black text-white`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

