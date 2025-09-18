"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function InviteSection() {
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
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Invite Dr. Anand for your growth
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
              Transform your event with powerful insights and actionable strategies that inspire lasting change. Book
              Dr. Anand for your next corporate event, conference, or workshop.
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              Invite Dr. Anand
            </Button>
          </div>

          {/* Right Content - Image */}
          <div
            className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/speaking-on-stage.jpg"
                  alt="Invite Dr. Anand for your event"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
