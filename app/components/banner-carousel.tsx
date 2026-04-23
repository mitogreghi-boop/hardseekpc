"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Banner {
  id: string
  image: string
  alt: string
  link: string
}

interface BannerCarouselProps {
  banners: Banner[]
}

export function BannerCarousel({ banners }: BannerCarouselProps) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

  useEffect(() => {
    if (banners.length <= 1) return

    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [banners.length])

  if (banners.length === 0) {
    return null
  }

  const currentBanner = banners[currentBannerIndex]

  return (
    <section className="relative overflow-hidden">
      <div className="w-full relative">
        <div className="relative w-full h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden">
          <Link href={currentBanner.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <Image
              src={currentBanner.image || "/placeholder.svg"}
              alt={currentBanner.alt}
              fill
              className="object-cover object-center"
              priority
            />
          </Link>

          {/* Dots Indicator */}
          {banners.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBannerIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentBannerIndex ? "bg-orange-500 w-8" : "bg-white/50 hover:bg-white/80 w-2"
                  }`}
                  aria-label={`Go to banner ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
