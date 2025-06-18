// app/products/page.tsx
import { fetchProducts } from "@/lib/notion"
import { ProductsClientView } from "@/components/ProductsClientView"

export default async function ProductsPage() {
  const products = await fetchProducts()
  return <ProductsClientView products={products} />
}
