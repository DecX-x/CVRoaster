"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Calendar, ArrowRight } from "lucide-react"
import { sampleRoastResult } from "@/lib/types"

export default function HistoryPage() {
  // Mock data for previous CV roasts
  const [previousRoasts, setPreviousRoasts] = useState([
    {
      id: 1,
      ...sampleRoastResult,
      metadata: {
        ...sampleRoastResult.metadata,
        uploadDate: "2023-04-02T10:30:00Z",
      },
    },
    {
      id: 2,
      ...sampleRoastResult,
      overall: {
        ...sampleRoastResult.overall,
        score: 85,
      },
      metadata: {
        ...sampleRoastResult.metadata,
        filename: "John_Doe_Resume_2023_v2.pdf",
        uploadDate: "2023-05-15T14:45:00Z",
      },
    },
    {
      id: 3,
      ...sampleRoastResult,
      overall: {
        ...sampleRoastResult.overall,
        score: 92,
      },
      metadata: {
        ...sampleRoastResult.metadata,
        filename: "John_Doe_Resume_2024.pdf",
        uploadDate: "2024-01-10T09:15:00Z",
      },
    },
  ])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 gradient-text text-center">Your CV Roast History</h1>
        <p className="text-[#a0a0a0] mb-8 text-center">
          Track your progress and see how your CV has improved over time
        </p>

        {previousRoasts.length > 0 ? (
          <div className="space-y-6">
            {previousRoasts.map((roast) => (
              <Card
                key={roast.id}
                className="shadow-md hover:shadow-lg transition-shadow bg-[#1e1e1e] border-[#333333]"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#252525]">
                        <FileText className="h-6 w-6 text-[#e67373]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#f5f5f5]">{roast.metadata.filename}</h3>
                        <div className="flex items-center text-sm text-[#a0a0a0]">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(roast.metadata.uploadDate)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-sm text-[#a0a0a0]">Score</div>
                        <div className="text-xl font-bold gradient-text">{roast.overall.score}/100</div>
                      </div>

                      <Link href={`/results?id=${roast.id}`}>
                        <Button variant="ghost" className="text-[#6bb7d3] hover:text-[#5aa7c3] hover:bg-[#6bb7d3]/10">
                          View Results
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center pt-4">
              <Link href="/upload">
                <Button className="bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white">
                  Upload New CV
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#a0a0a0] mb-6">You haven't uploaded any CVs yet.</p>
            <Link href="/upload">
              <Button className="bg-gradient-to-r from-[#e67373] to-[#7ac97a] hover:from-[#d86565] hover:to-[#69b869] text-white">
                Upload Your First CV
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

