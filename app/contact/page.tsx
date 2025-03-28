"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help. Reach out to us using the form below or contact us
          directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          {isSubmitted ? (
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-[#c8102e] mb-4">Thank You!</h3>
                  <p className="mb-4">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#c8102e] hover:bg-[#a50d25] text-white">
                    Send Another Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <Card className="border-none shadow-lg mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#c8102e] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-700">(312) 787-4448 (River North)</p>
                    <p className="text-gray-700">(312) 787-7044 (Old Town)</p>
                    <p className="text-gray-700">(773) 348-8800 (Lincoln Park)</p>
                    <p className="text-gray-700">(773) 975-9800 (Lakeview)</p>
                    <p className="text-gray-700">(312) 551-0100 (The Loop)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#c8102e] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-700">info@statestreetbarbers.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#c8102e] mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9am - 8pm</p>
                    <p className="text-gray-700">Saturday: 9am - 6pm</p>
                    <p className="text-gray-700">Sunday: 10am - 5pm</p>
                    <p className="text-gray-700 text-sm italic mt-1">
                      (The Loop location: Mon-Fri 8am-7pm, Sat 9am-5pm, Sun Closed)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
          <p className="mb-6 text-gray-700">
            Ready to experience the State Street Barbers difference? Book your appointment online or call your preferred
            location directly.
          </p>
          <Link
            href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

