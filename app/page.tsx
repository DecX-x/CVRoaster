import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />


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

