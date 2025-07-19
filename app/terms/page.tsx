import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="prose prose-gray max-w-none">
              <h2>1. Service Description</h2>
              <p>
                Synthetic Build provides AI-powered website design services, including custom website previews, 
                full website development, and ongoing maintenance services. Our services are designed to help 
                businesses establish or improve their online presence.
              </p>

              <h2>2. Free Preview Service</h2>
              <p>
                We offer a complimentary website preview service with the following terms:
              </p>
              <ul>
                <li>Previews are delivered within 48 hours of request submission</li>
                <li>No payment is required for the preview service</li>
                <li>Previews are provided "as is" for evaluation purposes</li>
                <li>We reserve the right to decline preview requests at our discretion</li>
                <li>Previews remain our intellectual property until a full project is contracted</li>
              </ul>

              <h2>3. Project Terms</h2>
              <p>
                When you choose to proceed with a full website project:
              </p>
              <ul>
                <li>A separate project agreement will be provided</li>
                <li>Payment terms and project scope will be clearly defined</li>
                <li>Project timelines will be established based on complexity</li>
                <li>Revisions and changes will be handled according to the project agreement</li>
              </ul>

              <h2>4. Client Responsibilities</h2>
              <p>
                As a client, you agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information about your business</li>
                <li>Respond to requests for feedback within reasonable timeframes</li>
                <li>Provide necessary content, images, and branding materials</li>
                <li>Ensure you have rights to all content you provide</li>
                <li>Maintain backups of your content</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                Intellectual property rights are handled as follows:
              </p>
              <ul>
                <li>Previews remain our property until a project is contracted</li>
                <li>Upon full payment, you receive rights to the final website design</li>
                <li>We retain rights to showcase completed work in our portfolio</li>
                <li>Third-party assets (fonts, images, etc.) remain under their respective licenses</li>
              </ul>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms for full projects:
              </p>
              <ul>
                <li>50% deposit required to begin full project development</li>
                <li>Remaining balance due upon project completion</li>
                <li>All payments are non-refundable once work begins</li>
                <li>Late payments may result in project delays or suspension</li>
              </ul>

              <h2>7. Limitation of Liability</h2>
              <p>
                Synthetic Build's liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Issues arising from third-party services or platforms</li>
                <li>Delays caused by factors outside our control</li>
              </ul>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate a project agreement with written notice. Upon termination:
              </p>
              <ul>
                <li>Client is responsible for payment of work completed</li>
                <li>We will deliver all completed work and assets</li>
                <li>Intellectual property rights transfer according to payment status</li>
              </ul>

              <h2>9. Confidentiality</h2>
              <p>
                We maintain confidentiality of your business information and project details. 
                We will not share sensitive information with third parties without your consent, 
                except as required by law.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Continued use of our services constitutes acceptance of 
                updated terms.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> hello@syntheticbuild.com<br />
                <strong>Address:</strong> Chicago, IL
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  These terms constitute the entire agreement between you and Synthetic Build regarding 
                  our services. If any provision is found to be unenforceable, the remaining provisions 
                  will continue in full force and effect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 