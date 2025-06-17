import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Heart, Users, Award, Palette, Package, Printer, Sparkles, Target, Globe, Shield } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Akira Tanaka",
    role: "Founder & Lead Designer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "10+ years in 3D modeling and anime figure design",
  },
  {
    name: "Yuki Sato",
    role: "3D Printing Specialist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Expert in advanced printing techniques and materials",
  },
  {
    name: "Hana Kimura",
    role: "Paint & Finishing Artist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professional figure painter with incredible attention to detail",
  },
]

const stats = [
  { number: "5000+", label: "Figures Created" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "50+", label: "Anime Series" },
  { number: "3", label: "Years Experience" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              About Anime Figures 3D
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Bringing your favorite anime characters to life through cutting-edge 3D printing technology and artistic
              craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/50 px-4 py-2">Premium Quality</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/50 px-4 py-2">Custom Designs</Badge>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/50 px-4 py-2">Fast Shipping</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">From Passion to Profession</h3>
                <p className="text-gray-400 mb-6">
                  What started as a hobby project in 2021 has grown into a thriving business dedicated to creating the
                  highest quality 3D printed anime figures. Our founder, Akira, was frustrated by the lack of
                  affordable, high-quality figures for lesser-known anime characters.
                </p>
                <p className="text-gray-400 mb-6">
                  Using cutting-edge 3D printing technology and traditional painting techniques, we've created thousands
                  of unique figures for anime fans worldwide. Every piece is crafted with love and attention to detail
                  that rivals traditional manufacturing.
                </p>
                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-500/50"
                >
                  <Link href="/custom-order">Start Your Custom Order</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-800 rounded-lg border border-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 mx-auto text-purple-400 mb-4" />
                    <p className="text-gray-400">Our Workshop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-purple-500/20 text-center">
              <CardHeader>
                <Heart className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle>Passion for Anime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We're anime fans first, creators second. Every figure is made with genuine love for the characters and
                  stories.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-purple-500/20 text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle>Quality Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We never compromise on quality. Each figure undergoes rigorous quality control before shipping.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-purple-500/20 text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Our customers are part of our family. We listen, adapt, and grow together with the anime community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-purple-500/20 text-center">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-lg">1. Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Detailed 3D modeling based on reference materials and character specifications.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-center">
              <CardHeader>
                <Printer className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-lg">2. Print</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  High-resolution 3D printing using premium materials for exceptional detail.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-center">
              <CardHeader>
                <Palette className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-lg">3. Paint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Hand-painted details and finishing touches by our skilled artists.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-center">
              <CardHeader>
                <Package className="w-12 h-12 mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-lg">4. Ship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">Carefully packaged and shipped with tracking to your door.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-purple-500/20 text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-700 border-2 border-purple-500/30 flex items-center justify-center">
                    <Users className="w-16 h-16 text-purple-400" />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-purple-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-purple-500/20">
              <CardHeader>
                <Zap className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-lg">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Quick turnaround times without compromising on quality. Most orders ship within 1-2 weeks.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20">
              <CardHeader>
                <Globe className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-lg">Worldwide Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  We ship to anime fans all over the world with secure packaging and tracking.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20">
              <CardHeader>
                <Shield className="w-8 h-8 text-purple-400 mb-2" />
                <CardTitle className="text-lg">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  100% satisfaction guarantee. If you're not happy, we'll make it right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-black to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.1)_0%,_transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Favorite Character to Life?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of satisfied customers who trust us with their anime figure dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-500/50"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-900"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
