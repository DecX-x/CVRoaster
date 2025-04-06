"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import RoastSummary from "@/components/results/roast-summary"
import FeedbackSection from "@/components/results/feedback-section"
import ImprovementTips from "@/components/results/improvement-tips"
import { sampleRoastResult, type CVRoastResult } from "@/lib/types"

export default function ResultsPage() {
  const [roastResult, setRoastResult] = useState<CVRoastResult | null>(null)

  useEffect(() => {
    // In a real app, we would fetch the result from an API
    // For now, we'll use the sample data
    setRoastResult(sampleRoastResult)
  }, [])

  if (!roastResult) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-[#f5f5f5]">Loading results...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 gradient-text text-center">Your CV Roast Results</h1>
        <p className="text-[#a0a0a0] mb-8 text-center">Here's our honest feedback to help you improve your CV</p>

        <div className="space-y-8">
          <RoastSummary roastResult={roastResult} />
          <FeedbackSection categories={roastResult.categories} />
          <ImprovementTips tips={roastResult.improvementTips} />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/upload">
              <Button className="bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white">
                Upload Another CV
              </Button>
            </Link>
            <Button variant="outline" className="gradient-border text-[#f5f5f5] border-[#333333]">
              Download Full Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

