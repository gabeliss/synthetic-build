import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      name: "Haircut",
      description: "A classic haircut tailored to your style and preferences.",
      price: "$40 - $50",
    },
    {
      name: "Shave",
      description: "Traditional hot towel straight razor shave for the smoothest finish.",
      price: "$50 - $60",
    },
    {
      name: "Head Shave",
      description: "Complete head shave with straight razor for a clean, smooth look.",
      price: "$50 - $60",
    },
    {
      name: "Beard Trim",
      description: "Shape and maintain your beard for a well-groomed appearance.",
      price: "$25 - $35",
    },
    {
      name: "Beard Trim w/Razor",
      description: "Precision beard trim with straight razor detailing for clean lines.",
      price: "$40 - $50",
    },
    {
      name: "Precision Haircut",
      description: "Detailed haircut with extra attention to detail and styling.",
      price: "$55 - $65",
    },
    {
      name: "Child Haircut (under 13)",
      description: "Haircuts specially designed for our younger clients.",
      price: "$35 - $45",
    },
    {
      name: "Student Haircut (with valid ID)",
      description: "Discounted haircuts for students with valid identification.",
      price: "$35 - $45",
    },
    {
      name: "Senior Citizens (over 65)",
      description: "Discounted haircuts for our senior clients.",
      price: "$35 - $45",
    },
    {
      name: "Gray Blending",
      description: "Subtle color service to reduce the appearance of gray hair.",
      price: "$40 - $50",
    },
    {
      name: "Cleanup/Lineup",
      description: "Quick service to maintain your haircut between full appointments.",
      price: "$25 - $35",
    },
  ]

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At State Street Barbers, we offer a range of premium grooming services tailored to your individual style and
          needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="font-semibold text-lg">{service.price}</p>
            </CardContent>
            <CardFooter>
              <Link
                href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Experience Our Services?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Book your appointment today and let our expert barbers take care of all your grooming needs.
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

