import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturedSection from "@/components/featured-section"
import VideosSection from "@/components/videos-section"
import MessageSection from "@/components/message-section"
import AboutSection from "@/components/about-section"
import InviteSection from "@/components/invite-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <VideosSection />
      <MessageSection />
      <AboutSection />
      <InviteSection />
      <Footer />
    </main>
  )
}
