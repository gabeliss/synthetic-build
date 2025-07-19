import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import logoNoWords from "@/public/logo-no-words.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <Image src={logoNoWords} alt="Synthetic Build" width={64} height={64} /> */}
              <span className="text-xl font-bold">Synthetic Build</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered website design that shows you the finished product before you commit. 
              No more guessing games or endless revisions.
            </p>
            <div className="flex items-center text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:hello@syntheticbuild.com" className="hover:text-white transition-colors">
                hello@syntheticbuild.com
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://calendly.com/syntheticbuild/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
              >
                📅 Schedule a free consultation
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#work" className="text-gray-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Synthetic Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

