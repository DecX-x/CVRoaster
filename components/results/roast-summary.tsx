import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { CVRoastResult } from "@/lib/types"

interface RoastSummaryProps {
  roastResult: CVRoastResult
}

export default function RoastSummary({ roastResult }: RoastSummaryProps) {
  const { overall, categories } = roastResult

  // Helper function to convert markdown-style bold to HTML
  const formatBoldText = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  return (
    <Card className="shadow-md bg-[#1e1e1e] border-[#333333]">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#f5f5f5]">Summary</h2>

        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-[#252525] border border-[#333333]">
            <p 
              className="text-[#f5f5f5]"
              dangerouslySetInnerHTML={{ __html: formatBoldText(overall.summary) }}
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-[#f5f5f5]">Overall Score</span>
                <span className="font-medium text-[#f5f5f5]">{overall.score}/100</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden bg-[#333333] rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-[#e67373] to-[#7ac97a] transition-all duration-300"
                  style={{ width: `${overall.score}%` }}
                ></div>
              </div>
            </div>

            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-[#f5f5f5]">{category.name}</span>
                  <span className="font-medium text-[#f5f5f5]">{category.score}/100</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden bg-[#333333] rounded-full">
                  <div 
                    className="h-full transition-all duration-300"
                    style={{ 
                      width: `${category.score}%`,
                      backgroundColor: category.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
