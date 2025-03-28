import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone } from "lucide-react"
import { notFound } from "next/navigation"

interface LocationPageProps {
  params: {
    slug: string
  }
}

export default function LocationPage({ params }: LocationPageProps) {
  const locations = [
    {
      name: "River North",
      address: "1 E Delaware Pl, Chicago, IL 60611",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(312) 787-4448",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-rivernorth-1.jpg",
      slug: "river-north",
      description:
        "Our River North location offers a premium barbershop experience in the heart of downtown Chicago. With a team of skilled barbers and a comfortable, upscale environment, we provide exceptional haircuts, beard trims, and shaves to help you look and feel your best.",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2299877573825!2d-87.62979492346848!3d41.90096397026881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd351f8c77c2b%3A0x7f7c0c31a3a7a679!2s1%20E%20Delaware%20Pl%2C%20Chicago%2C%20IL%2060611!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
    {
      name: "Old Town",
      address: "1542 N Halsted St, Chicago, IL 60642",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(312) 787-7044",
      image:
        "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-oldtown-interiors-main-2.jpg",
      slug: "old-town",
      description:
        "Located in the historic Old Town neighborhood, our barbershop combines traditional barbering techniques with modern styles. Our experienced team is dedicated to providing exceptional service in a relaxed, welcoming atmosphere.",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6553066361394!2d-87.64968492346797!3d41.91063396957764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a9b4f%3A0x7a6b76eab8aeb74f!2s1542%20N%20Halsted%20St%2C%20Chicago%2C%20IL%2060642!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
    {
      name: "Lincoln Park",
      address: "2522 N Clark St, Chicago, IL 60614",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(773) 348-8800",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lincolnpark-temp-image.jpg",
      slug: "lincoln-park",
      description:
        "Our Lincoln Park location offers a premium barbershop experience in one of Chicago's most vibrant neighborhoods. With a focus on precision cuts and personalized service, our skilled barbers will help you achieve your desired look.",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7476098532!2d-87.64512492346723!3d41.92896396824638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2637f9d7%3A0x1b0a7c7f951ffa3c!2s2522%20N%20Clark%20St%2C%20Chicago%2C%20IL%2060614!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
    {
      name: "Lakeview",
      address: "3523 N Southport Ave, Chicago, IL 60657",
      hours: "Mon-Fri: 9am-8pm | Sat: 9am-6pm | Sun: 10am-5pm",
      phone: "(773) 975-9800",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lakeview-2.jpg",
      slug: "lakeview",
      description:
        "Located in the heart of Lakeview, our barbershop provides exceptional grooming services in a comfortable, modern environment. Our team of skilled barbers is committed to helping you look and feel your best with precision cuts and personalized attention.",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.9752098532!2d-87.66512492346723!3d41.94696396824638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3a8a3d7af05%3A0x9e0823d5fd9c6a3e!2s3523%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060657!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
    {
      name: "The Loop",
      address: "171 N Wells St, Chicago, IL 60606",
      hours: "Mon-Fri: 8am-7pm | Sat: 9am-5pm | Sun: Closed",
      phone: "(312) 551-0100",
      image: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/ssb-lakeview-2.jpg",
      slug: "the-loop",
      description:
        "Our Loop location caters to busy professionals in downtown Chicago. With convenient hours and efficient service, we provide premium haircuts and grooming services that help you maintain a polished, professional appearance.",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4476098532!2d-87.63412492346723!3d41.88596396824638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb1da049173%3A0x5f7f65cf4fa99efa!2s171%20N%20Wells%20St%2C%20Chicago%2C%20IL%2060606!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
  ]

  const location = locations.find((loc) => loc.slug === params.slug)

  if (!location) {
    notFound()
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link href="/locations" className="text-[#c8102e] hover:underline mb-4 inline-block">
          &larr; Back to All Locations
        </Link>
        <h1 className="text-4xl font-bold mt-4">{location.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={location.image || "/placeholder.svg"}
              alt={`${location.name} Location`}
              fill
              className="object-cover"
            />
          </div>

          <Card className="border-none shadow-lg mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
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
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Location</h2>
            <p className="text-gray-700">{location.description}</p>
          </div>

          <div className="mb-8">
            <Link
              href="https://na1.meevo.com/CustomerPortal/login?tenantId=200784&locationId=202204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Location & Directions</h2>
          <div className="h-[450px] w-full rounded-lg overflow-hidden">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map to ${location.name} location`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

