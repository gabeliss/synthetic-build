"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, Check, Code } from "lucide-react"

interface ContactFormProps {
  plan?: string
  addon?: string
}

const plans = [
  {
    id: "website-build",
    name: "Website Build",
    price: "$499",
    description: "A fast, professional, custom-coded website. Ready in 48 hours.",
    features: [
      "Homepage + up to 5 inner pages",
      "Mobile-friendly, SEO-optimized",
      "Contact forms",
      "Clean, custom code — no templates or WordPress",
      "Source files 100% yours",
      "48-hour delivery guarantee"
    ],
    popular: true
  },
  {
    id: "custom-work-mvp",
    name: "Custom Work / MVP",
    price: "Let's talk",
    description: "Need something more complex? I also build full apps, MVPs, and custom platforms.",
    features: [
      "E-commerce integration",
      "Booking systems",
      "API integrations",
      "Admin dashboards",
      "User authentication",
      "Database design & development"
    ],
    popular: false
  }
]

const hostingAddon = {
  name: "Hosting & Support",
  price: "$29",
  period: "/month",
  description: "Keep your website fast, secure, and worry-free",
  features: [
    "Vercel hosting included",
    "Unlimited content updates",
    "Security patches & monitoring",
    "Backup & versioning",
    "Priority support"
  ]
}

export default function ContactForm({ plan, addon }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState(plan || "website-build")
  const [includeHosting, setIncludeHosting] = useState(addon === "hosting-support")
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    website: "",
    email: "",
    message: "",
  })

  // Scroll to contact form when plan is provided
  useEffect(() => {
    if (plan) {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [plan])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const selectedPlan = plans.find(p => p.id === selectedPlanId)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan: selectedPlan?.name || 'Website Build',
          includeHosting
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        name: "",
        businessName: "",
        website: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
      // You could add error state handling here if needed
      alert('There was an error submitting your request. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const selectedPlan = plans.find(p => p.id === selectedPlanId)
  
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
              {selectedPlan?.name === 'Custom Work / MVP' ? 
                'We\'ll review your project requirements and schedule a consultation call within 24 hours.' :
               includeHosting ? 
                'We\'ll review your information and send you a free website preview within 48 hours. We\'ll also discuss your hosting and support needs.' :
                'We\'ll review your information and send you a free website preview within 48 hours.'}
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Plan & Get Started
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select the option that best fits your needs and we'll create a custom solution for you.
            </p>
          </div>

          {/* Plan Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {plans.map((planOption) => (
              <div 
                key={planOption.id}
                className={`relative bg-white rounded-2xl p-6 shadow-sm border cursor-pointer transition-all ${
                  selectedPlanId === planOption.id 
                    ? 'border-indigo-200 ring-2 ring-indigo-200' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPlanId(planOption.id)}
              >
                {planOption.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {planOption.name}
                  </h3>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-gray-900">
                      {planOption.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {planOption.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-4">
                  {planOption.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-xs">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedPlanId === planOption.id 
                      ? 'border-indigo-500 bg-indigo-500' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPlanId === planOption.id && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                    )}
                  </div>
                </div>

                {/* Add-on section for Website Build */}
                {planOption.id === "website-build" && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Optional: {hostingAddon.name}
                      </h4>
                      <div className="mb-2">
                        <span className="text-lg font-bold text-gray-900">
                          {hostingAddon.price}
                        </span>
                        <span className="text-gray-600 text-sm">{hostingAddon.period}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        {hostingAddon.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-1 mb-3">
                      {hostingAddon.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-center">
                      <div className="flex items-center h-4">
                        <input
                          id="hosting-addon"
                          name="hosting-addon"
                          type="checkbox"
                          checked={includeHosting}
                          onChange={(e) => {
                            e.stopPropagation()
                            setIncludeHosting(e.target.checked)
                          }}
                          className="h-3 w-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <Label htmlFor="hosting-addon" className="ml-2 text-xs text-gray-700 cursor-pointer">
                          Add Hosting & Support
                        </Label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
                  {selectedPlan?.name === 'Custom Work / MVP' ? 'Discuss Custom Project' :
                   'Claim Your Free Preview'}
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