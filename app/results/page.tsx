"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import RoastSummary from "@/components/results/roast-summary"
import FeedbackSection from "@/components/results/feedback-section"
import ImprovementTips from "@/components/results/improvement-tips"
import { sampleRoastResult, type CVRoastResult } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"

export default function ResultsPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [roastResult, setRoastResult] = useState<CVRoastResult | null>(null)

  useEffect(() => {
    // Try to get results from session storage
    const storedResult = sessionStorage.getItem('cvAnalysisResult')
    
    if (storedResult) {
      try {
        const parsedResult = JSON.parse(storedResult)
        setRoastResult(parsedResult)
      } catch (error) {
        console.error('Error parsing stored result:', error)
        // Fall back to sample data if there's an error
        setRoastResult(sampleRoastResult)
        toast({
          title: "Warning",
          description: "Could not load your analysis results. Showing sample data instead.",
          variant: "destructive",
        })
      }
    } else {
      // If no result is in session storage, redirect to upload
      toast({
        title: "No analysis found",
        description: "Please upload your CV to get an analysis",
      })
      router.push("/upload")
    }
  }, [router, toast])

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
              <Button variant="outline" className="gradient-border text-[#f5f5f5] border-[#333333]">
                Upload Another CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

