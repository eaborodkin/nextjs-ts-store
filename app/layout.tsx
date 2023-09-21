import './globals.css'
import type { Metadata } from 'next'
import {Footer, NavBar} from "@/components";

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the World.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
