import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Zap, Check, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ComparePage() {
  const comparisonProducts = [
    {
      id: 1,
      name: "AMD Ryzen 9 7900X",
      category: "Procesador",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 2156,
      lowestPrice: 649999,
      bestStore: "Compragamer",
      specs: {
        cores: "12",
        threads: "24",
        baseClock: "4.7 GHz",
        boostClock: "5.6 GHz",
        socket: "AM5",
        tdp: "170W",
        cache: "76MB",
        architecture: "Zen 4",
      },
      stores: [
        { name: "Compragamer", price: 649999, inStock: true },
        { name: "Venex", price: 679999, inStock: true },
        { name: "Maximus", price: 699999, inStock: true },
        { name: "Fullh4rd", price: 749999, inStock: false },
      ],
    },
    {
      id: 2,
      name: "Intel Core i9-13900K",
      category: "Procesador",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      reviews: 1834,
      lowestPrice: 699999,
      bestStore: "Gezatek",
      specs: {
        cores: "24 (8P+16E)",
        threads: "32",
        baseClock: "3.0 GHz",
        boostClock: "5.8 GHz",
        socket: "LGA1700",
        tdp: "125W",
        cache: "36MB",
        architecture: "Raptor Lake",
      },
      stores: [
        { name: "Gezatek", price: 699999, inStock: true },
        { name: "Fullh4rd", price: 729999, inStock: true },
        { name: "Venex", price: 749999, inStock: false },
        { name: "Compragamer", price: 779999, inStock: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">HardSeek</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Comparar Productos</h1>
          <p className="text-gray-400">Compara especificaciones y precios lado a lado</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {comparisonProducts.map((product) => (
            <Card key={product.id} className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500 text-black">MEJOR PRECIO</Badge>
                </div>
                <CardTitle className="text-white">{product.name}</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Price Comparison */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Precios por Tienda</h3>
                  <div className="space-y-2">
                    {product.stores.map((store, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          index === 0 ? "bg-green-500/10 border border-green-500/30" : "bg-gray-800/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-white font-medium">{store.name}</span>
                          {store.inStock ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <X className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${index === 0 ? "text-green-400" : "text-white"}`}>
                            ${(store.price / 1000).toFixed(0)}K
                          </div>
                          {!store.inStock && <div className="text-xs text-red-400">Sin stock</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Especificaciones</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-700">
                        <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver en {product.bestStore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Comparación Detallada</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900/50 border border-gray-700 rounded-lg">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-white font-semibold">Especificación</th>
                  {comparisonProducts.map((product) => (
                    <th key={product.id} className="text-center p-4 text-white font-semibold">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(comparisonProducts[0].specs).map((spec) => (
                  <tr key={spec} className="border-b border-gray-700">
                    <td className="p-4 text-gray-300 capitalize font-medium">{spec.replace(/([A-Z])/g, " $1")}</td>
                    {comparisonProducts.map((product) => (
                      <td key={product.id} className="p-4 text-center text-white">
                        {product.specs[spec as keyof typeof product.specs]}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-b border-gray-700">
                  <td className="p-4 text-gray-300 font-medium">Mejor Precio</td>
                  {comparisonProducts.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      <div className="text-green-400 font-bold">${(product.lowestPrice / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-gray-400">en {product.bestStore}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
