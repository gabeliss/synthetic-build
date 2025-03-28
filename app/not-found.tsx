import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-[#c8102e] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the page you were looking for. It might have been moved or doesn't exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Return Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  )
}

