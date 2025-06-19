// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import { SessionWrapper } from "@/components/SessionWrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/context/CartContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black text-white`}>
        <SessionWrapper>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  )
}
