"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Heart,
  ExternalLink,
  TrendingDown,
  Cpu,
  Monitor,
  Mouse,
  Keyboard,
  Headphones,
  HardDrive,
  MemoryStick,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComponentsPage() {
  const categories = [
    { name: "Procesadores", icon: Cpu, count: 150 },
    { name: "Tarjetas Gráficas", icon: Monitor, count: 80 },
    { name: "Periféricos", icon: Mouse, count: 200 },
    { name: "Teclados", icon: Keyboard, count: 90 },
    { name: "Audio", icon: Headphones, count: 120 },
    { name: "Almacenamiento", icon: HardDrive, count: 100 },
    { name: "Memoria RAM", icon: MemoryStick, count: 60 },
    { name: "Fuentes", icon: Zap, count: 70 },
  ]

  const products = [
    {
      id: 1,
      name: "AMD Ryzen 9 7900X",
      category: "Procesador",
      lowestPrice: 649999,
      highestPrice: 749999,
      savings: 100000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 2156,
      storesFound: 15,
      bestStore: "Compragamer",
      specs: ["12 Cores", "24 Threads", "5.6GHz", "AM5"],
    },
    {
      id: 2,
      name: "NVIDIA RTX 4080 SUPER",
      category: "Tarjeta Gráfica",
      lowestPrice: 1299999,
      highestPrice: 1499999,
      savings: 200000,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 1834,
      storesFound: 18,
      bestStore: "Fullh4rd",
      specs: ["16GB GDDR6X", "2550MHz", "DLSS 3", "Ray Tracing"],
    },
    // Add more products as needed
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HardSeek</span>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar componentes..."
                  className="pl-10 w-80 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Categorías</h3>
              <div className="space-y-2">
                {categories.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={index}
                      href={`/components/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-white">{category.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{category.count}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Filtros</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Precio</label>
                  <div className="flex space-x-2">
                    <Input placeholder="Min" className="bg-gray-900 border-gray-700 text-white text-sm" />
                    <Input placeholder="Max" className="bg-gray-900 border-gray-700 text-white text-sm" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Marca</label>
                  <div className="space-y-2">
                    {["AMD", "Intel", "NVIDIA", "Corsair", "Logitech"].map((brand) => (
                      <label key={brand} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-600 bg-gray-800" />
                        <span className="text-sm text-gray-300">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-white">Todos los Componentes</h1>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Grid className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-black px-2 py-1 rounded text-xs font-bold">
                      <TrendingDown className="w-3 h-3 inline mr-1" />
                      MEJOR PRECIO
                    </div>
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                      -${(product.savings / 1000).toFixed(0)}K
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <Badge variant="outline" className="text-xs text-blue-400 border-blue-400 mb-2">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-white">{product.rating}</span>
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.specs.slice(0, 2).map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                          {spec}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-lg font-bold text-green-400">
                          ${(product.lowestPrice / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-gray-500 line-through">
                          ${(product.highestPrice / 1000).toFixed(0)}K
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">en {product.bestStore}</div>
                        <div className="text-xs text-gray-500">{product.storesFound} tiendas</div>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Comparar Precios
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
