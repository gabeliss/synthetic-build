"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    website: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: "",
      businessName: "",
      website: "",
      email: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gray-50" id="contact">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Thanks! We'll be in touch soon.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We'll review your information and send you a free website preview within 48 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Send Another Request
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Your Free Preview
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about your business and we'll create a custom website preview just for you.
            </p>
          </div>

          {/* Social proof */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 mb-4">
              <CheckCircle className="mr-2 h-4 w-4" />
              Trusted by 50+ small businesses
            </div>
            <p className="text-sm text-gray-600">
              See why small businesses are switching to AI-powered design
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Your business name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                  Website (if you have one)
                </Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Tell us about your business (optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1"
                rows={4}
                placeholder="What does your business do? Who are your customers? Any specific features you'd like to see?"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full text-lg py-6"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Claim Your Free Preview
                </>
              )}
            </Button>

            <p className="mt-4 text-sm text-gray-500 text-center">
              No commitment required • We'll send you a preview within 48 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  )
} 