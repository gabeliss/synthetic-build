"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn11.bigcommerce.com/s-h7l2pcerei/images/stencil/350x125/statestbarbers_logo_large_1503586234__37961.original.jpg"
            alt="State Street Barbers Logo"
            width={175}
            height={62}
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[#c8102e]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="https://cdn11.bigcommerce.com/s-h7l2pcerei/images/stencil/350x125/statestbarbers_logo_large_1503586234__37961.original.jpg"
                    alt="State Street Barbers Logo"
                    width={150}
                    height={53}
                  />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium py-2 transition-colors hover:text-[#c8102e]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6">
                <Link
                  href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

