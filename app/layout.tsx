import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"

export const metadata: Metadata = {
  title: "Amareke | Creator Distribution Infrastructure",
  description:
    "Create once. Distribute everywhere. Scale what wins. Amareke helps creators and teams generate, repurpose, publish, and learn what works."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
