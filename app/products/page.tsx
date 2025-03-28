import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  const categories = [
    "All",
    "Accessories",
    "Aftershave",
    "Bath and Body",
    "Beard Care",
    "Fragrance",
    "Gift Sets",
    "Hairbrushes and Combs",
    "Hardware",
    "Haircare",
    "Manicure",
    "Preshave",
    "Shaving Products",
    "Travel",
  ]

  const products = [
    {
      name: "Premium Beard Oil",
      category: "Beard Care",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Nourishing beard oil with argan and jojoba oils to soften and condition facial hair.",
    },
    {
      name: "Sandalwood Shaving Cream",
      category: "Shaving Products",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Rich, luxurious shaving cream with sandalwood scent for a smooth shave.",
    },
    {
      name: "Wooden Beard Comb",
      category: "Accessories",
      price: "$14.99",
      image:
        "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted wooden comb designed specifically for beard grooming.",
    },
    {
      name: "Premium Hair Pomade",
      category: "Haircare",
      price: "$22.99",
      image:
        "https://images.unsplash.com/photo-1597854710119-3f13e1296424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Medium-hold pomade for classic styles with a natural finish.",
    },
    {
      name: "Straight Razor Kit",
      category: "Hardware",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Professional straight razor with strop and maintenance accessories.",
    },
    {
      name: "Aftershave Balm",
      category: "Aftershave",
      price: "$18.99",
      image:
        "https://images.unsplash.com/photo-1594145407217-343d45196a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Soothing aftershave balm to reduce irritation and moisturize skin.",
    },
    {
      name: "Gentleman's Cologne",
      category: "Fragrance",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Sophisticated cologne with notes of cedar, bergamot, and leather.",
    },
    {
      name: "Barber's Gift Set",
      category: "Gift Sets",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1581513184241-0d764950860b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Complete grooming set including pomade, beard oil, and cologne.",
    },
    {
      name: "Premium Boar Bristle Brush",
      category: "Hairbrushes and Combs",
      price: "$34.99",
      image:
        "https://images.unsplash.com/photo-1635368570690-7cb3e069ea54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Professional-grade boar bristle brush for styling and hair health.",
    },
    {
      name: "Exfoliating Face Scrub",
      category: "Bath and Body",
      price: "$16.99",
      image:
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Gentle exfoliating scrub to remove dead skin and prevent ingrown hairs.",
    },
    {
      name: "Nail Care Kit",
      category: "Manicure",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Complete nail care set with clippers, file, and cuticle tools.",
    },
    {
      name: "Pre-Shave Oil",
      category: "Preshave",
      price: "$17.99",
      image:
        "https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Conditioning oil to prepare skin and hair for a closer, smoother shave.",
    },
    {
      name: "Travel Grooming Kit",
      category: "Travel",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      description: "Compact travel kit with essential grooming tools and TSA-approved containers.",
    },
  ]

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Barber Products</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore our curated selection of premium grooming products to maintain your style at home.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-[#c8102e] data-[state=active]:text-white"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => category === "All" || product.category === category)
                .map((product, index) => (
                  <Card key={index} className="border-none shadow-lg overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                      <p className="text-gray-700 mb-4">{product.description}</p>
                      <p className="font-semibold text-lg">{product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#c8102e] hover:bg-[#a50d25] text-white">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

