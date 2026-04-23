import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HardSeek - Metabuscador de Hardware Gaming",
  description:
    "Encuentra los mejores precios en hardware gaming. Comparamos precios en tiempo real en las principales tiendas de Argentina.",
  keywords: "hardware gaming, metabuscador, precios, componentes PC, ofertas gaming, Argentina",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
