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
    }, 3500)

    return () => {
      clearInterval(interval)
      setIsVisible(false)
    }
  }, [])

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

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
          <div className="w-full max-w-4xl overflow-visible rounded-2xl border border-gray-700 bg-black/30 backdrop-blur-xl">
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

            {/* Terminal Content (matches homepage spacing and layout) */}
            <div className="flex min-h-[400px] flex-col items-center justify-center p-8">
              {/* Image Carousel */}
              <div className="relative mx-auto h-[320px] w-full max-w-[85%] overflow-visible rounded-lg md:h-[380px] lg:h-[420px]">
                {/* Slides stacked and cross-faded */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  {images.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`Sponsor ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80vw, 800px"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <button
                  aria-label="Previous image"
                  onClick={handlePrevImage}
                  className="group absolute left-[4px] sm:left-3 md:left-[-48px] lg:left-[-68px] top-1/2 z-50 -translate-y-1/2 transform rounded-full border border-white/20 bg-black/40 p-1 md:p-1.5 text-white/90 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/60 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 md:h-10 md:w-10 stroke-current transition-transform duration-200 ease-out group-hover:-translate-x-1"
                    fill="none"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 5 L7 12 L15 19" />
                  </svg>
                </button>
                <button
                  aria-label="Next image"
                  onClick={handleNextImage}
                  className="group absolute right-[4px] sm:right-3 md:right-[-48px] lg:right-[-68px] top-1/2 z-50 -translate-y-1/2 transform rounded-full border border-white/20 bg-black/40 p-1 md:p-1.5 text-white/90 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-black/60 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 md:h-10 md:w-10 stroke-current transition-transform duration-200 ease-out group-hover:translate-x-1"
                    fill="none"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5 L17 12 L9 19" />
                  </svg>
                </button>

                {/* Progress Dots */}
                <div className="pointer-events-auto absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 transform items-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Go to image ${index + 1}`}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${currentImageIndex === index ? 'bg-blue-500' : 'bg-white/50 hover:bg-white/70'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
