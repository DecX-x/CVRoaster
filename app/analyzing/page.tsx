"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingAnimation from "@/components/analyzing/loading-animation"
import { useToast } from "@/hooks/use-toast"

export default function AnalyzingPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let isMounted = true
    
    const processCV = async () => {
      try {
        // Retrieve data from session storage
        const fileUrl = sessionStorage.getItem('cvFileUrl')
        const language = sessionStorage.getItem('cvLanguage') || 'english'
        
        if (!fileUrl) {
          toast({
            title: "Error",
            description: "No file found. Please upload your CV again.",
            variant: "destructive",
          })
          router.push("/upload")
          return
        }
        
        // Update progress
        if (isMounted) setProgress(20)
        
        // Step 2: Process OCR
        const ocrResponse = await fetch('/api/analyze-cv/ocr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fileUrl }),
        })
        
        if (!ocrResponse.ok) {
          const error = await ocrResponse.json()
          throw new Error(error.error || 'Error processing OCR')
        }
        
        const { extractedText } = await ocrResponse.json()
        
        // Update progress
        if (isMounted) setProgress(60)
        
        // Step 3: Generate analysis
        const generateResponse = await fetch('/api/analyze-cv/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            extractedText,
            language
          }),
        })
        
        if (!generateResponse.ok) {
          const error = await generateResponse.json()
          throw new Error(error.error || 'Error generating analysis')
        }
        
        const { result } = await generateResponse.json()
        
        // Update progress
        if (isMounted) setProgress(100)
        
        // Store result in session storage
        sessionStorage.setItem('cvAnalysisResult', JSON.stringify(result))
        
        // Navigate to results page
        router.push("/results")
        
      } catch (error) {
        console.error('Error analyzing CV:', error)
        if (isMounted) {
          toast({
            title: "Error",
            description: error instanceof Error ? error.message : "Something went wrong during analysis",
            variant: "destructive",
          })
          router.push("/upload")
        }
      }
    }
    
    // Start processing
    processCV()
    
    return () => {
      isMounted = false
    }
  }, [router, toast])

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

