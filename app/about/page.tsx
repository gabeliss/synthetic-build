import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About State Street Barbers</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Crafting confidence through exceptional grooming since 2003.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              State Street Barbers was founded in 2003 with a simple mission: to provide exceptional grooming services
              in a comfortable, welcoming environment. What began as a single barbershop in Chicago's River North
              neighborhood has grown into five premium locations throughout the city.
            </p>
            <p>
              Our founder, a master barber with over 20 years of experience, recognized the need for a barbershop that
              combined traditional techniques with modern styles. He assembled a team of skilled barbers who shared his
              passion for precision cuts and personalized service.
            </p>
            <p>
              Over the years, we've built a reputation for excellence, attracting clients who appreciate our attention
              to detail and commitment to quality. Today, State Street Barbers continues to set the standard for premium
              grooming services in Chicago.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://cdn11.bigcommerce.com/s-h7l2pcerei/images/stencil/original/carousel/7/ssb_oldtown_interiors_main-3__74798.jpg?c=2"
            alt="State Street Barbers Interior"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
        <div className="bg-[#f4f4f4] p-8 rounded-lg text-center">
          <p className="text-xl italic">
            "To provide exceptional grooming services that help our clients look and feel their best, delivered by
            skilled barbers in a comfortable, welcoming environment."
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Skilled Barbers</h3>
            <p className="text-gray-700">
              Our team consists of experienced barbers who undergo rigorous training to ensure they deliver consistent,
              high-quality service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Premium Experience</h3>
            <p className="text-gray-700">
              From the moment you walk in, you'll enjoy a premium experience with comfortable chairs, quality products,
              and attentive service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Attention to Detail</h3>
            <p className="text-gray-700">
              We take pride in our precision cuts and meticulous attention to detail, ensuring you leave looking and
              feeling your best.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Book your appointment today and discover why State Street Barbers is Chicago's premier barbershop.
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
    </div>
  )
}

