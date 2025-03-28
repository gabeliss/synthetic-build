import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, BeakerIcon as Beard, RadarIcon as Razor } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://cdn11.bigcommerce.com/s-h7l2pcerei/images/stencil/original/carousel/7/ssb_oldtown_interiors_main-3__74798.jpg?c=2"
          alt="State Street Barbers Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Premium Barbershop Experience</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
            Crafting confidence through exceptional grooming since 2003
          </p>
          <Link
            href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#c8102e] hover:bg-[#a50d25] text-white">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to State Street Barbers</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At State Street Barbers, we combine traditional barbering techniques with modern styles to deliver an
            exceptional grooming experience. Our skilled barbers are dedicated to helping you look and feel your best.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#c8102e] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Scissors className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Haircuts</CardTitle>
                <CardDescription>Precision cuts tailored to your style</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  Our expert barbers will craft the perfect haircut to match your face shape and personal style.
                </p>
                <p className="font-semibold text-lg">$40 - $65</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#c8102e] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Beard className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Beard Trims</CardTitle>
                <CardDescription>Shape and style your facial hair</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  Get your beard shaped, lined up, and looking its best with our professional beard trimming services.
                </p>
                <p className="font-semibold text-lg">$25 - $50</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-[#c8102e] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Razor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Shaves</CardTitle>
                <CardDescription>Classic straight razor shaves</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">
                  Experience the luxury of a traditional hot towel straight razor shave for the smoothest finish
                  possible.
                </p>
                <p className="font-semibold text-lg">$50 - $60</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link
                  href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Visit one of our five premium barbershops located throughout Chicago.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/locations/river-north" className="group">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-rivernorth-1.jpg"
                alt="River North Location"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">River North</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/locations/old-town" className="group">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-oldtown-interiors-main-2.jpg"
                alt="Old Town Location"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Old Town</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/locations/lincoln-park" className="group">
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lincolnpark-temp-image.jpg"
                alt="Lincoln Park Location"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Lincoln Park</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link href="/locations">
            <Button variant="outline" className="border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white">
              View All Locations
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Premium Grooming Experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the State Street Barbers difference.
          </p>
          <Link
            href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#c8102e] hover:bg-[#a50d25] text-white">
              Book an Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

