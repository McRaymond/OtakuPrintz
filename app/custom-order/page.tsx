// app/custom-order/page.tsx

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload, Palette, Package, Clock } from "lucide-react"

export default function CustomOrderPage() {
  const [formData, setFormData] = useState({
    characterName: "",
    anime: "",
    size: "",
    material: "",
    painting: "",
    pose: "",
    accessories: [] as string[],
    specialRequests: "",
    referenceImages: [] as File[],
    email: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Custom order submitted:", formData)
  }

  const handleAccessoryChange = (accessory: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      accessories: checked ? [...prev.accessories, accessory] : prev.accessories.filter((a) => a !== accessory),
    }))
  }

  return (
    <div className="min-h-screen py-8 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Custom Order</h1>
          <p className="text-white/70 text-lg">
            Bring your favorite anime character to life with our custom 3D printing service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center bg-gray-900 border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <CardHeader>
              <Upload className="w-12 h-12 mx-auto text-purple-400 mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <CardTitle className="text-lg text-white">1. Submit Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">Provide character details and reference images</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gray-900 border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <CardHeader>
              <Palette className="w-12 h-12 mx-auto text-pink-600 mb-2" />
              <CardTitle className="text-lg text-white">2. Design & Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">We create a 3D model and provide pricing</p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gray-900 border-purple-500/20 hover:border-purple-400/50 transition-colors">
            <CardHeader>
              <Package className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <CardTitle className="text-lg text-white">3. Print & Ship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/70">Your custom figure is printed and delivered</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-900 border-purple-500/20 text-white">
          <CardHeader>
            <CardTitle>Custom Order Details</CardTitle>
            <CardDescription className="text-white/70">
              Fill out the form below to request a custom anime figure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6 text-white">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-gray-800 border-purple-500/30 text-white" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-gray-800 border-purple-500/30 text-white" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="character">Character Name</Label>
                  <Input id="character" placeholder="e.g., Naruto Uzumaki" value={formData.characterName} onChange={(e) => setFormData({ ...formData, characterName: e.target.value })} className="bg-gray-800 border-purple-500/30 text-white" required />
                </div>
                <div>
                  <Label htmlFor="anime">Anime/Series</Label>
                  <Input id="anime" placeholder="e.g., Naruto Shippuden" value={formData.anime} onChange={(e) => setFormData({ ...formData, anime: e.target.value })} className="bg-gray-800 border-purple-500/30 text-white" required />
                </div>
              </div>

              <div>
                <Label>Figure Size</Label>
                <RadioGroup value={formData.size} onValueChange={(value) => setFormData({ ...formData, size: value })} className="mt-2">
                  {["small", "medium", "large"].map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={size} />
                      <Label htmlFor={size} className="text-white capitalize">{size} {size === "small" ? "(6-8 in)" : size === "medium" ? "(8-12 in)" : "(12+ in)"}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="material">Material</Label>
                  <Select value={formData.material} onValueChange={(value) => setFormData({ ...formData, material: value })}>
                    <SelectTrigger className="text-white bg-gray-800 border-purple-500/30">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent className="text-black">
                      <SelectItem value="pla">PLA (Standard)</SelectItem>
                      <SelectItem value="petg">PETG (Durable)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="painting">Painting Option</Label>
                  <Select value={formData.painting} onValueChange={(value) => setFormData({ ...formData, painting: value })}>
                    <SelectTrigger className="text-white bg-gray-800 border-purple-500/30">
                      <SelectValue placeholder="Select painting option" />
                    </SelectTrigger>
                    <SelectContent className="text-black">
                      <SelectItem value="none">No Painting (Raw Print)</SelectItem>
                      <SelectItem value="basic">Basic Colors (+$20-40)</SelectItem>
                      <SelectItem value="detailed">Detailed Painting (+$40-80)</SelectItem>
                      <SelectItem value="premium">Premium Finish (+$80-120)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="pose">Preferred Pose</Label>
                <Input id="pose" placeholder="e.g., Fighting stance, sitting, iconic pose from the anime" value={formData.pose} onChange={(e) => setFormData({ ...formData, pose: e.target.value })} className="bg-gray-800 border-purple-500/30 text-white" />
              </div>

              <div>
                <Label>Accessories (Optional)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {["Weapons", "Special Effects", "Base/Stand", "Extra Hands", "Alternate Head", "Props"].map(
                    (accessory) => (
                      <div key={accessory} className="flex items-center space-x-2">
                        <Checkbox id={accessory} checked={formData.accessories.includes(accessory)} onCheckedChange={(checked) => handleAccessoryChange(accessory, checked as boolean)} />
                        <Label htmlFor={accessory} className="text-sm text-white">{accessory}</Label>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea id="requests" placeholder="Any specific details or modifications..." value={formData.specialRequests} onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })} rows={4} className="bg-gray-800 border-purple-500/30 text-white" />
              </div>

              <div>
                <Label htmlFor="images">Reference Files</Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-white mb-2">Upload reference images or 3D files for printing</p>
                  <p className="text-sm text-white/80">Accepted: PNG, JPG, STL, OBJ – up to 10MB each</p>
                  <input
                    type="file"
                    multiple
                    accept=".png,.jpg,.jpeg,.stl,.obj"
                    onChange={(e) => {
                      if (!e.target.files) return
                      setFormData((prev) => ({
                        ...prev,
                        referenceImages: Array.from(e.target.files)
                      }))
                    }}
                    className="mt-4 w-full text-sm file:text-white file:bg-purple-600 file:border-0 file:py-2 file:px-4 file:rounded-lg file:hover:bg-purple-500 bg-transparent text-white"
                  />
                </div>
              </div>

              <Card className="bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Estimated Timeline</h4>
                      <p className="text-sm text-blue-700">
                        Design approval: 3-5 days • Production: 7-14 days • Shipping: 3-7 days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-500 border border-purple-500/50 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]" size="lg">
                Submit Custom Order Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}