import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { name: "About Dr. Anand", href: "/about" },
    { name: "Invite Dr. Anand", href: "/invite" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif italic mb-2">Dr. Anand</h2>
            <p className="text-secondary-foreground/80">International Motivational Speaker</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <p className="text-secondary-foreground/60">© 2024 Dr. Anand Sukla. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
