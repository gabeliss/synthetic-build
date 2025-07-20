import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import logoNoWords from "@/public/logo-no-words.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Brand */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {/* <Image src={logoNoWords} alt="Synthetic Build" width={64} height={64} /> */}
              <span className="text-xl font-bold">Synthetic Build</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered website design that shows you the finished product before you commit. 
              No more guessing games or endless revisions.
            </p>
            <div className="flex items-center justify-center text-gray-400 mb-4">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:gabe@syntheticbuild.com" className="hover:text-white transition-colors">
                gabe@syntheticbuild.com
              </a>
            </div>
            {/* <div>
              <a 
                href="https://calendly.com/syntheticbuild/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
              >
                📅 Schedule a free consultation
              </a>
            </div> */}
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

