"use client"

import { useEffect, useRef, useState } from "react"

const mediaLogos = [
  { name: "CNBC", logo: "CNBC" },
  { name: "CNN", logo: "CNN" },
  { name: "The Tribune", logo: "The Tribune" },
  { name: "The Economic Times", logo: "The Economic Times" },
  { name: "Josh Talks", logo: "JOSH TALKS" },
  { name: "Government of India", logo: "GOI" },
  { name: "Dainik Jagran", logo: "दैनिक जागरण" },
  { name: "Dainik Bhaskar", logo: "दैनिक भास्कर" },
  { name: "Financial Times", logo: "FT" },
  { name: "Hindustan Times", logo: "hindustan times" },
]

export default function FeaturedSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Featured On
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-8 items-center ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
        >
          {mediaLogos.map((media, index) => (
            <div
              key={media.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <span className="text-lg md:text-xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {media.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
