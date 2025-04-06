import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#f5f5f5]">
              Get Your CV <span className="gradient-text">Roasted</span> by AI for Better Job Opportunities
            </h1>

            <p className="text-lg text-[#a0a0a0] max-w-xl">
              Our AI provides honest, constructive feedback on your resume to help you stand out to recruiters and land
              more interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/upload">
                <Button className="bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white px-8 py-6 text-lg">
                  Upload Your CV
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="gradient-border px-8 py-6 text-lg text-[#f5f5f5] border-[#333333]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

