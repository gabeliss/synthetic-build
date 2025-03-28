import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="https://cdn11.bigcommerce.com/s-h7l2pcerei/images/stencil/350x125/statestbarbers_logo_large_1503586234__37961.original.jpg"
                alt="State Street Barbers Logo"
                width={175}
                height={62}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-4">Premium barbershop services in Chicago since 2003.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/river-north" className="text-gray-400 hover:text-white">
                  River North
                </Link>
              </li>
              <li>
                <Link href="/locations/old-town" className="text-gray-400 hover:text-white">
                  Old Town
                </Link>
              </li>
              <li>
                <Link href="/locations/lincoln-park" className="text-gray-400 hover:text-white">
                  Lincoln Park
                </Link>
              </li>
              <li>
                <Link href="/locations/lakeview" className="text-gray-400 hover:text-white">
                  Lakeview
                </Link>
              </li>
              <li>
                <Link href="/locations/the-loop" className="text-gray-400 hover:text-white">
                  The Loop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Book an Appointment</h3>
            <p className="text-gray-400 mb-4">Ready for a premium grooming experience? Book your appointment today.</p>
            <Link
              href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8102e] hover:bg-[#a50d25] text-white px-4 py-2 rounded inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} State Street Barbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

