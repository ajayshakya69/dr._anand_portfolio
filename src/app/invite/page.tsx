"use client";

import type React from "react";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function InvitePage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: feedbackRef, isVisible: feedbackVisible } = useScrollAnimation();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/images/singing.jpg')`,
        }}
      />

      {/* Scrollable Content Overlay */}
      <div className="relative z-10">
        {/* Hero Spacer - takes up 2/3 of screen height */}
        <div className="h-[67vh] flex items-end justify-center pb-16">
          <div className="text-center text-white px-4">
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Invite Dr. Anand Sukla for your growth
            </h1>
            <p className="text-xl text-white/90 drop-shadow-lg">
              to multiply your performance: -
            </p>
          </div>
        </div>

        {/* Content starts here with white background */}
        <div className="bg-background">
          {/* Benefits Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div
                ref={benefitsRef}
                className={`transition-all duration-1000 delay-200 ${
                  benefitsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-16 h-1 bg-primary mb-8"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                  Benefits of Dr. Anand's Sessions:
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Increases Your Will
                    </h3>
                    <p className="text-muted-foreground">
                      Increases Your Will to DO, to GROW, and to PROGRESS
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Small Actions
                    </h3>
                    <p className="text-muted-foreground">
                      Small actions boost the Personal and Professional life of
                      an individual to HIT BIG GOALS
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Learn to Understand
                    </h3>
                    <p className="text-muted-foreground">
                      Learn to Understand your PRIORITIES, Obligations, and
                      Schedule
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-primary rounded"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Able to Take Actions
                    </h3>
                    <p className="text-muted-foreground">
                      Able to Take Actions to Transform your BODY,
                      RELATIONSHIPS, BUSINESS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                ref={aboutRef}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
                  aboutVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative">
                  <img
                    src="/images/speaking-on-stage.jpg"
                    alt="Dr. Anand speaking on stage"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                </div>
                <div>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    About Me
                  </h2>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Hi, I am Dr. Anand Sukla
                  </h3>
                  <div className="border-l-4 border-primary pl-6 mb-6">
                    <p className="text-muted-foreground mb-4">
                      I am a motivational speaker, entrepreneur, performance
                      coach, and writer. I am on a mission to help people
                      unleash their true potential.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          I founded Seekhega India in 2019, intending to empower
                          people with skills that the world requires, values,
                          and returns handsomely and build their dream life.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          I have been rewarded with Nelson Mandela Noble Peace
                          Award 2021 and Honorary Doctorate Degree.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-6 h-6 bg-primary rounded"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        I take pride in saying that more than 100 million people
                        have been able to improve their lives through my videos,
                        training programs, and books.
                      </p>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-6 h-6 bg-primary rounded"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        There are 6 million people who found my videos either
                        valuable or entertaining. I hope you are one of them. My
                        YouTube channel hits 15 million monthly views and
                        getting watched in more than 165+ countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section
            id="invite-form"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
          >
            <div className="max-w-4xl mx-auto">
              <div
                ref={formRef}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-400 ${
                  formVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative">
                  <img
                    src="/images/hero-sectionbg-less.png"
                    alt="Dr. Anand Sukla"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="bg-background p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Fill up the form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                    />
                    <Input
                      type="email"
                      placeholder="Email Id"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Phone No."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <Textarea
                      placeholder="your message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                    <Button
                      type="submit"
                      className="w-full bg-foreground text-background hover:bg-foreground/90"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Client Feedback Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                ref={feedbackRef}
                className={`transition-all duration-1000 delay-500 ${
                  feedbackVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-16 h-1 bg-primary mb-8"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
                  Client's Feedback
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">VP</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          Vimal Pandey, CEO
                        </h4>
                        <p className="text-sm text-muted-foreground">Vi-John</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I have never attend such a Training Program. We have
                      enjoyed every moment of it. His sessions have lot of
                      things, which we can educate in us. I never thought such
                      small things can create such a big impact in our life.
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">AH</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          Ashish Hallan, EVP
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          HDFC Ergo
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Dr. Anand was able to gel well with the people coming from
                      different locations. There were lot of learnings and
                      amazing take aways in his session for the entire team.
                    </p>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">RM</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          Rakesh Mishra, Promotion Head
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Vivo India
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I have been fortunate enough to be a part of his session.
                      It was an energy packed session. Totally overwhelmed by
                      how he manages to portray most critical situations with
                      ease. Keep the Happy Singh within you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
