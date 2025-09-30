"use client"

import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import Image from "next/image"

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
      answer: "KleinHacks is a student-led hackathon that brings together high school students from Klein ISD to collaborate, learn, and create innovative projects. It's a 24-hour event where participants work in teams to build software, hardware, or other tech solutions while competing for prizes and learning from workshops and mentors."
    },
    {
      question: "Who can attend?",
      answer: "All current Klein ISD high school students are welcome to attend KleinHacks. This includes students from Klein High School, Klein Cain High School, Klein Oak High School, Klein Forest High School, and Klein Collins High School. No prior programming experience is required!"
    },
    {
      question: "What are the challenges and how many can I do?",
      answer: "Our challenges won't be announced until the day of the event, but typically include various categories like web development, mobile apps, hardware projects, data science, and more. You can work on as many challenges as you'd like, but most teams focus on one main project to create something truly impressive."
    },
    {
      question: "How do teams work?",
      answer: "Teams consist of a maximum of 4 people. You can form a team before the event or find teammates during the team formation session at the beginning of the hackathon. Working in teams allows you to combine different skills and create more ambitious projects than you could alone."
    }
  ]

  const rightColumnData: FAQItem[] = [
    {
      question: "What is the schedule for the event?",
      answer: "The KleinHacks 2025 Schedule will be released closer to the event date. Generally, the event runs for 24 hours starting on February 21, 2026, with check-in beginning in the morning, opening ceremonies, workshops throughout the day, hacking time, and final presentations and awards ceremony."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Nope! KleinHacks is a great place to learn programming and technology skills. We'll have workshops for beginners, mentors to help guide you, and resources to get you started. Many participants come with little to no coding experience and leave with new skills and confidence in technology."
    },
    {
      question: "How do prizes work?",
      answer: "There are two types of prizes: category prizes for the best projects in specific areas (like Best Web App, Best Mobile App, etc.) and overall prizes for the top projects overall. Prizes include gift cards, tech gadgets, and other exciting rewards. All participants also receive swag and certificates of participation."
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
                {/* FAQ Title */}
                <h1 className="text-center text-6xl font-bold text-white mb-12 tracking-wider">
                  FAQ
                </h1>

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
                              className={`h-5 w-5 text-white transition-transform duration-300 ${
                                leftOpenItems.includes(index) ? 'rotate-180' : ''
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
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            leftOpenItems.includes(index) 
                              ? 'max-h-96 opacity-100 mt-4' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed">
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
                              className={`h-5 w-5 text-white transition-transform duration-300 ${
                                rightOpenItems.includes(index) ? 'rotate-180' : ''
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
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            rightOpenItems.includes(index) 
                              ? 'max-h-96 opacity-100 mt-4' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="text-gray-300 leading-relaxed">
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
