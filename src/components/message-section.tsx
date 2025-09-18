"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function MessageSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-800 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div>
              <div
                className={`w-16 h-1 bg-primary mb-6 transition-all duration-800 ease-out delay-200 ${
                  isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></div>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-800 ease-out delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                A Message
              </h2>
            </div>

            <div
              className={`space-y-6 transition-all duration-800 ease-out delay-400 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg leading-relaxed">
                  "You are the architect of your own life" is a mantra I live by. And to inspire and empower others, I
                  share my mantras through my videos.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                I want to let you know that you have all powers within you. And with a life full of possibilities, you
                have the potential to continue progressing and building the foundation for your best life. You are
                capable of achieving success in almost every aspect of your life.
              </p>

              <p className="text-lg leading-relaxed">
                My videos are intended to remind you of your abilities and tell you what untapped potential you have to
                achieve your dream life?
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-800 ease-out delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] relative overflow-hidden rounded-2xl">
                <img
                  src="/images/speaking-on-stage.jpg"
                  alt="Dr. Anand Sukla speaking on stage"
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
