"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = ">_ ~/kleinhacks $ Welcome to KleinHacks 2025!"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
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

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Logo and Nav */}
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
                  <p className="text-center text-sm text-gray-400">kleinhacks_terminal</p>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex min-h-[400px] flex-col items-center justify-between p-8">
                <div />
                <div className="text-center">
                  <span className="font-mono text-xl text-green-400">{text}</span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>

                <div className="flex w-full max-w-[280px] flex-col items-center gap-4">
                  <Button
                    size="lg"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#3557B0] to-[#d44d2e] px-8 py-6 text-lg hover:from-[#3557B0]/90 hover:to-[#d44d2e]/90"
                  >
                    Register Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-2xl border-gray-600 px-8 py-3 text-base text-white hover:bg-gray-800"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

