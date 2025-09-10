import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"

const credentials = [
  {
    icon: Code,
    title: "Professional Developer",
    description: "6+ years building custom-coded websites and web applications"
  },
  {
    icon: Palette,
    title: "Design Expertise",
    description: "Trained in modern UI/UX principles and conversion optimization"
  },
  {
    icon: Zap,
    title: "AI + Custom Code",
    description: "Leverages AI to accelerate design while delivering hand-coded performance"
  }
]

export default function Founder() {
  return (
    <section className="py-24 bg-white" id="founder">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 mb-6">
                Meet the Founder
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Built by Gabe, a professional software engineer and UI/UX designer
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I use AI and automation to bring you agency-quality, custom-coded websites in a fraction of the time. 
                No more waiting months for a redesign, dealing with endless back-and-forth revisions, or settling for slow WordPress templates.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                After helping 50+ businesses transform their online presence, I've perfected a process 
                that eliminates the traditional pain points of website design while delivering 
                exceptional results.
              </p>

              {/* Credentials */}
              <div className="space-y-4 mb-8">
                {credentials.map((credential, index) => {
                  const Icon = credential.icon
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
                          <Icon className="h-4 w-4 text-indigo-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-semibold text-gray-900">{credential.title}</h4>
                        <p className="text-sm text-gray-600">{credential.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>50+ websites redesigned</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>48-hour delivery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              {/* Founder image placeholder */}
              {/* <Image src="/casual.jpeg" alt="Gabe Liss" width={500} height={500} className="rounded-2xl" /> */}
              

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-indigo-600">50+</div>
                <div className="text-xs text-gray-600">Sites Redesigned</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-green-600">48hr</div>
                <div className="text-xs text-gray-600">Avg. Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 