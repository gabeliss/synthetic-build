import Hero from "@/components/hero"
import Examples from "@/components/examples"
import HowItWorks from "@/components/how-it-works"
import WhyUs from "@/components/why-us"
import Founder from "@/components/founder"
import Pricing from "@/components/pricing"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <>
      <Hero />
      <Examples />
      <HowItWorks />
      <WhyUs />
      <Founder />
      <Pricing />
      <ContactForm />
    </>
  )
}