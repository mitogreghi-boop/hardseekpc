"use client"

import React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Heart,
  User,
  Star,
  TrendingDown,
  ExternalLink,
  Zap,
  ChevronLeft,
  ChevronRight,
  Shield,
  BarChart3,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { BannerCarousel } from "./components/banner-carousel" // Import the new component

export default function HomePage() {
  const searchInputRef = useRef<HTMLInputElement>(null) // Keep searchInputRef
  const categoriesScrollRef = useRef<HTMLDivElement>(null) // Ref for categories scroll
  const [isDarkMode, setIsDarkMode] = useState(true) // Modo oscuro por defecto
  const [isSearchReady, setIsSearchReady] = useState(false) // Keep isSearchReady state

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Function to scroll categories
  const scrollCategories = (direction: "left" | "right") => {
    if (categoriesScrollRef.current) {
      const scrollAmount = categoriesScrollRef.current.clientWidth / 2 // Scroll half the visible width
      categoriesScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Re-add useEffect for search bar focus
  React.useEffect(() => {
    const focusSearch = () => {
      if (searchInputRef.current) {
        searchInputRef.current.focus()
        searchInputRef.current.setSelectionRange(0, 0)
      }
    }

    focusSearch()

    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("button") && !target.closest("a") && !target.closest("input") && !target.closest("select")) {
        setTimeout(focusSearch, 10)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(focusSearch, 100)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    setTimeout(() => setIsSearchReady(true), 500)

    return () => {
      document.removeEventListener("click", handleDocumentClick)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const allFeaturedDeals = [
    {
      id: 1,
      name: "LG UltraGear 27GP850-B",
      category: "Monitor Gaming",
      lowestPrice: 649999,
      highestPrice: 899999,
      savings: 250000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 1247,
      storesFound: 8,
      bestStore: "Compragamer",
      specs: ["27'' QHD", "165Hz", "1ms", "G-Sync"],
    },
    {
      id: 2,
      name: "Kingston FURY Beast DDR4",
      category: "Memoria RAM",
      lowestPrice: 149999,
      highestPrice: 189999,
      savings: 40000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 892,
      storesFound: 12,
      bestStore: "Gezatek",
      specs: ["32GB Kit", "3200MHz", "CL16", "RGB"],
    },
    {
      id: 3,
      name: "AMD Ryzen 7 7800X3D",
      category: "Procesador",
      lowestPrice: 649999,
      highestPrice: 749999,
      savings: 100000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 2156,
      storesFound: 15,
      bestStore: "Compragamer",
      specs: ["8 Cores", "16 Threads", "5.0GHz", "AM5"],
    },
    {
      id: 4,
      name: "NVIDIA RTX 4070 Ti SUPER",
      category: "Tarjeta Gráfica",
      lowestPrice: 899999,
      highestPrice: 1199999,
      savings: 300000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 1834,
      storesFound: 18,
      bestStore: "Fullh4rd",
      specs: ["16GB GDDR6X", "2610MHz", "DLSS 3", "Ray Tracing"],
    },
    {
      id: 5,
      name: "Corsair K70 RGB MK.2",
      category: "Teclado Mecánico",
      lowestPrice: 199999,
      highestPrice: 249999,
      savings: 50000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 923,
      storesFound: 9,
      bestStore: "Gezatek",
      specs: ["Cherry MX Red", "RGB", "Full Size", "USB-C"],
    },
    {
      id: 6,
      name: "Logitech G Pro X Superlight",
      category: "Mouse Gaming",
      lowestPrice: 156999,
      highestPrice: 189999,
      savings: 33000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 2847,
      storesFound: 7,
      bestStore: "MercadoLibre", // This one is not a partner store
      specs: ["25,600 DPI", "Wireless", "63g", "70h batería"],
    },
    {
      id: 7,
      name: "Samsung 980 PRO 2TB",
      category: "SSD NVMe",
      lowestPrice: 249999,
      highestPrice: 299999,
      savings: 50000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 1456,
      storesFound: 11,
      bestStore: "Venex",
      specs: ["2TB", "7000 MB/s", "PCIe 4.0", "5 años garantía"],
    },
    {
      id: 8,
      name: "HyperX Cloud II",
      category: "Auriculares Gaming",
      lowestPrice: 89999,
      highestPrice: 119999,
      savings: 30000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviews: 3421,
      storesFound: 14,
      bestStore: "Fullh4rd",
      specs: ["7.1 Surround", "Micrófono", "USB", "Multiplataforma"],
    },
  ]

  const partnerStores = [
    "Compragamer",
    "Venex",
    "Gezatek",
    "Fullh4rd",
    "Maximus",
    "Libreopcion",
    "Mexx",
    "Logg",
    "PC Arts",
    "Diamond System",
    "Necxus",
    "Hardgamers",
  ]

  // Filter featuredDeals to only include products from partner stores
  const featuredDeals = allFeaturedDeals.filter((product) => partnerStores.includes(product.bestStore))

  // Categories for the desktop layout (large card + 2x3 grid)
  const desktopCategoriesGrid = [
    { name: "PROCESADORES", href: "/procesadores", image: "/placeholder.svg?height=200&width=300&text=AMD+Ryzen+CPU" },
    { name: "MEMORIAS RAM", href: "/memorias-ram", image: "/placeholder.svg?height=200&width=300&text=DDR5+RGB+RAM" },
    { name: "MONITORES", href: "/monitores", image: "/placeholder.svg?height=200&width=300&text=Gaming+Monitor+144Hz" },
    {
      name: "MOTHERBOARDS",
      href: "/motherboards",
      image: "/placeholder.svg?height=200&width=300&text=Gaming+Motherboard",
    },
    { name: "GABINETES", href: "/gabinetes", image: "/placeholder.svg?height=200&width=300&text=RGB+Gaming+Case" },
    { name: "FUENTES", href: "/fuentes", image: "/placeholder.svg?height=200&width=300&text=Modular+PSU+80+" },
  ]

  // All categories for mobile horizontal scroll
  const mobileCategories = [
    { name: "ARMA TU PC", href: "/arma-tu-pc", image: "/placeholder.svg?height=160&width=256&text=PC+Builder" },
    { name: "PROCESADORES", href: "/procesadores", image: "/placeholder.svg?height=128&width=192&text=AMD+Ryzen" },
    { name: "MOTHERBOARDS", href: "/motherboards", image: "/placeholder.svg?height=128&width=192&text=Motherboard" },
    { name: "MEMORIAS RAM", href: "/memorias-ram", image: "/placeholder.svg?height=128&width=192&text=DDR5+RAM" },
    { name: "GABINETES", href: "/gabinetes", image: "/placeholder.svg?height=128&width=192&text=Gaming+Case" },
    { name: "FUENTES", href: "/fuentes", image: "/placeholder.svg?height=128&width=192&text=PSU+80+" },
    { name: "SSD", href: "/ssd", image: "/placeholder.svg?height=128&width=192&text=NVMe+SSD" },
    { name: "MONITORES", href: "/monitores", image: "/placeholder.svg?height=128&width=192&text=Gaming+Monitor" },
  ]

  const banners = [
    {
      id: "hardseek-banner",
      image: "/images/banner-hardseek.jpg",
      alt: "HardSeek - La plataforma de búsqueda de precios preferida por gamers",
      link: "https://hardseek.com",
    },
    {
      id: "beings-banner",
      image: "/images/banner-beings.png",
      alt: "Beings Geek Shop - Equipos y Accesorios Gamer",
      link: "https://beings.com.ar",
    },
    {
      id: "slotone-banner",
      image: "/images/banner-slotone.jpg",
      alt: "Slot One - Todo para tu PC Gamer",
      link: "https://slot-one.com.ar",
    },
    {
      id: "gezatek-banner",
      image: "/images/banner-gezatek.jpg",
      alt: "Gezatek - El mejor asesoramiento",
      link: "https://gezatek.com.ar",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`py-2 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-orange-600 to-orange-500"
            : "bg-gradient-to-r from-orange-500 to-orange-400"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-center space-x-2 text-sm font-semibold ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Comparamos precios en {partnerStores.length}+ tiendas • Actualización en tiempo real</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 ${
          isDarkMode ? "border-gray-800 bg-[#0f0f0f]/95" : "border-gray-200 bg-white/95"
        }`}
      >
        <div className="w-full px-4 py-3">
          {/* Top Row - Logo, Search (centered), Icons */}
          <div className="flex items-center justify-between gap-4 mb-3">
            {/* Logo - Far left */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/hardseek-logo.png"
                alt="HardSeek - Cotiza, Compara, Ahorra"
                width={400}
                height={100}
                className="h-12 md:h-14 w-[180px] md:w-[240px] object-contain"
                priority
              />
            </Link>

            {/* Desktop Search Bar - Centered and wider */}
            <div className="relative hidden md:block flex-1 max-w-2xl mx-auto">
              <Input
                ref={searchInputRef}
                placeholder="Buscar..."
                className={`pl-4 pr-10 w-full h-10 border rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                }`}
                autoComplete="off"
                spellCheck="false"
              />
              <button className={`absolute right-0 top-0 h-full px-3 rounded-r-lg transition-colors ${
                isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              }`}>
                <Search className={`w-5 h-5 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
              </button>
            </div>

            {/* Icons: Theme Toggle, Favorites, User Account */}
            <div className="flex items-center space-x-1 shrink-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-500/10"
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`rounded-lg relative transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-500/10"
                }`}
              >
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
                  3
                </Badge>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className={`rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-orange-400 hover:bg-orange-500/10"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-500/10"
                }`}
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden w-full mt-2">
            <div className="relative">
              <Input
                placeholder="Buscar..."
                className={`pl-4 pr-10 w-full h-10 border rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-orange-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500"
                }`}
                autoComplete="off"
                spellCheck="false"
              />
              <button className={`absolute right-0 top-0 h-full px-3 rounded-r-lg transition-colors ${
                isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
              }`}>
                <Search className={`w-5 h-5 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
              </button>
            </div>
          </div>

          {/* Bottom Row - Navigation - Centered */}
          <div className="flex items-center justify-center">
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors ${
                  isDarkMode ? "text-white hover:text-orange-400" : "text-gray-900 hover:text-orange-500"
                }`}
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className={`font-medium transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Productos
              </Link>
              <Link
                href="/pc-armadas"
                className={`font-medium transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"
                }`}
              >
                PCs Armadas
              </Link>
              <Link
                href="/ofertas"
                className={`font-medium transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Ofertas
              </Link>
              <Link
                href="/contacto"
                className={`font-medium transition-colors ${
                  isDarkMode ? "text-gray-400 hover:text-orange-400" : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Contacto
              </Link>
            </nav>

            {/* Removed the mobile menu button (3 bars) */}
            {/* <Button className="lg:hidden" variant="ghost" size="icon">
              <Menu className={`w-5 h-5 transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-600"}`} />
            </Button> */}


          </div>
        </div>
      </header>

      {/* Banner Carousel */}
      <BannerCarousel banners={banners} />

      {/* Categories */}
      <section className={`py-12 transition-colors duration-300 ${isDarkMode ? "bg-[#f5f5f5]" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-2xl font-bold transition-colors ${isDarkMode ? "text-gray-800" : "text-gray-900"}`}>
              Explorá nuestras{" "}
              <span className={`font-normal ${isDarkMode ? "text-gray-600" : "text-gray-600"}`}>categorías</span>
            </h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCategories("left")} // Add onClick for left arrow
                className={`border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg shadow-sm transition-colors duration-300 ${
                  isDarkMode ? "bg-white" : "bg-white"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollCategories("right")} // Add onClick for right arrow
                className={`border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg shadow-sm transition-colors duration-300 ${
                  isDarkMode ? "bg-white" : "bg-white"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-5 gap-4">
              {/* Featured Category - ARMA TU PC (spans 2 columns and 2 rows) */}
              <Link href="/arma-tu-pc" className="col-span-2 row-span-2">
                <Card className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full rounded-2xl">
                  <div className="absolute inset-0">
                    <Image
                      src="/placeholder.svg?height=300&width=800&text=PC+Builder+Components"
                      alt="Arma tu PC"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white font-bold text-3xl tracking-wider drop-shadow-lg">ARMA TU PC</h3>
                    </div>
                  </div>
                </Card>
              </Link>

              {/* Smaller Categories (2x3 grid) */}
              {desktopCategoriesGrid.map((category, index) => (
                <Link key={index} href={category.href} className="col-span-1">
                  <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group h-48 rounded-2xl">
                    <div className="absolute inset-0">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex items-end justify-center p-6">
                      <h3 className="text-white font-bold text-lg tracking-wider drop-shadow-lg text-center">
                        {category.name}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Horizontal Scroll */}
          <div className="md:hidden">
            <div ref={categoriesScrollRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {mobileCategories.map((category, index) => (
                <Link key={index} href={category.href} className="flex-shrink-0">
                  <Card
                    className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group rounded-xl ${
                      category.name === "ARMA TU PC" ? "w-64 h-40" : "w-40 h-28"
                    }`}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex items-end justify-center p-3">
                      <h3
                        className={`text-white font-bold tracking-wider drop-shadow-lg text-center ${
                          category.name === "ARMA TU PC" ? "text-xl" : "text-sm"
                        }`}
                      >
                        {category.name}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div
              className={`w-2 h-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-300" : "bg-gray-400"}`}
            ></div>
            <div
              className={`w-2 h-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-300" : "bg-gray-400"}`}
            ></div>
            <div
              className={`w-2 h-2 rounded-full transition-colors ${isDarkMode ? "bg-gray-300" : "bg-gray-400"}`}
            ></div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="py-0">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-3 px-4">
          <div className="container mx-auto">
            <h2 className="text-white text-xl font-bold tracking-wide text-center">
              PRODUCTOS DESTACADOS
            </h2>
          </div>
        </div>
        <div className={`py-8 transition-colors duration-300 ${isDarkMode ? "bg-[#0a0a0a]" : "bg-white"}`}>
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDeals.slice(0, 4).map((product) => (
              <Card
                key={product.id}
                className={`border hover:border-orange-500/50 transition-all duration-300 group overflow-hidden rounded-xl shadow-lg hover:shadow-orange-500/10 ${
                  isDarkMode ? "bg-[#1a1a1a] border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover"
                  />

                  <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                    <TrendingDown className="w-3 h-3 inline mr-1" />
                    MEJOR PRECIO
                  </div>

                  <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold rounded-lg">
                    -${(product.savings / 1000).toFixed(0)}K
                  </Badge>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <Badge variant="outline" className="text-xs text-orange-400 border-orange-400 mb-2 rounded-lg">
                      {product.category}
                    </Badge>
                    <h3
                      className={`font-semibold group-hover:text-orange-400 transition-colors text-sm line-clamp-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                        <span className={`text-xs transition-colors ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {product.rating}
                        </span>
                      </div>
                      <span className={`text-xs transition-colors ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {product.specs.slice(0, 2).map((spec, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`text-xs rounded-lg transition-colors ${
                          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-orange-400">
                          ${(product.lowestPrice / 1000).toFixed(0)}K
                        </div>
                        <div
                          className={`text-xs line-through transition-colors ${
                            isDarkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          ${(product.highestPrice / 1000).toFixed(0)}K
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          en {product.bestStore}
                        </div>
                        <div className={`text-xs transition-colors ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
                          {product.storesFound} tiendas
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold rounded-xl shadow-lg"
                      size="sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Comparar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* BAJARON DE PRECIO */}
      <section className="py-0">
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-3 px-4">
          <div className="container mx-auto">
            <h2 className="text-white text-xl font-bold tracking-wide text-center">
              BAJARON DE PRECIO
            </h2>
          </div>
        </div>
        <div className={`py-8 transition-colors duration-300 ${isDarkMode ? "bg-[#0a0a0a]" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDeals.slice(4, 8).map((product) => (
                <Card
                  key={product.id}
                  className={`border hover:border-orange-500/50 transition-all duration-300 group overflow-hidden rounded-xl shadow-lg hover:shadow-orange-500/10 ${
                    isDarkMode ? "bg-[#1a1a1a] border-gray-700" : "bg-white border-gray-200"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />

                    <Badge className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold rounded-lg">
                      -{Math.round((product.savings / product.highestPrice) * 100)}% OFF
                    </Badge>

                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3
                        className={`font-semibold group-hover:text-orange-400 transition-colors text-sm line-clamp-2 ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        {product.bestStore}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-green-500">
                          ${product.lowestPrice.toLocaleString()}
                        </div>
                        <div
                          className={`text-xs line-through ${
                            isDarkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          ${product.highestPrice.toLocaleString()}
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className={`rounded-full ${isDarkMode ? "text-gray-400 hover:text-orange-400" : "text-gray-500 hover:text-orange-500"}`}
                      >
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t py-8 transition-colors duration-300 ${
          isDarkMode ? "bg-[#0a0a0a] border-gray-800" : "bg-gray-900 border-gray-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-black">H</span>
                  </div>
                </div>
                <div>
                  <span className="text-lg font-bold text-white">HardSeek</span>
                  <div className="text-xs text-orange-400 font-medium">METABUSCADOR</div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm">
                Metabuscador de hardware gaming de Argentina. Precios en tiempo real.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Categorías</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Procesadores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Tarjetas Gráficas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Periféricos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Notebooks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Herramientas</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Comparador
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Alertas de Precio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Historial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Soporte</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Tiendas Partner
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Agregar Tienda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 HardSeek. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
