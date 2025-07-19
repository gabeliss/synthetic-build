import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StickyCTA from "@/components/sticky-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Synthetic Build - AI-Powered Website Design",
  description: "Get a custom website preview in 48 hours. No commitment, no catch — just see what's possible for your business.",
  icons: {
    icon: '/logo-no-words.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}



import './globals.css'