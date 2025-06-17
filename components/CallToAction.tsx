// /components/CallToAction.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1)_0%,_transparent_70%)]"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Collection?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of anime fans who trust us for their figure collections
        </p>
        <Button size="lg" variant="secondary" className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50"
>
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    </section>
  )
}
