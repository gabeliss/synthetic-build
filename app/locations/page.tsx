import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"

export default function LocationsPage() {
  const locations = [
    {
      name: "River North",
      address: "1 E Delaware Pl, Chicago, IL 60611",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(312) 787-4448",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-rivernorth-1.jpg",
      slug: "river-north",
    },
    {
      name: "Old Town",
      address: "1542 N Halsted St, Chicago, IL 60642",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(312) 787-7044",
      image:
        "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-oldtown-interiors-main-2.jpg",
      slug: "old-town",
    },
    {
      name: "Lincoln Park",
      address: "2522 N Clark St, Chicago, IL 60614",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(773) 348-8800",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lincolnpark-temp-image.jpg",
      slug: "lincoln-park",
    },
    {
      name: "Lakeview",
      address: "3523 N Southport Ave, Chicago, IL 60657",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(773) 975-9800",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lakeview-2.jpg",
      slug: "lakeview",
    },
    {
      name: "The Loop",
      address: "171 N Wells St, Chicago, IL 60606",
      hours: "Mon-Fri: 8am-7pm | Sat: 9am-5pm | Sun: Closed",
      phone: "(312) 551-0100",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lakeview-2.jpg",
      slug: "the-loop",
    },
  ]

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Visit one of our five premium barbershops located throughout Chicago.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location) => (
          <Card key={location.name} className="border-none shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={location.image || "/placeholder.svg"}
                alt={`${location.name} Location`}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{location.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#c8102e] mr-2 mt-0.5" />
                  <p>{location.address}</p>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#c8102e] mr-2 mt-0.5" />
                  <p>{location.hours}</p>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#c8102e] mr-2 mt-0.5" />
                  <p>{location.phone}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/locations/${location.slug}`}>
                <Button
                  variant="outline"
                  className="border-[#c8102e] text-[#c8102e] hover:bg-[#c8102e] hover:text-white"
                >
                  View Details
                </Button>
              </Link>
              <Link
                href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#c8102e] hover:bg-[#a50d25] text-white">Book Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

