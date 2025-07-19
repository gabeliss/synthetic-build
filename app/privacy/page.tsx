import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="prose prose-gray max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, business name</li>
                <li><strong>Business Information:</strong> Website URL, industry, business description</li>
                <li><strong>Project Details:</strong> Requirements, preferences, feedback, and communications</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide website design services and previews</li>
                <li>Communicate with you about projects and services</li>
                <li>Send you updates, newsletters, and marketing materials (with your consent)</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and abuse</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our business (hosting, email, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure hosting and infrastructure</li>
              </ul>

              <h2>5. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar technologies to:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website performance and user experience</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. 
                Disabling cookies may affect website functionality.
              </p>

              <h2>6. Third-Party Services</h2>
              <p>
                We use third-party services that may collect information:
              </p>
              <ul>
                <li><strong>Analytics:</strong> Google Analytics to understand website usage</li>
                <li><strong>Email Marketing:</strong> Mailchimp or similar for newsletters</li>
                <li><strong>Hosting:</strong> Vercel, Netlify, or similar for website hosting</li>
                <li><strong>Forms:</strong> Form handling services for contact forms</li>
              </ul>
              <p>
                These services have their own privacy policies, which we encourage you to review.
              </p>

              <h2>7. Your Rights and Choices</h2>
              <p>
                You have the following rights regarding your personal information:
              </p>
              <ul>
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>

              <h2>8. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul>
                <li>Provide our services and maintain business relationships</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services</li>
              </ul>
              <p>
                When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. 
                We do not knowingly collect personal information from children under 13. 
                If you believe we have collected information from a child under 13, 
                please contact us immediately.
              </p>

              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information 
                in accordance with this privacy policy.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Updating the "Last updated" date</li>
              </ul>
              <p>
                Your continued use of our services after changes become effective constitutes 
                acceptance of the updated policy.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <p>
                <strong>Email:</strong> hello@syntheticbuild.com<br />
                <strong>Address:</strong> Chicago, IL<br />
                <strong>Response Time:</strong> We aim to respond to privacy inquiries within 30 days
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  This privacy policy is effective as of the date listed above and applies to all 
                  information collected by Synthetic Build through our website and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 