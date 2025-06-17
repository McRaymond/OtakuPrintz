// app/page.tsx
import { FeaturedProducts } from "@/components/FeaturedProducts"
import { HeroSection } from "@/components/HeroSection"
import { CallToAction } from "@/components/CallToAction"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts /> 
      <CallToAction />
    </>
  )
}
