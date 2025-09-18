"use client"

import { useEffect, useState } from "react"

interface BackgroundSlideshowProps {
  images: string[]
  duration?: number
  className?: string
}

export default function BackgroundSlideshow({ images, duration = 5000, className = "" }: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 500) // Half of transition duration
    }, duration)

    return () => clearInterval(interval)
  }, [images.length, duration])

  if (images.length === 0) return null

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? `opacity-100 scale-100 ${isTransitioning ? "blur-sm" : "blur-0"}`
              : "opacity-0 scale-110 blur-sm"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}
