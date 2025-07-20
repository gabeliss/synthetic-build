import { Search, Link as LinkIcon, CheckCircle, Settings } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "We scan your web presence",
    description: "If you already have a site, we redesign it. If you don't, we create one from scratch."
  },
  {
    icon: LinkIcon,
    title: "We send you a live preview",
    description: "You get a private link to a real, working version of your new site."
  },
  {
    icon: CheckCircle,
    title: "You say yes (or don't)",
    description: "Love it? We launch it. Not for you? No hard feelings."
  },
  {
    icon: Settings,
    title: "Ongoing support (optional)",
    description: "We can host, maintain, and update your site for you — or just hand off the files."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple, transparent process. No surprises, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-bold">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 mb-4">
                      <Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 