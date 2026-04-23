import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Zap, Cpu, Monitor, HardDrive, MemoryStick } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BuildsPage() {
  const pcBuilds = [
    {
      id: 1,
      name: "Gaming Básico",
      description: "Perfecto para juegos en 1080p",
      price: 899999,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      reviews: 234,
      performance: "1080p High Settings",
      components: {
        cpu: "AMD Ryzen 5 5600",
        gpu: "RTX 4060",
        ram: "16GB DDR4",
        storage: "500GB NVMe SSD",
        motherboard: "B450M",
        psu: "650W 80+ Bronze",
      },
      stores: [
        { name: "Compragamer", price: 899999 },
        { name: "Venex", price: 949999 },
        { name: "Maximus", price: 979999 },
      ],
    },
    {
      id: 2,
      name: "Gaming Pro",
      description: "Ideal para gaming en 1440p",
      price: 1599999,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      reviews: 189,
      performance: "1440p Ultra Settings",
      components: {
        cpu: "AMD Ryzen 7 7700X",
        gpu: "RTX 4070 Ti",
        ram: "32GB DDR5",
        storage: "1TB NVMe SSD",
        motherboard: "B650",
        psu: "750W 80+ Gold",
      },
      stores: [
        { name: "Fullh4rd", price: 1599999 },
        { name: "Compragamer", price: 1649999 },
        { name: "Venex", price: 1699999 },
      ],
    },
    {
      id: 3,
      name: "Gaming Elite",
      description: "Lo mejor para 4K gaming",
      price: 2899999,
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      reviews: 156,
      performance: "4K High Settings",
      components: {
        cpu: "AMD Ryzen 9 7900X",
        gpu: "RTX 4080 SUPER",
        ram: "32GB DDR5",
        storage: "2TB NVMe SSD",
        motherboard: "X670E",
        psu: "850W 80+ Platinum",
      },
      stores: [
        { name: "Gezatek", price: 2899999 },
        { name: "Fullh4rd", price: 2999999 },
        { name: "Compragamer", price: 3099999 },
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
          <h1 className="text-3xl font-bold text-white mb-2">PCs Armadas</h1>
          <p className="text-gray-400">Configuraciones optimizadas para diferentes presupuestos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pcBuilds.map((build) => (
            <Card
              key={build.id}
              className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardHeader>
                <Image
                  src={build.image || "/placeholder.svg"}
                  alt={build.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-white">{build.name}</CardTitle>
                <p className="text-gray-400 text-sm">{build.description}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white">{build.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({build.reviews} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{build.performance}</Badge>

                {/* Components */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Componentes:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-3 h-3 text-blue-400" />
                      <span className="text-gray-300">{build.components.cpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-3 h-3 text-green-400" />
                      <span className="text-gray-300">{build.components.gpu}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MemoryStick className="w-3 h-3 text-purple-400" />
                      <span className="text-gray-300">{build.components.ram}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <HardDrive className="w-3 h-3 text-orange-400" />
                      <span className="text-gray-300">{build.components.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Price Comparison */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Precios:</h4>
                  <div className="space-y-1">
                    {build.stores.map((store, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-400">{store.name}</span>
                        <span className={index === 0 ? "text-green-400 font-bold" : "text-white"}>
                          ${(store.price / 1000).toFixed(0)}K
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-2xl font-bold text-green-400 mb-2">${(build.price / 1000).toFixed(0)}K</div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Build Completa
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
