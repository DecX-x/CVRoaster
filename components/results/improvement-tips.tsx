"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImprovementTipsProps {
  tips: {
    title: string
    description: string
    example: string
  }[]
}

export default function ImprovementTips({ tips }: ImprovementTipsProps) {
  const [expandedTips, setExpandedTips] = useState<Record<number, boolean>>({})

  const toggleTip = (index: number) => {
    setExpandedTips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <Card className="shadow-md bg-[#1e1e1e] border-[#333333]">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#f5f5f5]">Improvement Tips</h2>

        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div key={index} className="p-4 rounded-lg border gradient-border bg-[#252525] border-[#333333]">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-[#7ac97a] flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg mb-1 text-[#f5f5f5]">{tip.title}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleTip(index)}
                      className="p-1 h-auto text-[#a0a0a0]"
                    >
                      {expandedTips[index] ? (
                        <ChevronUp className="h-5 w-5 text-[#a0a0a0]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#a0a0a0]" />
                      )}
                    </Button>
                  </div>
                  <p className="text-[#a0a0a0]">{tip.description}</p>

                  {expandedTips[index] && (
                    <div className="mt-3 p-3 bg-[#1e1e1e] rounded-md text-sm border border-[#333333]">
                      <p className="font-medium text-[#6bb7d3] mb-2">Example:</p>
                      <div className="whitespace-pre-line text-[#f5f5f5]">{tip.example}</div>
                    </div>
                  )}

                  {!expandedTips[index] && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleTip(index)}
                      className="mt-2 text-[#6bb7d3] hover:text-[#5aa7c3] p-0 h-auto"
                    >
                      <span>See Example</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

