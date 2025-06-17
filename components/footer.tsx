import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <span className="font-bold">AF3D</span>
              </div>
              <span className="font-bold">Anime Figures 3D</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium 3D printed anime figures with incredible detail. Bringing your favorite characters to life.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products" className="hover:text-purple-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/custom-order" className="hover:text-purple-400 transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Popular Series</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products?category=naruto" className="hover:text-purple-400 transition-colors">
                  Naruto
                </Link>
              </li>
              <li>
                <Link href="/products?category=dragon-ball" className="hover:text-purple-400 transition-colors">
                  Dragon Ball
                </Link>
              </li>
              <li>
                <Link href="/products?category=one-piece" className="hover:text-purple-400 transition-colors">
                  One Piece
                </Link>
              </li>
              <li>
                <Link href="/products?category=demon-slayer" className="hover:text-purple-400 transition-colors">
                  Demon Slayer
                </Link>
              </li>
              <li>
                <Link href="/products?category=attack-on-titan" className="hover:text-purple-400 transition-colors">
                  Attack on Titan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@animefigures3d.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Anime Street, Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Anime Figures 3D. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-400 hover:text-white text-sm">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
