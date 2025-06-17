import { featuredProducts } from "@/data/products"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <Button
            variant="outline"
            asChild
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50"
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
