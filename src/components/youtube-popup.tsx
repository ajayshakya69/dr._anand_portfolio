"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"

interface YouTubePopupProps {
  videoId: string
  title: string
  thumbnail?: string
  children?: React.ReactNode
}

export default function YouTubePopup({ videoId, title, thumbnail, children }: YouTubePopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  const getThumbnailUrl = (id: string) => {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  }

  const getEmbedUrl = (id: string) => {
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src={thumbnail || getThumbnailUrl(videoId)}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-semibold text-sm line-clamp-2">{title}</h3>
            </div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={getEmbedUrl(videoId)}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
