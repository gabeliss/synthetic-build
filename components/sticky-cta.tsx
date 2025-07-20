"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, X } from "lucide-react"
import Link from "next/link"

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show after scrolling 50% of the page
      if (scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight - 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isDismissed || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-900">
            Ready to see your transformation?
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <Button asChild className="w-full">
                      <Link href="/#contact">
            Claim Your Free Preview
            <ArrowUp className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
} 