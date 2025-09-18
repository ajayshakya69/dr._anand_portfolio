"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: turningRef, isVisible: turningVisible } = useScrollAnimation();
  const { ref: milestonesRef, isVisible: milestonesVisible } =
    useScrollAnimation();

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
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
              About Me
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              The Best Project you'll ever work on is you
            </p>
          </div>
        </div>

        {/* Content starts here with white background */}
        <div className="bg-background">
          {/* Who I Am Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="/images/hero-sectionbg-less.png"
                    alt="Dr. Anand Sukla"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                </div>
                <div>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Who I Am
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong className="text-primary">
                      Dr. Anand Sukla is a most loved and sought-after
                      motivational speaker,
                    </strong>{" "}
                    successful videopreneur, and performance coach turned
                    writer.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    His journey from zero to hero, nothing to something, and
                    bottom to top is unstoppable. It has begun selling 1 Rs
                    Jaljeera on the road to 5 Million loyal youtube subscribers
                    and is still growing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div
                ref={featuresRef}
                className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
                  featuresVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    An understanding mind, incredible ease, clarity of ideas,
                    and a slice of humor are some good reasons people follow
                    him.
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    Dr. Anand's speeches are electric in energy & are immensely
                    popular. He is blessed with a natural ability to connect
                    with the audience.
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    His videos implant immense dynamism and strength in the
                    audience. He has won the hearts of his subscribers by
                    considering them as his friends rather than fans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                ref={journeyRef}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
                  journeyVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Looking Back into the Journey of Self Discovery:
                  </h2>
                  <div className="border-l-4 border-primary pl-6 mb-6">
                    <p className="text-muted-foreground mb-4">
                      Well, this journey hasn't been easy. Dr. Anand's childhood
                      was hard on him; he worked as a pizza boy at Pizza Hut. He
                      kept the ball rolling with the belief that what you want,
                      you can achieve. Eventually, started a career in sales in
                      the travel industry.
                    </p>
                    <p className="text-muted-foreground">
                      With his abilities and hard work, he continued earning
                      promotions and, within no time, reached a good designation
                      at one of the top airlines in the US.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/backgroundimage4.jpg"
                    alt="Dr. Anand with students"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Turning Point Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div
                ref={turningRef}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-400 ${
                  turningVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="lg:order-2">
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    Turning Point
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    While working as a trainer, the light bulb went on for him.
                    Dr. Anand decided to go with his purpose of mentoring and
                    developing people through the YouTube channel. And that was
                    the time when a full-time YouTube career was a thing people
                    were laughing at. Someone called this move "Career Suicide."
                  </p>
                  <p className="text-muted-foreground">
                    People made fun, discouraged, and what not to distract. But
                    nothing could stop him; one of the biggest reasons is his
                    father, a pillar of strength for him.
                  </p>
                </div>
                <div className="lg:order-1 relative">
                  <img
                    src="/images/background-image3.jpg"
                    alt="Dr. Anand at award ceremony"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Milestones Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div
                ref={milestonesRef}
                className={`transition-all duration-1000 delay-500 ${
                  milestonesVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-1 bg-primary mb-6"></div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                      Milestones Achieved:
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          By Winning Nelson Mandela Nobel Peace Award 2021 and
                          Honorary Doctorate Degree, he has added yet another
                          'feather in his cap.'
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          He is an official "YouTube Contributor Partner" of
                          YouTube India.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Dr. Anand has been featured on multiple news and
                          articles through popular channels like CNBC, CNN NEWS,
                          The Economic Times, Dainik Bhaskar, Dainik Jagran,
                          Financial Times.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Author of the book 'Be Awesome, Live Awesome.'
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Being watched in more than 162 Countries
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          The loyal Subscriber base of more than 5 Million.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          He has diversified experience in Training, Business
                          Development, and Quality.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Well addressed more than 1,00,000 individuals through
                          Training Workshops and Seminars in different corporate
                          houses and Institutions. Organizations benefited:
                          Paytm, SBI, Sony, Bayer, Hero Motors, IIT, BIMTECH,
                          and many more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/images/lecture-stand-image.jpg"
                      alt="Dr. Anand speaking at podium"
                      className="w-full rounded-2xl shadow-2xl"
                    />
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
