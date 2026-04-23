import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Star, Heart, ExternalLink, TrendingDown, Zap, ArrowUpDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SearchPage() {
  const searchResults = [
    {
      id: 1,
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
      id: 2,
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
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm">
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
                  placeholder="Buscar productos..."
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Resultados de Búsqueda</h1>
            <p className="text-gray-400">{searchResults.length} productos encontrados</p>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Ordenar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((product) => (
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

              <CardContent className="p-4 space-y-3">
                <div>
                  <Badge variant="outline" className="text-xs text-blue-400 border-blue-400 mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-white">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.specs.slice(0, 2).map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-800 text-gray-300">
                      {spec}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
