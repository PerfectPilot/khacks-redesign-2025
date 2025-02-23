"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"

export default function SponsorsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => {
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
        {/* Centered Terminal Window */}
        <div className="container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-gray-700 bg-black/30 backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="relative flex items-center border-b border-gray-700 bg-gray-900/50 px-6 py-4">
                <div className="absolute left-6 flex gap-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-center text-sm text-gray-400">our_sponsors</p>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex min-h-[400px] flex-col items-center justify-between p-8">
                <div />
                <div className="text-center">
                  {/* Removed the text and animation */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
