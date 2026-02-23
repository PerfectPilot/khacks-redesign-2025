"use client"

import { useState, useRef } from "react"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import HCaptcha from "@hcaptcha/react-hcaptcha"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryReason: "",
    description: ""
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const captchaRef = useRef<HCaptcha>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!captchaToken) {
      setStatus("error")
      setErrorMessage("Please complete the captcha verification.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus("error")
        setErrorMessage(data.error || "Something went wrong. Please try again.")
        return
      }

      setStatus("success")
      setFormData({ name: "", email: "", inquiryReason: "", description: "" })
      setCaptchaToken(null)
      captchaRef.current?.resetCaptcha()
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
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
      </div>

      {/* Terminal Contact Form */}
      <div className="relative z-10 container mx-auto flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-8">
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
                <p className="text-center text-sm text-gray-400">kleinhacks_contact</p>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8">
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-white mb-2">Contact Us</h1>
                <p className="text-gray-400">Get in touch with the KleinHacks team</p>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                  <p className="text-green-400 font-medium">✓ Message sent successfully!</p>
                  <p className="text-green-400/70 text-sm mt-1">We&apos;ll get back to you as soon as possible.</p>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                  <p className="text-red-400 font-medium">{errorMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Inquiry Reason Dropdown */}
                <div>
                  <label htmlFor="inquiryReason" className="block text-sm font-medium text-gray-300 mb-2">
                    Inquiry Reason *
                  </label>
                  <select
                    id="inquiryReason"
                    name="inquiryReason"
                    value={formData.inquiryReason}
                    onChange={handleInputChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50"
                  >
                    <option value="" className="bg-gray-800">Select an option</option>
                    <option value="kleinhacks-question" className="bg-gray-800">KleinHacks question</option>
                    <option value="website-issue" className="bg-gray-800">Issue with website</option>
                  </select>
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none disabled:opacity-50"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {/* hCaptcha Widget */}
                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY || ""}
                    onVerify={(token) => {
                      setCaptchaToken(token)
                      if (status === "error" && errorMessage.includes("captcha")) {
                        setStatus("idle")
                        setErrorMessage("")
                      }
                    }}
                    onExpire={() => setCaptchaToken(null)}
                    theme="dark"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-[70%] bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>

              {/* Backup Emails Placeholder Section */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">Backup Contact Emails</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-800/30 border border-gray-600 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">Sponsor Contact</p>
                    <p className="text-white font-mono text-sm">kleinhacks@kleinisd.net</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 border border-gray-600 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">Tech Support</p>
                    <p className="text-white font-mono text-sm">tsol7130@students.kleinisd.net</p>
                    <p className="text-white font-mono text-sm mt-2">mben8190@students.kleinisd.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
