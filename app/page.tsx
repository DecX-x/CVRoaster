import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">What Our Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The feedback was brutally honest but exactly what I needed to improve my resume.",
                author: "Alex Johnson",
                role: "Software Engineer",
              },
              {
                quote: "Got a job within 2 weeks after implementing the suggestions from AI CV Roaster!",
                author: "Sarah Miller",
                role: "Marketing Specialist",
              },
              {
                quote: "The detailed analysis helped me understand where I was underselling my achievements.",
                author: "Michael Chen",
                role: "Data Scientist",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md gradient-border bg-[#1e1e1e] border border-[#333333]"
              >
                <p className="text-[#f5f5f5] mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#f5f5f5]">{testimonial.author}</p>
                  <p className="text-sm text-[#a0a0a0]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your CV?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Upload your CV now and get detailed feedback to help you land your dream job.
          </p>
          <Link href="/upload">
            <Button className="bg-[#121212] text-[#e67373] hover:bg-[#1a1a1a] hover:text-[#d86565]">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

