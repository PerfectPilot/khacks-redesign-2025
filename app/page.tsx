"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  const [text, setText] = useState("")
  const [showButtons, setShowButtons] = useState(false)
  const fullText = ">_ ~/kleinhacks $ Welcome to KleinHacks 2025!"
  const infoSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Total delay = typing time (characters × 50ms) + extra pause (500ms)
    const totalDelay = fullText.length * 50 + 5

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)

    // Set a fixed timeout for showing buttons
    const buttonTimer = setTimeout(() => {
      setShowButtons(true)
    }, totalDelay)

    return () => {
      clearInterval(interval)
      clearTimeout(buttonTimer)
    }
  }, [])

  const scrollToInfo = () => {
    infoSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
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

                <div 
                  className={`flex w-full max-w-[280px] flex-col items-center gap-4 transition-all duration-1000
                    ${showButtons ? 'translate-y-0 opacity-100 visible' : 'translate-y-4 opacity-0 invisible'}`}
                >
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
                    onClick={scrollToInfo}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div 
          ref={infoSectionRef} 
          className="container mx-auto px-4 py-32"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Video Side */}
            <div className="group overflow-hidden rounded-2xl border border-gray-700/50 bg-black/30 p-6 backdrop-blur-xl transition-all hover:bg-black/40">
              <video 
                className="w-full rounded-lg shadow-2xl"
                controls
                autoPlay
                muted
                loop
                playsInline
                src="https://video.wixstatic.com/video/5a14c2_f05241a393014869bc9a5abf04c599b7/1080p/mp4/file.mp4"
              />
            </div>

            {/* Info Side */}
            <div className="flex flex-col rounded-2xl border border-gray-700/50 bg-black/30 p-8 backdrop-blur-xl transition-all hover:bg-black/40">
              <h2 className="text-center text-3xl font-bold text-white">Event Details</h2>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                <p className="text-center text-xl text-gray-200">
                  <span className="block font-semibold text-gray-400">Date</span>
                  February 21, 2026
                </p>
                <p className="text-center text-xl text-gray-200">
                  <span className="block font-semibold text-gray-400">Location</span>
                  Klein Cain High School <br></br> <br></br> 10201 Spring Cypress Rd Klein, TX 77070 United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-gray-400">
            Designed and Programmed by:{" "}
            <span className="font-medium text-gray-300">
              Tanush Solai, Mehdi Benseddik
            </span>
          </p>
        </footer>
      </div>
    </main>
  )
}

