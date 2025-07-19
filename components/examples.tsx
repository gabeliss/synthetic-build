import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const examples = [
  {
    name: "Annette's Italian Ice",
    industry: "Food & Beverage",
    description: "Transformed a dated black-themed site into a vibrant, modern experience that showcases their delicious products",
    beforeImage: "/examples/italian-ice-before.png",
    afterImage: "/examples/italian-ice-after.png",
    liveUrl: "https://annettes-italian-ice.vercel.app",
    timeframe: "48 hours",
    improvements: ["Modern light design", "Product showcase cards", "Clear call-to-actions", "Professional navigation"]
  },
  {
    name: "Wells Auto Service",
    industry: "Automotive",
    description: "Elevated a basic text-heavy site into a professional, trust-building experience for automotive services",
    beforeImage: "/examples/wells-auto-before.png",
    afterImage: "/examples/wells-auto-after.png",
    liveUrl: "https://wells-auto-service.vercel.app",
    timeframe: "48 hours",
    improvements: ["Professional hero section", "Trust badges display", "Service highlights", "Modern appointment booking"]
  },
  {
    name: "State Street Barbers",
    industry: "Personal Care",
    description: "Modernized a traditional barbershop site with premium styling and clear service presentation",
    beforeImage: "/examples/barbers-before.png",
    afterImage: "/examples/barbers-after.png",
    liveUrl: "https://state-street-barbers.vercel.app",
    timeframe: "48 hours",
    improvements: ["Premium service cards", "Professional imagery", "Clear pricing", "Modern booking system"]
  }
]

export default function Examples() {
  return (
    <section className="py-24 bg-gray-50" id="examples">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              See the Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real websites redesigned in 48 hours. No templates, no cookie-cutter designs — just custom solutions that convert.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="space-y-16">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{example.name}</h3>
                      <p className="text-gray-600 mb-2">{example.industry}</p>
                      <p className="text-gray-700">{example.description}</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Button asChild variant="outline" size="sm">
                        <Link href={example.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900">Before</h4>
                        <span className="text-sm text-gray-500">Original Site</span>
                      </div>
                      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border flex items-center justify-center">
                        <Image
                          src={example.beforeImage}
                          alt={`${example.name} - Before redesign`}
                          width={800}
                          height={600}
                          className="max-w-full max-h-full w-auto h-auto"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-gray-900">After</h4>
                        <span className="text-sm text-green-600 font-medium">48hr Redesign</span>
                      </div>
                      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border flex items-center justify-center">
                        <Image
                          src={example.afterImage}
                          alt={`${example.name} - After redesign`}
                          width={800}
                          height={600}
                          className="max-w-full max-h-full w-auto h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Improvements</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {example.improvements.map((improvement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                          {improvement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to See Your Transformation?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get your custom website preview in 48 hours. No commitment, no catch — just see what's possible for your business.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="#contact">
                  Claim Your Free Preview
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 