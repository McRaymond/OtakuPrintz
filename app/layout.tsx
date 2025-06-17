import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/CartContext" // ← make sure this path is correct

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anime Figures 3D - Premium 3D Printed Anime Figures",
  description:
    "Premium 3D printed anime figures with incredible detail. Ready-made collections and custom orders available.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
