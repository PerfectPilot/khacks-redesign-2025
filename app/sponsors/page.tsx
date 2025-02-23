"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"

const images = [
  "/images/sponsor1.jpeg", 
  "/images/sponsor2.jpeg",
  "/images/sponsor3.jpeg",
  "/images/sponsor4.jpeg",
  "/images/sponsor5.jpeg",  
  "/images/sponsor6.jpeg", 
  "/images/sponsor7.jpeg",
  "/images/sponsor8.jpeg",
  "/images/sponsor9.jpeg",
  "/images/sponsor10.jpeg",
  "/images/sponsor11.jpeg",
  "/images/sponsor12.jpeg",
  "/images/sponsor13.jpeg",
  "/images/sponsor14.jpeg",
  "/images/sponsor15.jpeg",
  "/images/sponsor16.jpeg",
  "/images/sponsor17.jpeg",
  "/images/sponsor18.jpeg",
];

export default function SponsorsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => {
      clearInterval(interval)
      setIsVisible(false)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/richard-horvath-_nWaeTF6qo0-unsplash.jpg-AMRNsw7JPQliDSHy9GNAEELhu9H3Fq.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px) brightness(0.5)",
        }}
      />

      {/* Static Header with Logo and Nav */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-4">
            <div className="w-[180px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T9m6a1UnoYXj7OfJpF2fOIy429Phz5.png"
                alt="KleinHacks Logo"
                width={180}
                height={45}
                priority
                className="h-auto w-full"
              />
            </div>
            <NavBar />
          </div>
        </div>
      </div>

      {/* Fading Content */}
      <div className={`relative z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Terminal Window with Image Carousel */}
        <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-black/30 backdrop-blur-xl p-4">
            {/* Terminal Header */}
            <div className="relative flex items-center border-b border-gray-700 bg-gray-900/50 px-6 py-4">
              <div className="absolute left-6 flex gap-3">
                <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
              </div>
              <div className="flex-1">
                <p className="text-center text-sm text-gray-400">kleinhacks_terminal</p>
              </div>
            </div>

            {/* Image Carousel */}
            <div className="relative h-[300px] mx-auto max-w-[80%]">
              <Image
                src={images[currentImageIndex]}
                alt={`Sponsor Image ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-t-2xl"
              />
              {/* Progress Dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
