"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Dr. Anand", href: "/about" },
    { name: "Invite Dr. Anand For Keynote Speech", href: "/invite" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "Watch Video",
      href: "#",
      onClick: () => {
        if (pathname === "/") {
          // If on homepage, scroll to video section
          const videoSection = document.getElementById("videos-section")
          if (videoSection) {
            videoSection.scrollIntoView({ behavior: "smooth" })
          }
        } else {
          // If on other pages, navigate to homepage then scroll
          router.push("/#videos-section")
        }
      },
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold font-serif italic transition-all duration-300 ${
                isScrolled ? "text-white" : "text-white drop-shadow-lg"
              }`}
            >
              Dr. Anand
            </h1>
            <p
              className={`text-xs -mt-1 transition-all duration-300 ${
                isScrolled ? "text-white/80" : "text-white/90 drop-shadow-md"
              }`}
            >
              International Motivational Speaker
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={`hover:text-primary transition-all duration-300 text-sm font-medium ${
                      isScrolled
                        ? "text-white hover:text-primary"
                        : "text-white drop-shadow-lg hover:text-primary hover:drop-shadow-xl"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:text-primary transition-all duration-300 text-sm font-medium ${
                      isScrolled
                        ? "text-white hover:text-primary"
                        : "text-white drop-shadow-lg hover:text-primary hover:drop-shadow-xl"
                    }`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-primary transition-all duration-300 ${
                isScrolled ? "text-white hover:bg-white/10" : "text-white drop-shadow-lg hover:bg-white/20"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden backdrop-blur-md transition-all duration-300 ${
              isScrolled ? "bg-black/95" : "bg-black/90"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      item.onClick?.()
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-md w-full text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
