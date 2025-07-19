import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "One-Time Build",
    price: "$499",
    description: "Perfect for businesses that want a professional website",
    features: [
      "Homepage + up to 3 inner pages",
      "Mobile-responsive design",
      "SEO optimization",
      "Contact forms",
      "Google Analytics setup",
      "Source files included"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Hosting & Support",
    price: "$29",
    period: "/month",
    description: "Ongoing support and maintenance for your website",
    features: [
      "Vercel hosting included",
      "1 content update/month",
      "Security updates",
      "Performance monitoring",
      "Backup management",
      "Priority support"
    ],
    cta: "Add Support",
    popular: true
  },
  {
    name: "Custom Work / MVPs",
    price: "Let's talk",
    description: "For custom builds, apps, or more complex projects",
    features: [
      "Custom functionality",
      "E-commerce integration",
      "API development",
      "Database design",
      "User authentication",
      "Advanced features"
    ],
    cta: "Discuss Project",
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No hidden fees, no surprises. Just clear pricing for what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-8 shadow-sm border ${
                plan.popular 
                  ? 'border-indigo-200 ring-2 ring-indigo-200' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-indigo-500 hover:bg-indigo-600' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
              >
                <a href="#contact">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-600">
              <strong>Just want a free preview first?</strong> We'll show you the possibilities, no commitment needed.
            </p>
            <Button asChild variant="link" className="mt-2 text-indigo-600 hover:text-indigo-700">
              <a href="#contact">
                Request Free Preview →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 