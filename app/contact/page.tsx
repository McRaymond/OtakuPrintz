"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Package } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen py-8 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our 3D printed anime figures or need help with a custom order? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-6 h-6 text-purple-400" />
                  Send us a Message
                </CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 text-white">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="bg-gray-800 border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="bg-gray-800 border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-white">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger className="bg-gray-800 border-purple-500/30 text-white focus:border-purple-400">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="custom-order">Custom Order</SelectItem>
                          <SelectItem value="shipping">Shipping & Returns</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                        className="bg-gray-800 border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20"
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div className="text-white">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="bg-gray-800 border-purple-500/30 text-white focus:border-purple-400 focus:ring-purple-400/20 min-h-32"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border border-purple-500/50"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">info@animefigures3d.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-400">
                      123 Anime Street
                      <br />
                      Tokyo, Japan 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-400">
                      Mon-Fri: 9AM-6PM JST
                      <br />
                      Sat-Sun: 10AM-4PM JST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Categories */}
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle>Support Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Orders & Shipping</p>
                    <p className="text-sm text-gray-400">Track orders, shipping info</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">Custom Orders</p>
                    <p className="text-sm text-gray-400">Design consultation, quotes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="font-medium">General Support</p>
                    <p className="text-sm text-gray-400">Questions, feedback</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle>Visit Our Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center border border-purple-500/20">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto text-purple-400 mb-2" />
                    <p className="text-gray-400">Interactive Map</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-lg text-white">How long does custom printing take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Custom orders typically take 2-3 weeks from design approval to shipping, depending on complexity and
                  current queue.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-lg">What materials do you use?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We use high-quality PLA, PETG, and resin materials for different detail levels and durability
                  requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Do you ship internationally?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Yes! We ship worldwide with tracking. Shipping costs and times vary by destination.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-purple-500/20 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Can I request any anime character?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We can create figures for most anime characters. Contact us with reference images for a custom quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
