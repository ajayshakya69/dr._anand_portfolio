"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
// import Image from "next/image"
import BackgroundSlideshow from "./background-slideshow"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  const backgroundImages = [
    "/images/background-image.jpg",
    "/images/backgroundimage4.jpg",
    "/images/background-image2.jpg",
    "/images/background-image3.jpg",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundSlideshow images={backgroundImages} duration={6000} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div
            className={`text-white space-y-8 transition-all duration-1200 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-primary text-xl md:text-2xl font-medium tracking-wide">Create a life you</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
                were born to{" "}
                <span className="text-white relative">
                  live
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></div>
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              When you believe in yourself, your potential is waiting to be explored. I am{" "}
              <span className="text-primary font-semibold">Dr. Anand Sukla</span>, and I strive to help you discover
              your maximum potential and transform your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              >
                Invite Dr. Anand Sukla
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 text-xl font-semibold bg-transparent rounded-full transition-all duration-300 hover:scale-105"
              >
                Watch My Videos
              </Button>
            </div>

            <div className="pt-12 border-t border-white/20 mt-12">
              <blockquote className="text-2xl md:text-3xl font-light italic text-white/95 leading-relaxed">
                "You are the architect of your own life"
              </blockquote>
              <p className="text-primary text-lg font-semibold mt-4">- Dr. Anand Sukla</p>
            </div>
          </div>

          {/* 
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-96 h-[500px] md:w-[450px] md:h-[580px] relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero-sectionbg-less.png"
                  alt="Dr. Anand Sukla - Motivational Speaker"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
