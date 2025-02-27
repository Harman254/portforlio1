import Hero from "@/components/Hero";
import Skills from "@/components/exSkills";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactCTA from "@/components/ContactCTA";
import  Testimonials  from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with gradient background */}
      <section className="relative bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 dark:bg-grid-slate-700/20 bg-[size:60px_60px] z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24">
          <Hero />
        </div>
      </section>

      {/* Skills Section with subtle animation */}
      <section className="py-12 sm:py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build modern web applications
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <Skills />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing some of my best work and technical achievements
            </p>
          </div>
          <FeaturedProjects />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              What others say about working with me
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCTA />
        </div>
      </section>
    </main>
  );
}
