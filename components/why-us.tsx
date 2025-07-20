import { Eye, Zap, Shield, Code } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "Preview-First Approach",
    description: "You see the finished product before you commit. No more guessing games or endless revisions."
  },
  {
    icon: Zap,
    title: "AI + Human Expertise",
    description: "AI handles the heavy lifting. Real humans ensure polish and performance. Best of both worlds."
  },
  {
    icon: Shield,
    title: "Hands-Off Option",
    description: "No back-and-forth — we handle hosting, updates, and maintenance if you want."
  },
  {
    icon: Code,
    title: "Built for Speed & SEO",
    description: "Hand-coded websites that load lightning fast and rank better in search engines. No slow templates or bloated plugins holding you back."
  }
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white" id="why-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Businesses Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We've streamlined the website design process to save you time and eliminate uncertainty.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="group relative">
                  {/* Background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transform group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Custom Code Matters</h3>
              <p className="text-gray-600">The difference between our approach and typical agencies</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-indigo-600">Synthetic Build</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-600">Typical Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Codebase</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Hand-written, modern
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        WordPress template
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Loading Speed</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ⚡ Ultra-fast
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        🐌 Often bloated
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">SEO Optimization</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ✅ Built-in
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ⚠️ Plugin-dependent
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Design Flexibility</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        🎯 Unlimited
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        🧱 Template-based
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium text-gray-900">Updates & Changes</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        💪 Easy to modify
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        ❌ Plugin-dependent
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Process Highlights */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2">What Makes Us Different</h3>
              <p className="text-indigo-100">Our approach eliminates the traditional pain points of website design</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">48hrs</div>
                <div className="text-indigo-100 font-medium">Typical preview delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$0</div>
                <div className="text-indigo-100 font-medium">Upfront cost for preview</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-indigo-100 font-medium">Risk-free preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 