// /components/FeaturesSection.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Zap, Palette } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Our Figures?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Package className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Premium Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                High-resolution 3D printing with premium materials for exceptional detail and durability.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Zap className="w-12 h-12 mx-auto text-pink-600 mb-4" />
              <CardTitle>Fast Shipping</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Quick processing and shipping to get your favorite characters to you as soon as possible.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Palette className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Custom Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bring any anime character to life with our custom 3D printing and painting services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
