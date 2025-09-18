"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import YouTubePopup from "./youtube-popup"

const videos = [
  {
    id: 1,
    title: "5 MINUTE पहले यह करें",
    subtitle: "जिंदगी बदल जाएगी",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "5:23",
  },
  {
    id: 2,
    title: "RICH vs POOR Mindset",
    subtitle: "The Key Difference",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "8:45",
  },
  {
    id: 3,
    title: "1 घंटे में करें",
    subtitle: "How to be Successful",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual video ID
    duration: "12:30",
  },
]

export default function VideosSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="videos-section" ref={ref} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`w-16 h-1 bg-primary mx-auto mb-6 transition-all duration-800 ease-out ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          ></div>
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-800 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Watch My Videos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-800 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <YouTubePopup videoId={video.youtubeId} title={`${video.title} - ${video.subtitle}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
