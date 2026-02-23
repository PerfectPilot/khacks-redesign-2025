"use client"

import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import Image from "next/image"
import Link from "next/link"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQPage() {
  const [leftOpenItems, setLeftOpenItems] = useState<number[]>([])
  const [rightOpenItems, setRightOpenItems] = useState<number[]>([])

  // Split FAQ data into two columns
  const leftColumnData: FAQItem[] = [
    {
      question: "What Is KleinHacks?",
      answer: "KleinHacks is a student-led hackathon that aims to inspire the next generation of innovators from around the Klein ISD area. High school students, business partners, and community members collaborate on projects with applications in technology and a variety of other fields. Each spring, students will be immersed in a 12-hour innovation challenge. Our event is completely free to all students."
    },
    {
      question: "What is the schedule for the event?",
      answer: "Schedule for 2026 KleinHacks will be available soon!"
    },
    {
      question: "Who can attend?",
      answer: "All current Klein ISD high school students can attend KleinHacks!"
    },
    {
      question: "Do I need to know how to code?",
      answer: "No coding experience is required! KleinHacks offers challenges for both coders and non-coders, and mentors and resources are provided to guide you along the way."
    }
  ]

  const rightColumnData: FAQItem[] = [
    {
      question: "What are the challenges and how many can I do?",
      answer: "• Announced on event day\n• One project per team\n• Projects can apply to multiple challenges"
    },
    {
      question: "How do prizes work?",
      answer: "• Sponsored: At the discretion of the sponsor\n• General Track: Three grand prize winners (1st, 2nd, and 3rd place choice)"
    },
    {
      question: "How do teams work?",
      answer: "• Maximum of 3 participants per team\n• Prizes awarded individually to each team member\n• Team formation help available onsite"
    }
  ]

  const toggleLeftItem = (index: number) => {
    setLeftOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const toggleRightItem = (index: number) => {
    setRightOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  const collapseAll = () => {
    setLeftOpenItems([])
    setRightOpenItems([])
  }

  const showAll = () => {
    setLeftOpenItems(leftColumnData.map((_, index) => index))
    setRightOpenItems(rightColumnData.map((_, index) => index))
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

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Logo and Nav */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 py-4">
            <Link href="/" aria-label="Home">
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
            </Link>
            <NavBar />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Terminal Window */}
            <div className="overflow-hidden rounded-2xl border border-gray-700 bg-black/30 backdrop-blur-xl">
              {/* Terminal Header */}
              <div className="relative flex items-center border-b border-gray-700 bg-gray-900/50 px-6 py-4">
                <div className="absolute left-6 flex gap-3">
                  <div className="h-3.5 w-3.5 rounded-full bg-red-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                </div>
                <div className="flex-1">
                  <p className="text-center text-sm text-gray-400">kleinhacks_faq</p>
                </div>
              </div>

              {/* FAQ Content */}
              <div className="p-8">
                {/* Controls */}
                <div className="text-center mb-12">
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={showAll}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Show All
                    </button>
                    <span className="text-gray-500">|</span>
                    <button
                      onClick={collapseAll}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      Collapse All
                    </button>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {leftColumnData.map((item, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer rounded-xl border border-gray-700/50 bg-gray-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-600"
                        onClick={() => toggleLeftItem(index)}
                      >
                        {/* Question */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <svg
                              className={`h-5 w-5 text-white transition-transform duration-300 ${leftOpenItems.includes(index) ? 'rotate-180' : ''
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${leftOpenItems.includes(index)
                            ? 'max-h-96 opacity-100 mt-4'
                            : 'max-h-0 opacity-0'
                            }`}
                        >
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {rightColumnData.map((item, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer rounded-xl border border-gray-700/50 bg-gray-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-600"
                        onClick={() => toggleRightItem(index)}
                      >
                        {/* Question */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <svg
                              className={`h-5 w-5 text-white transition-transform duration-300 ${rightOpenItems.includes(index) ? 'rotate-180' : ''
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${rightOpenItems.includes(index)
                            ? 'max-h-96 opacity-100 mt-4'
                            : 'max-h-0 opacity-0'
                            }`}
                        >
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page-level footer removed; global footer is used */}
      </div>
    </main>
  )
}
