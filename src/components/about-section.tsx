"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users } from "lucide-react"

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div
            className={`flex justify-center lg:justify-start transition-all duration-800 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
                <img
                  src="/images/lecture-stand-image.jpg"
                  alt="Dr. Anand Sukla presenting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div
                className={`absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg transition-all duration-800 ease-out delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">100M+</div>
                  <div className="text-sm">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`space-y-8 transition-all duration-800 ease-out delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div>
              <div
                className={`w-16 h-1 bg-primary mb-6 transition-all duration-800 ease-out delay-400 ${
                  isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></div>
              <h2
                className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-800 ease-out delay-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                About Me
              </h2>
              <h3
                className={`text-2xl font-semibold text-foreground mb-6 transition-all duration-800 ease-out delay-600 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                Hi, I am Dr. Anand Sukla
              </h3>
            </div>

            <div
              className={`space-y-6 transition-all duration-800 ease-out delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="border-l-4 border-primary pl-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I am a motivational speaker, entrepreneur, performance coach, and writer. I am on a mission to help
                  people unleash their true potential.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    I founded Seekhega India in 2019, intending to empower people with skills that the world requires,
                    values, and returns handsomely and build their dream life.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    I have been rewarded with Nelson Mandela Noble Peace Award 2021 and Honorary Doctorate Degree.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div
              className={`grid md:grid-cols-2 gap-6 pt-8 transition-all duration-800 ease-out delay-800 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-card-foreground">100M+</div>
                      <div className="text-sm text-muted-foreground">
                        People improved their lives through my videos, training programs, and books.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-card-foreground">6M+</div>
                      <div className="text-sm text-muted-foreground">
                        People found my videos valuable. YouTube channel hits 15 million monthly views.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
