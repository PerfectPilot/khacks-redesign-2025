"use client"

import { useState } from "react"
import Link from "next/link"

export function NavBar() {
  const [activeItem, setActiveItem] = useState("home")

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <nav className="rounded-full border border-gray-700/50 bg-gray-900/30 px-8 py-2.5 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`text-sm transition-colors hover:text-blue-400 ${
                activeItem === item.name.toLowerCase() ? "text-blue-400" : "text-gray-300"
              }`}
              onClick={() => setActiveItem(item.name.toLowerCase())}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

