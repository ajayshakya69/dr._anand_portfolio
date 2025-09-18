"use client";

import type React from "react";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/images/background-image.jpg)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div
              ref={heroRef}
              className={`transition-all duration-1000 ${
                heroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Office Address
              </h1>
              <p className="text-lg text-muted-foreground">
                <strong>Email:</strong> hello@imsuccess.co
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div
              ref={formRef}
              className={`bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl transition-all duration-1000 delay-200 ${
                formVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Get in touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
                <Input
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="h-12"
                />
                <Input
                  type="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
                <Input
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-12"
                />
                <Textarea
                  placeholder="Comments"
                  rows={6}
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 text-lg font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
