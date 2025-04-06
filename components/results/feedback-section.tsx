import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

interface FeedbackSectionProps {
  categories: {
    name: string
    score: number
    color: string
    feedback: {
      type: "positive" | "negative" | "warning"
      text: string
    }[]
  }[]
}

export default function FeedbackSection({ categories }: FeedbackSectionProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "positive":
        return <CheckCircle className="h-5 w-5 text-[#7ac97a]" />
      case "negative":
        return <XCircle className="h-5 w-5 text-[#e67373]" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-amber-500" />
      default:
        return null
    }
  }

  return (
    <Card className="shadow-md bg-[#1e1e1e] border-[#333333]">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#f5f5f5]">Detailed Feedback</h2>

        <Tabs defaultValue={categories[0]?.name || "Content"}>
          <TabsList
            className="grid bg-[#252525]"
            style={{ gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))` }}
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="data-[state=active]:bg-[#333333] text-[#f5f5f5]"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="space-y-4 mt-6">
              {category.feedback.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-md bg-[#252525] border border-[#333333]">
                  {getIcon(item.type)}
                  <p className="text-[#f5f5f5]">{item.text}</p>
                </div>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

