"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LoadingAnimation from "@/components/analyzing/loading-animation"

export default function AnalyzingPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate API call and redirect to results page
    const timer = setTimeout(() => {
      router.push("/results")
    }, 5000) // 5 seconds delay

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 gradient-text">Analyzing Your CV</h1>
        <p className="text-[#a0a0a0] mb-8">
          Our AI is thoroughly reviewing your CV to provide detailed, constructive feedback. This usually takes less
          than a minute.
        </p>

        <LoadingAnimation />

        <div className="mt-12 space-y-6">
          <div className="p-4 rounded-lg bg-[#1e1e1e] border border-[#333333]">
            <p className="text-[#f5f5f5] italic">
              "We're checking your formatting, content, keywords, and more to give you the most helpful feedback
              possible."
            </p>
          </div>

          <p className="text-sm text-[#a0a0a0]">
            You'll be automatically redirected to your results when they're ready.
          </p>
        </div>
      </div>
    </div>
  )
}

