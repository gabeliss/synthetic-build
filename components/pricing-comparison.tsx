import { Check, X, DollarSign, Clock, Code, Shield } from "lucide-react"

export default function PricingComparison() {
  return (
    <section className="py-24 bg-gray-50" id="pricing-comparison">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Pay $5,000 When You Can Get Better for $499?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Traditional agencies charge thousands and take weeks. We deliver agency-quality websites in 48 hours for a fraction of the cost.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-6 px-8 font-semibold text-gray-900 text-lg">What You Get</th>
                    <th className="text-center py-6 px-8 font-semibold text-indigo-600 text-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold">Synthetic Build</span>
                        <span className="text-sm text-indigo-500">$499</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-600 text-lg">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold">Traditional Agency</span>
                        <span className="text-sm text-gray-500">$2,500 - $10,000+</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                        Total Cost
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="text-2xl font-bold text-green-600">$499</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="text-2xl font-bold text-red-600">$5,000+</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-3" />
                        Delivery Time
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ⚡ 48 hours
                      </span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        🐌 4-8 weeks
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">
                      <div className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-3" />
                        Code Quality
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ✅ Custom-coded
                      </span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ⚠️ Often WordPress
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-gray-400 mr-3" />
                        Source Code Ownership
                      </div>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="py-6 px-8 text-center">
                      <X className="h-6 w-6 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">Performance</td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        ⚡ Lightning fast
                      </span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        🐌 Often slow
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">SEO Optimization</td>
                    <td className="py-6 px-8 text-center">
                      <Check className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ⚠️ Extra cost
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-6 px-8 font-medium text-gray-900">Hosting & Support</td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        $29/month (optional)
                      </span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        $100+/month (required)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Save $4,500+ and Get Your Site 10x Faster
              </h3>
              <p className="text-indigo-100 mb-6">
                Join 50+ businesses who chose the smarter way to get a professional website
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get Started for $499
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 