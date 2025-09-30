import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <footer className="border-t border-gray-800/60 bg-[rgb(0,10,75)]">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Replace the href values below with your real profile URLs */}
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-300 transition-colors hover:text-pink-400"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-300 transition-colors hover:text-sky-400"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
        {/* Credits below nav/social row */}
        <div className="mt-6 border-t border-gray-800/60 pt-4">
          <p className="text-center text-sm text-gray-200">
            Designed and Programmed by: <span className="font-medium">Tanush Solai, Mehdi Benseddik</span>
          </p>
        </div>
      </div>
    </footer>
  )
}


