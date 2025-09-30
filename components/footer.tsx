import Link from "next/link"
import { Instagram, Twitter } from "lucide-react"
import { NavBar } from "./nav-bar"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 bg-[rgb(0,10,75)]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Centered group: social icons above, navbar below */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/kleinisdhacks/"
              aria-label="Instagram"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-gray-800/70 p-2 transition-colors group-hover:bg-gray-700/70">
                <Instagram className="h-5 w-5 text-gray-200 transition-colors group-hover:text-pink-300" />
              </span>
            </Link>
            <Link
              href="https://x.com/klein_hacks"
              aria-label="Twitter"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-gray-800/70 p-2 transition-colors group-hover:bg-gray-700/70">
                <Twitter className="h-5 w-5 text-gray-200 transition-colors group-hover:text-sky-300" />
              </span>
            </Link>
          </div>

          <NavBar />
        </div>

        {/* Credits */}
        <div className="mt-6 border-t border-gray-800/60 pt-4">
          <p className="text-center text-sm text-gray-200">
            Designed and Programmed by <span className="font-medium">Tanush Solai and Mehdi Benseddik</span>
          </p>
        </div>
      </div>
    </footer>
  )
}


