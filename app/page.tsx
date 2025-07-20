import Hero from "@/components/hero"
import Examples from "@/components/examples"
import HowItWorks from "@/components/how-it-works"
import WhyUs from "@/components/why-us"
import PricingComparison from "@/components/pricing-comparison"
import Founder from "@/components/founder"
import ContactForm from "@/components/contact-form"
import { Suspense } from "react"

export default function Home({
  searchParams,
}: {
  searchParams: { plan?: string; addon?: string }
}) {
  return (
    <>
      <Hero />
      <Examples />
      <HowItWorks />
      <WhyUs />
      <PricingComparison />
      <Founder />
      <ContactForm plan={searchParams.plan} addon={searchParams.addon} />
    </>
  )
}